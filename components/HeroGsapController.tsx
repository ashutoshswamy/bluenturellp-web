"use client";

import { RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  heroSectionRef: RefObject<HTMLElement | null>;
  rightContainerRef: RefObject<HTMLDivElement | null>;
  leftContainerRef: RefObject<HTMLDivElement | null>;
  heroTextRef: RefObject<HTMLDivElement | null>;
  tlRef: RefObject<ReturnType<typeof gsap.timeline> | null>;
  heroReadyRef: RefObject<boolean>;
  journeyRef: RefObject<HTMLDivElement | null>;
  expertiseCardRefs: RefObject<(HTMLDivElement | null)[]>;
  railRef: RefObject<HTMLDivElement | null>;
};

/**
 * All gsap/ScrollTrigger/@gsap-react work, code-split out of HomeContent and
 * mounted via next/dynamic({ssr:false}). gsap+ScrollTrigger+useGSAP is ~144K
 * of JS that has to be fetched, parsed, and executed before hydration can
 * finish on a cold reload — that parse/exec was competing with hydration on
 * the exact same main thread the drop-in animation needs, which is what
 * produced the "smooth on client nav, laggy on hard reload" split (client
 * nav reuses the already-parsed chunk; a cold load pays for it fresh).
 * Splitting it into its own chunk lets the hero's server-rendered markup
 * (text + images — unaffected, still SSR'd, no CLS/SEO cost) hydrate first,
 * then this controller's chunk arrives and drives the same DOM via the refs
 * passed down from HomeContent.
 */
export default function HeroGsapController({
  heroSectionRef,
  rightContainerRef,
  leftContainerRef,
  heroTextRef,
  tlRef,
  heroReadyRef,
  journeyRef,
  expertiseCardRefs,
  railRef,
}: Props) {
  useGSAP(
    () => {
      const containers = [rightContainerRef.current, leftContainerRef.current].filter(Boolean);
      if (!containers.length || !heroTextRef.current) return;

      gsap.set(containers, { willChange: 'transform, opacity' });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          gsap.set(containers, { clearProps: 'willChange' });
          // Idle bounce once the drop-in settles — small, staggered, never resting.
          if (rightContainerRef.current) {
            gsap.to(rightContainerRef.current, {
              y: -16,
              duration: 2.2,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1,
            });
          }
          if (leftContainerRef.current) {
            gsap.to(leftContainerRef.current, {
              y: -16,
              duration: 2.4,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1,
              delay: 0.4,
            });
          }
        },
      });
      tlRef.current = tl;

      // HomeContent flips heroReadyRef once the loading screen has revealed
      // the site AND the container images are decoded. If that already
      // happened before this (dynamically imported) controller chunk even
      // arrived, play immediately instead of waiting on a callback that
      // already fired.
      if (heroReadyRef.current) {
        tl.play();
      }

      // Shorter travel + power3 (instead of -500px/power4) so the containers
      // ease in rather than snapping to a near-stop in the first few frames.
      // Opacity gets its own faster tween: a full-length fade reads as ghosting
      // while the element is still visibly moving.
      tl.fromTo(
        rightContainerRef.current,
        { y: -340, rotate: 10 },
        { y: 0, rotate: 4, duration: 1.6 },
        0
      )
        .fromTo(
          rightContainerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power1.out' },
          0
        )
        .fromTo(
          leftContainerRef.current,
          { y: -340, rotate: -10 },
          { y: 0, rotate: -4, duration: 1.6 },
          0.12
        )
        .fromTo(
          leftContainerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power1.out' },
          0.12
        )
        .fromTo(
          heroTextRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
          0.35
        );
    },
    { scope: heroSectionRef }
  );

  // Rail-fill ScrollTrigger for the Expertise manifest — its start/end are
  // computed from journeyRef's layout position. font-display: swap can
  // change text metrics (and therefore this section's height/position)
  // after ScrollTrigger has already measured it, which desyncs start/end
  // from where the section actually ends up — visible as a scrub that
  // starts too early/late on first load. document.fonts.ready below
  // re-measures once webfonts have actually swapped in.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const rows = expertiseCardRefs.current;
        let activeIndex = -1;

        if (!railRef.current || !journeyRef.current) return;

        gsap.set(railRef.current, { scaleY: 0 });

        gsap.to(railRef.current, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: journeyRef.current,
            start: 'top 75%',
            end: 'bottom 55%',
            scrub: 1,
          },
        });

        const highlight = ScrollTrigger.create({
          trigger: journeyRef.current,
          start: 'top 75%',
          end: 'bottom 55%',
          onUpdate: (self) => {
            const idx = Math.min(rows.length - 1, Math.floor(self.progress * rows.length));
            if (idx === activeIndex) return;
            activeIndex = idx;

            rows.forEach((el, i) => {
              if (!el) return;
              const isActive = i === idx;
              gsap.to(el, {
                borderLeftColor: isActive ? 'var(--color-primary-500)' : 'transparent',
                backgroundColor: isActive ? 'rgba(57, 166, 214, 0.05)' : 'rgba(57, 166, 214, 0)',
                duration: 0.4,
                ease: 'power2.out',
              });
              const dot = el.querySelector<HTMLElement>('.rail-dot');
              if (dot) {
                gsap.to(dot, {
                  backgroundColor: isActive ? 'var(--color-primary-500)' : 'var(--color-neutral-50)',
                  borderColor: isActive ? 'var(--color-primary-500)' : 'var(--color-neutral-300)',
                  scale: isActive ? 1.3 : 1,
                  duration: 0.4,
                  ease: 'power2.out',
                });
              }
              const code = el.querySelector<HTMLElement>('.rail-code');
              if (code) {
                gsap.to(code, {
                  color: isActive ? 'var(--color-primary-600)' : 'var(--color-neutral-400)',
                  duration: 0.4,
                  ease: 'power2.out',
                });
              }
            });
          },
        });

        return () => highlight.kill();
      });

      if (typeof document !== 'undefined' && 'fonts' in document) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      return () => mm.revert();
    },
    { scope: journeyRef }
  );

  return null;
}
