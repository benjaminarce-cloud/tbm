import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { CopyButton } from "@/components/site/copy-button";
import { CtaBand } from "@/components/site/cta-band";
import { NetworkMap } from "@/components/site/network-map";
import { ParallaxLayer } from "@/components/site/parallax";
import { Reveal } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { ContactSalesLink } from "@/components/site/site-links";
import { TextReveal } from "@/components/site/text-reveal";
import { FACILITIES, OFFICES } from "@/lib/content/site";
import { telHref } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach TBM Carriers' cross-border specialists by phone or email — offices in San Antonio and Mexicali, terminals at every major U.S.–Mexico gateway.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <ParallaxLayer amount={48} scale={1.12}>
            <Image
              src="/brand/tbm-persons.jpg"
              alt=""
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-[center_30%]"
            />
          </ParallaxLayer>
          <div className="absolute inset-0 bg-brand-indigo/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-indigo-deep/70" />
          <div className="animate-aurora absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
          <div className="grain-layer absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        </div>
        <div className="relative mx-auto flex min-h-[38dvh] w-full max-w-screen-2xl flex-col justify-center px-4 py-14 text-white md:min-h-[45dvh] md:py-20 md:px-8">
          <p className="animate-rise text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
            Contact
          </p>
          <TextReveal
            as="h1"
            text="Talk to a real person, in either country"
            className="mt-4 max-w-3xl font-display text-display-md font-black leading-[0.95] tracking-[-0.02em] sm:text-display-lg"
          />
          <p
            className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-fg-subtle md:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            One number, one inbox, one accountable team — on both sides of the
            border.
          </p>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="bg-muted/30 py-16 md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              How to reach us
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-display-sm font-extrabold tracking-tight text-balance sm:text-display-md">
              One team, on both sides of the border
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
              No forms, no phone trees — reach a real specialist directly, by
              email or phone.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-md:-mx-4 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:px-4 max-md:pb-3 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
            {/* Sales */}
            <Reveal as="div" className="sm:col-span-2 lg:col-span-1 max-md:w-[82vw] max-md:shrink-0 max-md:snap-center">
              <SpotlightCard
                className="h-full rounded-2xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-indigo/10"
                glow="color-mix(in oklab, var(--color-brand-red) 12%, transparent)"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <Mail className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl font-extrabold uppercase tracking-wider">
                  Talk to sales
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                  Lanes, capacity, pricing — reach our cross-border specialists.
                  We reply within 24 hours.
                </p>
                <ContactSalesLink className="shine-hover group mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact Sales
                </ContactSalesLink>
              </SpotlightCard>
            </Reveal>

            {/* US phones */}
            <Reveal as="div" delay={0.08} className="max-md:w-[82vw] max-md:shrink-0 max-md:snap-center">
              <SpotlightCard
                className="h-full rounded-2xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-indigo/10"
                glow="color-mix(in oklab, var(--color-brand-red) 12%, transparent)"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <Phone className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 flex items-center gap-2.5 font-display text-xl font-extrabold uppercase tracking-wider">
                  <Image
                    src="/brand/eua-flag-tbm.jpg"
                    alt="United States flag"
                    width={28}
                    height={16}
                    className="h-4 w-7 rounded-[3px] object-cover ring-1 ring-black/10"
                  />
                  Call us — U.S.
                </h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {OFFICES[0].phones.map((p) => (
                    <li key={p} className="flex items-center justify-between gap-2">
                      <a
                        href={telHref(p)}
                        className="font-medium tabular-nums text-foreground transition-colors hover:text-brand-red"
                      >
                        {p}
                      </a>
                      <CopyButton text={p} label={`Copy phone number ${p}`} />
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>

            {/* MX phones */}
            <Reveal as="div" delay={0.16} className="max-md:w-[82vw] max-md:shrink-0 max-md:snap-center">
              <SpotlightCard
                className="h-full rounded-2xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-indigo/10"
                glow="color-mix(in oklab, var(--color-brand-red) 12%, transparent)"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <Phone className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 flex items-center gap-2.5 font-display text-xl font-extrabold uppercase tracking-wider">
                  <Image
                    src="/brand/mx-flag-tbm.jpg"
                    alt="Mexico flag"
                    width={28}
                    height={16}
                    className="h-4 w-7 rounded-[3px] object-cover ring-1 ring-black/10"
                  />
                  Call us — Mexico
                </h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {OFFICES[1].phones.map((p) => (
                    <li key={p} className="flex items-center justify-between gap-2">
                      <a
                        href={telHref(p)}
                        className="font-medium tabular-nums text-foreground transition-colors hover:text-brand-red"
                      >
                        {p}
                      </a>
                      <CopyButton text={p} label={`Copy phone number ${p}`} />
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              Our Facilities
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-display-sm font-extrabold tracking-tight text-balance sm:text-display-md">
              Offices in the U.S. and Mexico
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {OFFICES.map((office, i) => (
              <Reveal as="li" key={office.region} delay={i * 0.1}>
                <SpotlightCard
                  className="h-full rounded-2xl border border-black/5 bg-muted/30 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-lg hover:shadow-brand-indigo/10"
                  glow="color-mix(in oklab, var(--color-brand-red) 10%, transparent)"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                    {office.region}
                  </p>
                  <p className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wider">
                    {office.legalName}
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-fg-muted">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                        aria-hidden="true"
                      />
                      <address className="not-italic leading-relaxed">
                        {office.address.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                        aria-hidden="true"
                      />
                      <ul className="space-y-1">
                        {office.phones.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <a
                              href={telHref(p)}
                              className="tabular-nums transition-colors hover:text-brand-red"
                            >
                              {p}
                            </a>
                            <CopyButton text={p} label={`Copy phone number ${p}`} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                        aria-hidden="true"
                      />
                      <ContactSalesLink className="transition-colors hover:text-brand-red">
                        Contact sales
                      </ContactSalesLink>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* COVERAGE MAPS */}
      <section className="bg-muted/30 py-16 md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              Coverage Maps
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-display-sm font-extrabold tracking-tight text-balance sm:text-display-md">
              Where TBM moves freight
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
              Asset-based terminals, drop yards, and crossings on both sides of
              the U.S.&ndash;Mexico border, plus extended Canadian crossings.
            </p>
          </Reveal>
          <Reveal delay={0.05} className="mt-12">
            <NetworkMap />
          </Reveal>
        </div>
      </section>

      {/* FACILITIES (extended) */}
      <section className="bg-brand-indigo py-16 text-white md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              Our Facilities
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-display-sm font-extrabold tracking-tight text-balance sm:text-display-md">
              Where TBM operates
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* US */}
            <Reveal>
              <SpotlightCard
                className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-colors duration-300 hover:border-brand-red/40"
                glow="color-mix(in oklab, var(--color-brand-red) 18%, transparent)"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                  {FACILITIES.us.region}
                </p>
                <p className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wider">
                  {FACILITIES.us.legalName}
                </p>

                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                      Terminals
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {FACILITIES.us.terminals.map((t) => (
                        <li key={t.city} className="text-sm">
                          <span className="font-medium">{t.city}</span>
                          {t.address && (
                            <span className="block text-fg-subtle">
                              {t.address}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                      Drop Yards
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {FACILITIES.us.dropYards.map((y) => (
                        <li
                          key={y}
                          className="rounded-full border border-white/15 bg-white/[0.02] px-3 py-1 text-xs"
                        >
                          {y}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                      Border Crossings
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {FACILITIES.us.borderCrossings.map((b) => (
                        <li
                          key={b}
                          className="rounded-full border border-white/15 bg-white/[0.02] px-3 py-1 text-xs"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* MX */}
            <Reveal delay={0.1}>
              <SpotlightCard
                className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-colors duration-300 hover:border-brand-red/40"
                glow="color-mix(in oklab, var(--color-brand-red) 18%, transparent)"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                  {FACILITIES.mx.region}
                </p>
                <p className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wider">
                  {FACILITIES.mx.legalName}
                </p>

                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                      Facilities
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {FACILITIES.mx.facilities.map((o) => (
                        <li key={o.city} className="text-sm">
                          <span className="font-medium">{o.city}</span>
                          <span className="block text-fg-subtle">
                            {o.address}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                      Sales & Operations Offices
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {FACILITIES.mx.offices.map((o) => (
                        <li key={o.city} className="text-sm">
                          <span className="font-medium">{o.city}</span>
                          <span className="block text-fg-subtle">
                            {o.address}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                      Border Terminals
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {FACILITIES.mx.terminals.map((b) => (
                        <li
                          key={b}
                          className="rounded-full border border-white/15 bg-white/[0.02] px-3 py-1 text-xs"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                      Maintenance
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {FACILITIES.mx.maintenance.map((m) => (
                        <li
                          key={m}
                          className="rounded-full border border-white/15 bg-white/[0.02] px-3 py-1 text-xs"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Let's move your freight"
        body="One inbox, one accountable team — across 1,200+ cities in the U.S., Mexico, and Canada."
      />
    </>
  );
}
