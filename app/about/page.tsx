import Image from "next/image";
import { Building2, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { CertGrid } from "@/components/site/cert-grid";
import { CtaBand } from "@/components/site/cta-band";
import { ParallaxLayer } from "@/components/site/parallax";
import { Reveal } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { StatCounter } from "@/components/site/stat-counter";
import { TextReveal } from "@/components/site/text-reveal";
import { ABOUT } from "@/lib/content/about";
import { FACILITIES } from "@/lib/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Know Us",
  description:
    "Asset-based cross-border carrier since 1999 — our trucks, drivers, and terminals on both sides of the U.S.–Mexico border. Meet the team behind 25,000+ loads a year.",
};

const PILLAR_ICONS: readonly LucideIcon[] = [ShieldCheck, Wrench, Building2];

const ABOUT_STATS = [
  { value: "25+", label: "Years Operating" },
  { value: "1,200+", label: "Cities Served" },
  { value: "25,000+", label: "Loads Annually" },
  { value: "500+", label: "Employees" },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <ParallaxLayer amount={48} scale={1.12}>
            <Image
              src={ABOUT.hero.bgImage}
              alt=""
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
            />
          </ParallaxLayer>
          <div className="absolute inset-0 bg-brand-indigo/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-indigo-deep/70" />
          <div className="animate-aurora absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
          <div className="grain-layer absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        </div>
        <div className="relative mx-auto flex min-h-[45dvh] w-full max-w-screen-2xl flex-col justify-center px-4 py-16 text-white md:min-h-[55dvh] md:py-24 md:px-8">
          <p className="animate-rise text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
            {ABOUT.hero.eyebrow}
          </p>
          <TextReveal
            as="h1"
            text={ABOUT.hero.headline}
            className="mt-4 max-w-4xl font-display text-display-md font-black leading-[0.95] tracking-[-0.02em] sm:text-display-lg"
          />
          <p
            className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-fg-subtle md:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            {ABOUT.hero.subhead}
          </p>
        </div>

        {/* Stats strip */}
        <div className="glass relative border-t border-white/10">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent"
          />
          <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-2 gap-y-8 px-4 py-8 md:grid-cols-4 md:divide-x md:divide-white/10 md:py-10 md:px-8">
            {ABOUT_STATS.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / HISTORY */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              {ABOUT.mvh.eyebrow}
            </p>
            <TextReveal
              as="h2"
              text={ABOUT.mvh.headline}
              className="mt-3 max-w-3xl font-display text-display-sm font-extrabold tracking-tight sm:text-display-md"
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ABOUT.mvh.items.map((item, i) => (
              <Reveal as="li" key={item.label} delay={i * 0.08}>
                <SpotlightCard
                  className="h-full rounded-2xl border border-black/5 bg-muted/30 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-indigo/10"
                  glow="color-mix(in oklab, var(--color-brand-red) 12%, transparent)"
                >
                  <span className="font-display text-sm font-extrabold tracking-[0.3em] text-brand-red/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
                    {item.label}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-fg-muted md:text-lg">
                    {item.body}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* BUILT ON EXPERTISE — PILLARS */}
      <section className="bg-muted/30 py-16 md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              {ABOUT.pillarsIntro.eyebrow}
            </p>
            <TextReveal
              as="h2"
              text={ABOUT.pillarsIntro.headline}
              className="mt-3 max-w-3xl font-display text-display-sm font-extrabold tracking-tight sm:text-display-md"
            />
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-fg-muted md:text-lg">
              {ABOUT.pillarsIntro.body}
            </p>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {ABOUT.pillars.map((pillar, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <Reveal as="li" key={pillar.title} delay={i * 0.1}>
                  <SpotlightCard
                    className="h-full rounded-2xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-indigo/10"
                    glow="color-mix(in oklab, var(--color-brand-red) 12%, transparent)"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red ring-1 ring-brand-red/20 transition-transform duration-300 group-hover/spot:scale-110">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-extrabold uppercase tracking-wider">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-fg-muted">{pillar.body}</p>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              {ABOUT.story.eyebrow}
            </p>
            <TextReveal
              as="h2"
              text={ABOUT.story.headline}
              className="mt-3 font-display text-display-sm font-extrabold tracking-tight sm:text-display-md"
            />
            {ABOUT.story.body.map((p, i) => (
              <p
                key={i}
                className="mt-5 text-base leading-relaxed text-fg-muted md:text-lg"
              >
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
            <ParallaxLayer amount={36}>
              <Image
                src={ABOUT.story.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </ParallaxLayer>
          </Reveal>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-muted/30 py-16 md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <ParallaxLayer amount={36}>
                <Image
                  src={ABOUT.facilities.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </ParallaxLayer>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
                {ABOUT.facilities.eyebrow}
              </p>
              <TextReveal
                as="h2"
                text={ABOUT.facilities.headline}
                className="mt-3 font-display text-display-sm font-extrabold tracking-tight sm:text-display-md"
              />
              <p className="mt-5 text-base leading-relaxed text-fg-muted md:text-lg">
                {ABOUT.facilities.body}
              </p>
            </Reveal>
          </div>

          {/* US + MX address quick view */}
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <SpotlightCard
                className="h-full rounded-2xl border border-black/5 bg-white p-8 transition-all duration-300 hover:border-brand-red/30 hover:shadow-lg hover:shadow-brand-indigo/10"
                glow="color-mix(in oklab, var(--color-brand-red) 10%, transparent)"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                  {FACILITIES.us.region}
                </p>
                <p className="mt-3 font-display text-xl font-extrabold uppercase tracking-wider">
                  {FACILITIES.us.legalName}
                </p>
                <ul className="mt-5 space-y-3">
                  <li className="text-sm">
                    <span className="font-medium">
                      San Antonio, TX — Headquarters
                    </span>
                    <span className="block text-fg-muted">
                      {FACILITIES.us.headquarters.address.join(", ")}
                    </span>
                  </li>
                  {FACILITIES.us.terminals.map((t) => (
                    <li key={t.city} className="text-sm">
                      <span className="font-medium">{t.city}</span>
                      {t.address && (
                        <span className="block text-fg-muted">{t.address}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
            <Reveal delay={0.08}>
              <SpotlightCard
                className="h-full rounded-2xl border border-black/5 bg-white p-8 transition-all duration-300 hover:border-brand-red/30 hover:shadow-lg hover:shadow-brand-indigo/10"
                glow="color-mix(in oklab, var(--color-brand-red) 10%, transparent)"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                  {FACILITIES.mx.region}
                </p>
                <p className="mt-3 font-display text-xl font-extrabold uppercase tracking-wider">
                  {FACILITIES.mx.legalName}
                </p>
                <ul className="mt-5 space-y-3">
                  {FACILITIES.mx.facilities.map((o) => (
                    <li key={o.city} className="text-sm">
                      <span className="font-medium">{o.city}</span>
                      <span className="block text-fg-muted">{o.address}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AI / CARTA PORTE */}
      <section className="grain relative isolate overflow-hidden bg-brand-indigo py-16 text-white md:py-24 lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid absolute inset-0 opacity-[0.15]" />
          <div className="animate-aurora absolute -right-20 top-0 h-80 w-80 rounded-full bg-brand-red/15 blur-3xl" />
          <div className="grain-layer absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        </div>
        <div className="mx-auto w-full max-w-3xl px-4 text-center md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              {ABOUT.ai.eyebrow}
            </p>
            <TextReveal
              as="h2"
              text={ABOUT.ai.headline}
              className="mt-3 font-display text-display-sm font-extrabold tracking-tight sm:text-display-md"
            />
            <p className="mt-6 text-base leading-relaxed text-fg-subtle md:text-lg">
              {ABOUT.ai.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-muted/30 py-16 md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <Reveal>
            <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              Partnerships & Certifications
            </p>
            <h2 className="mt-3 text-center font-display text-display-sm font-extrabold tracking-tight text-balance sm:text-display-md">
              Certified by the agencies that matter
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <CertGrid />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        eyebrow="Since 1999"
        title="Ready to ship with confidence?"
        body="Talk to the team that's been crossing the border for twenty-five years."
      />
    </>
  );
}
