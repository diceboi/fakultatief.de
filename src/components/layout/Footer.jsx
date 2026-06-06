"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const navKeys = ["home", "about", "services", "gallery", "contact"];
const serviceKeys = ["polish", "ceramic", "interior", "headlight", "engine", "transmission"];

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const services = useTranslations("services");

  const scrollTo = (key) => {
    const ids = {
      home: "hero",
      about: "about",
      services: "services",
      gallery: "gallery",
      contact: "contact",
    };
    document.getElementById(ids[key])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-deep border-t border-border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1 — Brand */}
          <div>
            <Image
              src="/logos/fakultatief-cyan-logo-typo.svg"
              alt="Fakultatief Garage"
              width={160}
              height={28}
              className="h-7 w-auto mb-5"
            />
            <p
              className="font-body text-muted leading-relaxed mb-6"
              style={{ fontSize: "var(--type-small)" }}
            >
              {t("description")}
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaInstagram, href: "#" },
                { icon: FaFacebookF, href: "#" },
                { icon: FaWhatsapp, href: "https://wa.me/4900000000" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border-line flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h5 className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-6">
              {t("quickLinks")}
            </h5>
            <ul className="space-y-3">
              {navKeys.map((key) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo(key)}
                    className="font-body text-muted hover:text-white hover:pl-2 transition-all duration-300 cursor-pointer"
                    style={{ fontSize: "var(--type-small)" }}
                  >
                    {nav(key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h5 className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-6">
              {t("ourServices")}
            </h5>
            <ul className="space-y-3">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="font-body text-muted hover:text-white hover:pl-2 transition-all duration-300 cursor-pointer"
                    style={{ fontSize: "var(--type-small)" }}
                  >
                    {services(`items.${key}.title`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h5 className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-6">
              {t("contactTitle")}
            </h5>
            <ul className="space-y-3">
              <li
                className="font-body text-muted"
                style={{ fontSize: "var(--type-small)" }}
              >
                info@fakultatief.de
              </li>
              <li
                className="font-body text-muted"
                style={{ fontSize: "var(--type-small)" }}
              >
                +49 XXX XXXXXXX
              </li>
              <li
                className="font-body text-muted"
                style={{ fontSize: "var(--type-small)" }}
              >
                Deutschland
              </li>
              <li
                className="font-body text-muted"
                style={{ fontSize: "var(--type-small)" }}
              >
                Mo – Fr: 08:00 – 17:00
              </li>
              <li
                className="font-body text-muted"
                style={{ fontSize: "var(--type-small)" }}
              >
                Sa: 09:00 – 14:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-line">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="font-body text-muted"
            style={{ fontSize: "var(--type-small)" }}
          >
            © {new Date().getFullYear()} Fakultatief Garage. {t("rights")}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-muted hover:text-primary transition-colors duration-300"
              style={{ fontSize: "var(--type-small)" }}
            >
              {t("impressum")}
            </a>
            <a
              href="#"
              className="font-body text-muted hover:text-primary transition-colors duration-300"
              style={{ fontSize: "var(--type-small)" }}
            >
              {t("datenschutz")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
