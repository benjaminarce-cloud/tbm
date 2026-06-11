import Image from "next/image";
import { CtaBand } from "@/components/site/cta-band";
import { ParallaxLayer } from "@/components/site/parallax";
import { Reveal } from "@/components/site/reveal";
import { ServiceGrid } from "@/components/site/service-grid";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { TextReveal } from "@/components/site/text-reveal";
import {
  SERVICES_AI,
  SERVICES_TECH,
  SERVICE_FEATURES,
} from "@/lib/content/services";
import { TECH_PARTNERS } from "@/lib/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network & Services",
  description:
    "Border crossing, bonded warehousing, intermodal, fleet maintenance, and real-time tracking — asset-based cross-border logistics across the U.S., Mexico, and Canada.",
};

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <ParallaxLayer amount={48} scale={1.12}>
            <Image
              src="/brand/TBM-C-21.jpg"
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
          <div className="animate-aurora absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
          <div className="grain-layer absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        </div>
        <div className="relative mx-auto flex min-h-[45dvh] w-full max-w-screen-2xl flex-col justify-center px-4 py-16 text-white md:min-h-[55dvh] md:py-24 md:px-8">
          <p className="animate-rise text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
            Our Commitment
          </p>
          <TextReveal
            as="h1"
            text="Every shipment receives the attention it deserves — no matter the size"
            className="mt-4 max-w-4xl font-display text-display-md font-black leading-[0.95] tracking-[-0.02em] sm:text-display-lg"
          />
          <p
            className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-fg-subtle md:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            Asset-based cross-border logistics, end-to-end. Six service areas,
            one accountable team.
          </p>
        </div>
      </section>

      {/* SERVICE GRID (BENTO) */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              Our Services
            </p>
            <TextReveal
              as="h2"
              text="Reliable, end-to-end shipping solutions"
              className="mt-3 max-w-3xl font-display text-display-sm font-extrabold tracking-tight sm:text-display-md"
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <ServiceGrid />
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grain relative isolate overflow-hidden bg-brand-indigo py-16 text-white md:py-24 lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid absolute inset-0 opacity-[0.15]" />
          <div className="animate-aurora absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand-red/15 blur-3xl" />
          <div className="grain-layer absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        </div>
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              Integrated Logistics Solutions
            </p>
            <TextReveal
              as="h2"
              text="Designed for performance and reliability"
              className="mt-3 max-w-3xl font-display text-display-sm font-extrabold tracking-tight sm:text-display-md"
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 max-md:-mx-4 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:px-4 max-md:pb-3 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
            {SERVICE_FEATURES.map((feature, i) => (
              <Reveal as="li" key={feature.title} delay={i * 0.1} className="max-md:w-[82vw] max-md:shrink-0 max-md:snap-center">
                <SpotlightCard
                  className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 lg:p-8"
                  glow="color-mix(in oklab, var(--color-brand-red) 22%, transparent)"
                >
                  <span className="font-display text-sm font-extrabold tracking-[0.3em] text-brand-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase tracking-wider">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-fg-subtle">{feature.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* AI / CARTA PORTE */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              {SERVICES_AI.eyebrow}
            </p>
            <TextReveal
              as="h2"
              text={SERVICES_AI.headline}
              className="mt-3 font-display text-display-sm font-extrabold tracking-tight sm:text-display-md"
            />
            <p className="mt-6 text-base leading-relaxed text-fg-muted md:text-lg">
              {SERVICES_AI.body}
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
          >
            <ParallaxLayer amount={36}>
              <Image
                src={SERVICES_AI.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-left"
              />
            </ParallaxLayer>
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-muted/30 py-16 md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              {SERVICES_TECH.eyebrow}
            </p>
            <TextReveal
              as="h2"
              text={SERVICES_TECH.headline}
              className="mt-3 max-w-3xl font-display text-display-sm font-extrabold tracking-tight sm:text-display-md"
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICES_TECH.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.08}>
                <SpotlightCard
                  className="h-full rounded-2xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-lg hover:shadow-brand-indigo/10"
                  glow="color-mix(in oklab, var(--color-brand-red) 12%, transparent)"
                >
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-fg-muted">
                    {item.body}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </ul>

          {/* Partner logos */}
          <Reveal delay={0.2} className="mt-16">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-fg-subtle">
              Powered by industry-leading platforms
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-12 grayscale opacity-80 transition-[opacity,filter] hover:opacity-100 hover:grayscale-0">
              {TECH_PARTNERS.map((p) => (
                <Image
                  key={p.name}
                  src={p.logo}
                  alt={p.name}
                  width={140}
                  height={48}
                  className="h-10 w-auto"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        eyebrow="Six services, one team"
        title="Move freight. Move confidently."
        body="Tell us your lane — a cross-border specialist replies within 24 hours."
      />
    </>
  );
}
