"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import Section from "@/components/ui/Section";
import { SectionLabel, H2, H4, Paragraph } from "@/components/ui/Typography";
import { MainButton } from "@/components/ui/Button";

export default function Contact() {
  const t = useTranslations("contact");

  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      label: t("info.address"),
      value: t("info.addressValue"),
    },
    { icon: FaPhone, label: t("info.phone"), value: t("info.phoneValue") },
    { icon: FaEnvelope, label: t("info.email"), value: t("info.emailValue") },
    { icon: FaClock, label: t("info.hours"), value: t("info.hoursValue") },
  ];

  return (
    <Section id="contact" borderTop>
      {/* WhatsApp banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative border border-primary/30 bg-primary/5 p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary" />

        <div className="text-center md:text-left">
          <H4 color="text-primary" className="mb-2">
            {t("whatsappBanner")}
          </H4>
          <Paragraph color="text-white/60">
            {t("info.hoursValue")}
          </Paragraph>
        </div>
        <MainButton
          href="https://wa.me/4900000000"
          iconBefore={<FaWhatsapp />}
          iconAfter={<FaArrowRight />}
          className="flex-shrink-0"
        >
          {t("whatsappBtn")}
        </MainButton>
      </motion.div>

      {/* Header */}
      <div className="text-center mb-12">
        <SectionLabel className="justify-center mb-4">
          {t("label")}
        </SectionLabel>
        <H2>{t("title")}</H2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 border border-border-line flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <Icon className="text-primary text-lg" />
                </div>
                <div>
                  <span className="font-body text-xs uppercase tracking-wider text-muted block mb-1">
                    {label}
                  </span>
                  <span
                    className="font-body text-white/90"
                    style={{ fontSize: "var(--type-body)" }}
                  >
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Partner logos */}
          <div className="mt-12 pt-8 border-t border-border-line">
            <span className="font-body text-xs uppercase tracking-wider text-muted block mb-4">
              Partner
            </span>
            <div className="flex items-center gap-8 opacity-40">
              {["bosch", "bbs", "rowe", "sachs"].map((p) => (
                <img
                  key={p}
                  src={`/partners/${p}.png`}
                  alt={p}
                  className="h-8 w-auto grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder={t("form.name")}
                className="w-full bg-transparent border border-border-line px-5 py-4 font-body text-white placeholder:text-muted/50 focus:border-primary focus:outline-none transition-colors duration-300"
                style={{ fontSize: "var(--type-body)" }}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t("form.email")}
                className="w-full bg-transparent border border-border-line px-5 py-4 font-body text-white placeholder:text-muted/50 focus:border-primary focus:outline-none transition-colors duration-300"
                style={{ fontSize: "var(--type-body)" }}
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder={t("form.message")}
                className="w-full bg-transparent border border-border-line px-5 py-4 font-body text-white placeholder:text-muted/50 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                style={{ fontSize: "var(--type-body)" }}
              />
            </div>
            <MainButton
              color="bg-primary"
              hoverColor="hover:bg-white"
              textColor="text-dark"
              iconAfter={<FaArrowRight />}
              className="w-full justify-center"
            >
              {t("form.send")}
            </MainButton>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
