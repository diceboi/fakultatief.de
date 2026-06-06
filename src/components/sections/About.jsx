"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Section from "@/components/ui/Section";
import { SectionLabel, H2, Paragraph } from "@/components/ui/Typography";
import { SecondaryButton } from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  const t = useTranslations("about");
  const features = ["experience", "quality", "studio", "guarantee"];

  return (
    <Section id="about" borderTop>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-border-line">
            <Image
              src="/images/garage-1.webp"
              alt="Fakultatief Garage Studio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-0 left-0 bg-primary px-6 py-4">
              <span className="font-heading text-2xl text-dark block leading-none">
                5+
              </span>
              <span className="font-body text-xs uppercase tracking-wider text-dark/80 font-medium">
                Jahre Erfahrung
              </span>
            </div>
          </div>

          {/* Decorative line */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary/30 hidden lg:block" />
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <SectionLabel className="mb-4">{t("label")}</SectionLabel>
          <H2 className="mb-6">{t("title")}</H2>
          <Paragraph className="mb-8">{t("description")}</Paragraph>

          {/* Features list */}
          <ul className="space-y-4 mb-10">
            {features.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 border border-primary flex items-center justify-center">
                  <FaCheck className="text-primary text-[10px]" />
                </span>
                <span className="font-body text-white/80" style={{ fontSize: "var(--type-body)" }}>
                  {t(`features.${key}`)}
                </span>
              </li>
            ))}
          </ul>

          <SecondaryButton
            iconAfter={<FaArrowRight />}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("cta")}
          </SecondaryButton>
        </motion.div>
      </div>
    </Section>
  );
}
