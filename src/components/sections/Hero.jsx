"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { H2 } from "@/components/ui/Typography";
import { MainButton } from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("hero");
  const [hovered, setHovered] = useState(null);

  // Desktop split points
  const getDesktopPoints = () => {
    if (hovered === "left") return { topX: 65, bottomX: 55 };
    if (hovered === "right") return { topX: 45, bottomX: 35 };
    return { topX: 55, bottomX: 45 };
  };
  const { topX, bottomX } = getDesktopPoints();
  const desktopLeftClip = `polygon(0 0, ${topX}% 0, ${bottomX}% 100%, 0 100%)`;
  const desktopRightClip = `polygon(${topX}% 0, 100% 0, 100% 100%, ${bottomX}% 100%)`;

  // Mobile split points
  const getMobilePoints = () => {
    if (hovered === "left") return { leftY: 65, rightY: 75 };
    if (hovered === "right") return { leftY: 25, rightY: 35 };
    return { leftY: 45, rightY: 55 };
  };
  const { leftY, rightY } = getMobilePoints();
  const mobileTopClip = `polygon(0 0, 100% 0, 100% ${rightY}%, 0 ${leftY}%)`;
  const mobileBottomClip = `polygon(0 ${leftY}%, 100% ${rightY}%, 100% 100%, 0 100%)`;

  const transition = { duration: 0.7, ease: [0.32, 0.72, 0, 1] };

  const scrollToServices = (e) => {
    e.stopPropagation();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMobileClick = (side) => {
    setHovered(hovered === side ? null : side);
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-dark">
      
      {/* =========================================
          MOBILE LAYOUT
          Diagonal Top/Bottom Split
      ========================================= */}
      <div className="md:hidden absolute inset-0 z-10">
        {/* Diagonal line separating the two sides */}
        <svg className="absolute inset-0 w-full h-full z-40 pointer-events-none drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
          <defs>
            <linearGradient id="mobile-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="15%" stopColor="white" stopOpacity="0" />
              <stop offset="25%" stopColor="white" stopOpacity="1" />
              <stop offset="75%" stopColor="white" stopOpacity="1" />
              <stop offset="85%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.line
            initial={false}
            animate={{ y1: `${leftY}%`, y2: `${rightY}%` }}
            x1="0%"
            x2="100%"
            stroke="url(#mobile-line-gradient)"
            strokeWidth="2"
            transition={transition}
          />
        </svg>

        {/* TOP SIDE: Polír */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-start cursor-pointer group"
          initial={false}
          animate={{ clipPath: mobileTopClip }}
          transition={transition}
          onClick={() => handleMobileClick("left")}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/polish-1.webp"
              alt={t("polish")}
              fill
              className="object-cover transition-transform duration-1000 ease-out"
              style={{ transform: hovered === "left" ? "scale(1.05)" : "scale(1)" }}
              priority
            />
            <div
              className="absolute inset-0 transition-colors duration-700"
              style={{ backgroundColor: hovered === "left" ? "rgba(10,10,10,0.75)" : "rgba(10,10,10,0.95)" }}
            />
          </div>

          <div className="relative z-30 w-full h-[50%] flex flex-col items-center justify-center pt-10">
            <motion.div
              animate={{ scale: hovered === "left" ? 1.05 : 1 }}
              transition={transition}
              className="text-center flex flex-col items-center"
            >
              <H2 className="text-white mb-4 drop-shadow-xl tracking-widest lowercase">
                {t("polish")}
              </H2>
              <motion.div
                animate={{ opacity: hovered === "left" ? 1 : 0.6, y: hovered === "left" ? 0 : 10 }}
                transition={transition}
              >
                <MainButton onClick={scrollToServices} iconAfter={<FaArrowRight />} className="shadow-lg py-2.5 px-5 text-sm">
                  {t("details")}
                </MainButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* BOTTOM SIDE: Szervíz */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-end cursor-pointer group"
          initial={false}
          animate={{ clipPath: mobileBottomClip }}
          transition={transition}
          onClick={() => handleMobileClick("right")}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/garage-1.webp"
              alt={t("service")}
              fill
              className="object-cover transition-transform duration-1000 ease-out"
              style={{ transform: hovered === "right" ? "scale(1.05)" : "scale(1)" }}
              priority
            />
            <div
              className="absolute inset-0 transition-colors duration-700"
              style={{ backgroundColor: hovered === "right" ? "rgba(10,10,10,0.75)" : "rgba(10,10,10,0.95)" }}
            />
          </div>

          <div className="relative z-30 w-full h-[50%] flex flex-col items-center justify-center pb-10">
            <motion.div
              animate={{ scale: hovered === "right" ? 1.05 : 1 }}
              transition={transition}
              className="text-center flex flex-col items-center"
            >
              <H2 className="text-white mb-4 drop-shadow-xl tracking-widest lowercase">
                {t("service")}
              </H2>
              <motion.div
                animate={{ opacity: hovered === "right" ? 1 : 0.6, y: hovered === "right" ? 0 : 10 }}
                transition={transition}
              >
                <MainButton onClick={scrollToServices} iconAfter={<FaArrowRight />} className="shadow-lg py-2.5 px-5 text-sm">
                  {t("details")}
                </MainButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          DESKTOP LAYOUT
          Diagonal Left/Right Split
      ========================================= */}
      <div className="hidden md:block absolute inset-0 z-10">
        <svg className="absolute inset-0 w-full h-full z-40 pointer-events-none drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
          <defs>
            <linearGradient id="desktop-line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="15%" stopColor="white" stopOpacity="0" />
              <stop offset="25%" stopColor="white" stopOpacity="1" />
              <stop offset="75%" stopColor="white" stopOpacity="1" />
              <stop offset="85%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.line
            initial={false}
            animate={{ x1: `${topX}%`, x2: `${bottomX}%` }}
            y1="0%"
            y2="100%"
            stroke="url(#desktop-line-gradient)"
            strokeWidth="2"
            transition={transition}
          />
        </svg>

        {/* LEFT SIDE: Polír */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-start cursor-pointer group"
          initial={false}
          animate={{ clipPath: desktopLeftClip }}
          transition={transition}
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/polish-1.webp"
              alt={t("polish")}
              fill
              className="object-cover transition-transform duration-1000 ease-out"
              style={{ transform: hovered === "left" ? "scale(1.05)" : "scale(1)" }}
              priority
            />
            <div
              className="absolute inset-0 transition-colors duration-700"
              style={{ backgroundColor: hovered === "left" ? "rgba(10,10,10,0.75)" : "rgba(10,10,10,0.95)" }}
            />
          </div>

          <div className="relative z-30 w-[55%] flex flex-col items-center justify-center pl-4 md:pl-10 lg:pl-20">
            <motion.div
              animate={{ scale: hovered === "left" ? 1.05 : 1 }}
              transition={transition}
              className="text-center flex flex-col items-center"
            >
              <H2 className="text-white mb-6 drop-shadow-xl tracking-widest lowercase">
                {t("polish")}
              </H2>
              <motion.div
                animate={{ opacity: hovered === "left" ? 1 : 0.6, y: hovered === "left" ? 0 : 10 }}
                transition={transition}
              >
                <MainButton onClick={scrollToServices} iconAfter={<FaArrowRight />} className="shadow-lg">
                  {t("details")}
                </MainButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Szervíz */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-end cursor-pointer group"
          initial={false}
          animate={{ clipPath: desktopRightClip }}
          transition={transition}
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/garage-1.webp"
              alt={t("service")}
              fill
              className="object-cover transition-transform duration-1000 ease-out"
              style={{ transform: hovered === "right" ? "scale(1.05)" : "scale(1)" }}
              priority
            />
            <div
              className="absolute inset-0 transition-colors duration-700"
              style={{ backgroundColor: hovered === "right" ? "rgba(10,10,10,0.75)" : "rgba(10,10,10,0.95)" }}
            />
          </div>

          <div className="relative z-30 w-[55%] flex flex-col items-center justify-center pr-4 md:pr-10 lg:pr-20">
            <motion.div
              animate={{ scale: hovered === "right" ? 1.05 : 1 }}
              transition={transition}
              className="text-center flex flex-col items-center"
            >
              <H2 className="text-white mb-6 drop-shadow-xl tracking-widest lowercase">
                {t("service")}
              </H2>
              <motion.div
                animate={{ opacity: hovered === "right" ? 1 : 0.6, y: hovered === "right" ? 0 : 10 }}
                transition={transition}
              >
                <MainButton onClick={scrollToServices} iconAfter={<FaArrowRight />} className="shadow-lg">
                  {t("details")}
                </MainButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to match next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent z-50 pointer-events-none" />
    </section>
  );
}
