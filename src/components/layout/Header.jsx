"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";

const navItems = ["home", "about", "services", "gallery", "contact"];
const locales = ["de", "en", "hu"];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (newLocale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  const sectionIds = {
    home: "hero",
    about: "about",
    services: "services",
    gallery: "gallery",
    contact: "contact",
  };

  const scrollTo = (key) => {
    setMobileOpen(false);
    const el = document.getElementById(sectionIds[key]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md border-b border-border-line"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex-shrink-0 cursor-pointer">
            <Image
              src="/logos/fakultatief-cyan-logo-typo.svg"
              alt="Fakultatief Garage"
              width={180}
              height={32}
              className="h-7 md:h-8 w-auto"
              priority
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="font-body text-sm uppercase tracking-wider text-white/70 hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t(key)}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-border-line">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`px-2.5 py-1.5 text-xs uppercase tracking-wider font-body transition-all duration-300 cursor-pointer ${
                    locale === loc
                      ? "bg-primary text-dark font-semibold"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/4900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-dark px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-wider hover:bg-white transition-colors duration-300"
            >
              <FaWhatsapp className="text-lg" />
              {t("whatsapp")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white text-2xl cursor-pointer"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-dark-deep/98 backdrop-blur-lg pt-24 px-8 flex flex-col"
          >
            <nav className="flex flex-col gap-6 mb-10">
              {navItems.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="font-heading text-2xl uppercase text-white/80 hover:text-primary transition-colors text-left cursor-pointer"
                >
                  {t(key)}
                </button>
              ))}
            </nav>

            {/* Mobile language */}
            <div className="flex gap-2 mb-8">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`px-4 py-2 text-sm uppercase tracking-wider border border-border-line font-body cursor-pointer ${
                    locale === loc
                      ? "bg-primary text-dark font-semibold"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            {/* Mobile WhatsApp CTA */}
            <a
              href="https://wa.me/4900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary text-dark px-6 py-4 font-body text-base font-semibold uppercase tracking-wider hover:bg-white transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              {t("whatsapp")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
