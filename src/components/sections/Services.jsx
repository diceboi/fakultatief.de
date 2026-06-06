"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGem,
  FaShieldAlt,
  FaCouch,
  FaLightbulb,
  FaCog,
  FaWrench,
} from "react-icons/fa";
import Section from "@/components/ui/Section";
import { SectionLabel, H2, H4, Paragraph } from "@/components/ui/Typography";
import { MainButton } from "@/components/ui/Button";
import { FaWhatsapp } from "react-icons/fa";

const serviceKeys = [
  "polish",
  "ceramic",
  "interior",
  "headlight",
  "engine",
  "transmission",
];

const serviceIcons = {
  polish: FaGem,
  ceramic: FaShieldAlt,
  interior: FaCouch,
  headlight: FaLightbulb,
  engine: FaCog,
  transmission: FaWrench,
};

const serviceImages = {
  polish: "/images/detail-1.webp",
  ceramic: "/images/result-1.webp",
  interior: "/images/work-1.webp",
  headlight: "/images/detail-2.webp",
  engine: "/images/work-3.webp",
  transmission: "/images/work-4.webp",
};

export default function Services() {
  const t = useTranslations("services");

  return (
    <Section id="services" bg="bg-dark-deep" borderTop>
      {/* Header */}
      <div className="text-center mb-16">
        <SectionLabel className="justify-center mb-4">
          {t("label")}
        </SectionLabel>
        <H2>{t("title")}</H2>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-line">
        {serviceKeys.map((key, i) => {
          const Icon = serviceIcons[key];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-dark-deep hover:bg-dark transition-colors duration-500 relative overflow-hidden"
            >
              {/* Card image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={serviceImages[key]}
                  alt={t(`items.${key}.title`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/40 to-transparent" />

                {/* Icon */}
                <div className="absolute bottom-4 left-6 w-12 h-12 border border-primary/50 flex items-center justify-center bg-dark/80 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Icon className="text-primary group-hover:text-dark text-lg transition-colors duration-300" />
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 pt-5">
                <H4 className="mb-3 group-hover:text-primary transition-colors duration-300">
                  {t(`items.${key}.title`)}
                </H4>
                <Paragraph color="text-muted" className="leading-relaxed">
                  {t(`items.${key}.description`)}
                </Paragraph>
              </div>

              {/* Hover border accent */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <MainButton href="https://wa.me/4900000000" iconBefore={<FaWhatsapp />}>
          {t("cta")}
        </MainButton>
      </div>
    </Section>
  );
}
