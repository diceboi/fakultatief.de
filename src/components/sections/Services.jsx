"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGem,
  FaShieldAlt,
  FaCouch,
  FaLightbulb,
  FaCog,
  FaWrench,
  FaTools,
  FaOilCan,
} from "react-icons/fa";
import Section from "@/components/ui/Section";
import { SectionLabel, H2, H4, Paragraph } from "@/components/ui/Typography";
import { MainButton } from "@/components/ui/Button";
import { FaWhatsapp } from "react-icons/fa";

const CATEGORIES = {
  POLISH: "polish",
  SERVICE: "service",
};

const itemsByCategory = {
  [CATEGORIES.POLISH]: ["polish", "ceramic", "interior", "headlight"],
  [CATEGORIES.SERVICE]: ["transmission", "engine", "brakes", "oil"],
};

const serviceIcons = {
  polish: FaGem,
  ceramic: FaShieldAlt,
  interior: FaCouch,
  headlight: FaLightbulb,
  engine: FaCog,
  transmission: FaWrench,
  brakes: FaTools,
  oil: FaOilCan,
};

const serviceImages = {
  polish: "/images/detail-1.webp",
  ceramic: "/images/result-1.webp",
  interior: "/images/work-1.webp",
  headlight: "/images/detail-2.webp",
  engine: "/images/work-3.webp",
  transmission: "/images/work-4.webp",
  brakes: "/images/work-2.webp",
  oil: "/images/garage-2.webp",
};

export default function Services() {
  const t = useTranslations("services");
  const [activeTab, setActiveTab] = useState(CATEGORIES.POLISH);

  const activeKeys = itemsByCategory[activeTab];

  return (
    <Section id="services" bg="bg-dark-deep" borderTop>
      {/* Header */}
      <div className="text-center mb-10">
        <SectionLabel className="justify-center mb-4">
          {t("label")}
        </SectionLabel>
        <H2>{t("title")}</H2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-dark p-1 border border-white/10">
          <button
            onClick={() => setActiveTab(CATEGORIES.POLISH)}
            className={`px-8 py-3 font-heading uppercase tracking-widest text-sm transition-colors duration-300 ${
              activeTab === CATEGORIES.POLISH ? "bg-primary text-dark" : "text-white/60 hover:text-white"
            }`}
          >
            {t("tabs.polish")}
          </button>
          <button
            onClick={() => setActiveTab(CATEGORIES.SERVICE)}
            className={`px-8 py-3 font-heading uppercase tracking-widest text-sm transition-colors duration-300 ${
              activeTab === CATEGORIES.SERVICE ? "bg-primary text-dark" : "text-white/60 hover:text-white"
            }`}
          >
            {t("tabs.service")}
          </button>
        </div>
      </div>

      {/* Services grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
      >
        <AnimatePresence mode="popLayout">
          {activeKeys.map((key, i) => {
            const Icon = serviceIcons[key];
            return (
              <motion.div
                key={key}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-dark-deep hover:bg-dark border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden"
              >
                {/* Card image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={serviceImages[key]}
                    alt={t(`items.${key}.title`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
        </AnimatePresence>
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-14">
        <MainButton href="https://wa.me/4900000000" iconBefore={<FaWhatsapp />}>
          {t("cta")}
        </MainButton>
      </div>
    </Section>
  );
}
