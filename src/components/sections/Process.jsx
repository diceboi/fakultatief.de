"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { SectionLabel, H2, H4, Paragraph } from "@/components/ui/Typography";

const stepKeys = ["step1", "step2", "step3", "step4"];

export default function Process() {
  const t = useTranslations("process");

  return (
    <Section id="process" borderTop>
      {/* Header */}
      <div className="text-center mb-16">
        <SectionLabel className="justify-center mb-4">
          {t("label")}
        </SectionLabel>
        <H2>{t("title")}</H2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        {stepKeys.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative group"
          >
            {/* Connector line (desktop only) */}
            {i < stepKeys.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-border-line z-0" />
            )}

            <div className="relative z-10 text-center px-6">
              {/* Number */}
              <div className="inline-flex items-center justify-center w-20 h-20 border border-border-line group-hover:border-primary transition-colors duration-500 mb-6 bg-dark">
                <span className="font-heading text-3xl text-primary">
                  {t(`steps.${key}.number`)}
                </span>
              </div>

              <H4 className="mb-3 group-hover:text-primary transition-colors duration-300">
                {t(`steps.${key}.title`)}
              </H4>

              <Paragraph color="text-muted" className="max-w-xs mx-auto">
                {t(`steps.${key}.description`)}
              </Paragraph>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
