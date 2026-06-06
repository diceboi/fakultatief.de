"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import { SectionLabel, H2 } from "@/components/ui/Typography";

const galleryItems = [
  { src: "/images/result-1.webp", category: "ceramic", alt: "Ceramic coating result" },
  { src: "/images/car-1.webp", category: "polish", alt: "Car polishing" },
  { src: "/images/studio-1.webp", category: "studio", alt: "Detailing studio" },
  { src: "/images/work-1.webp", category: "interior", alt: "Interior cleaning" },
  { src: "/images/result-2.webp", category: "ceramic", alt: "Ceramic coating" },
  { src: "/images/car-2.webp", category: "polish", alt: "Paint correction" },
  { src: "/images/gallery-1.webp", category: "polish", alt: "Polishing work" },
  { src: "/images/garage-2.webp", category: "studio", alt: "Garage view" },
  { src: "/images/result-3.webp", category: "ceramic", alt: "Finished result" },
  { src: "/images/work-2.webp", category: "interior", alt: "Interior detailing" },
  { src: "/images/gallery-2.webp", category: "polish", alt: "Paint shine" },
  { src: "/images/result-4.webp", category: "ceramic", alt: "Ceramic finish" },
];

const filterKeys = ["all", "polish", "ceramic", "interior", "studio"];

export default function Gallery() {
  const t = useTranslations("gallery");
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <Section id="gallery" bg="bg-dark-deep" borderTop>
      {/* Header */}
      <div className="text-center mb-10">
        <SectionLabel className="justify-center mb-4">
          {t("label")}
        </SectionLabel>
        <H2>{t("title")}</H2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filterKeys.map((key) => (
          <button
            key={key}
            onClick={() => {
              setFilter(key);
              setShowAll(false);
            }}
            className={`px-5 py-2.5 text-sm uppercase tracking-wider font-body border transition-all duration-300 cursor-pointer ${
              filter === key
                ? "bg-primary text-dark border-primary font-semibold"
                : "bg-transparent text-white/60 border-border-line hover:border-primary hover:text-white"
            }`}
          >
            {t(`filters.${key}`)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-line">
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <motion.div
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-square overflow-hidden bg-dark-deep cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show more */}
      {!showAll && filtered.length > 8 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 border border-border-line text-white/60 font-body text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
          >
            {t("cta")}
          </button>
        </div>
      )}
    </Section>
  );
}
