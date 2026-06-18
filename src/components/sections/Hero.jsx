"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { H1 } from "@/components/ui/Typography";
import { MainButton, SecondaryButton } from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-1.webp"
          alt="Fakultatief Garage Studio"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-12 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-primary/30 px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-medium">
              {t("badge")}
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <H1 className="mb-2" weight="font-black">
              {t("title")}
            </H1>
          </motion.div>

          {/* Cyan accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="h-px bg-primary mb-6"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="font-body text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <MainButton
              href="https://wa.me/4900000000"
              iconBefore={<FaWhatsapp />}
            >
              {t("cta")}
            </MainButton>
            <SecondaryButton
              iconAfter={<FaArrowRight />}
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("ctaSecondary")}
            </SecondaryButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom thin line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border-line" />

      {/* Decorative corner accents */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="w-16 h-16 border-r border-b border-primary/30" />
      </div>
    </section>
  );
}
