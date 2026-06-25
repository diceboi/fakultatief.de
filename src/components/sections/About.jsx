"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { SectionLabel, H2, Paragraph } from "@/components/ui/Typography";
import { SecondaryButton } from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

// Single crosshair line extending from one specific edge
const SingleLine = ({ type }) => {
  const base = "absolute pointer-events-none border-dashed border-white/20 z-[-1]";
  switch (type) {
    case 'top-left':
      return <div className={`${base} top-0 right-full w-[200vw] h-px border-t`} />;
    case 'top-right':
      return <div className={`${base} top-0 left-full w-[200vw] h-px border-t`} />;
    case 'bottom-left':
      return <div className={`${base} bottom-0 right-full w-[200vw] h-px border-t`} />;
    case 'bottom-right':
      return <div className={`${base} bottom-0 left-full w-[200vw] h-px border-t`} />;
    case 'left-up':
      return <div className={`${base} bottom-full left-0 h-[200vh] w-px border-l`} />;
    case 'left-down':
      return <div className={`${base} top-full left-0 h-[200vh] w-px border-l`} />;
    case 'right-up':
      return <div className={`${base} bottom-full right-0 h-[200vh] w-px border-l`} />;
    case 'right-down':
      return <div className={`${base} top-full right-0 h-[200vh] w-px border-l`} />;
    default:
      return null;
  }
};

// Image component with floating animation and extending grid lines
const FloatingImage = ({ src, alt, positionClass, delay, sizeClass, lines = [] }) => (
  <motion.div
    className={`absolute z-0 ${sizeClass} ${positionClass}`}
    animate={{ 
      y: [0, -10, 0]
    }}
    transition={{ 
      duration: 5 + Math.random() * 3, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: delay 
    }}
  >
    {lines.map((line, idx) => (
      <SingleLine key={idx} type={line} />
    ))}
    <div className="relative w-full h-full border border-white/20 overflow-hidden bg-dark z-10">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 150px, 300px" />
    </div>
  </motion.div>
);

export default function About() {
  const t = useTranslations("about");

  return (
    <Section id="about" className="relative overflow-hidden min-h-[90vh] flex items-center justify-center py-20 md:py-32 bg-dark">
      
      {/* Top fade to gently hide the extending lines at the section boundary */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent z-20 pointer-events-none" />

      {/* Background scattered images (closer to text and straight) */}
      
      {/* Top Left (Hidden on mobile) */}
      <FloatingImage 
        src="/images/polish-1.webp" 
        alt="Polish" 
        positionClass="hidden md:block top-[15%] left-[15%]" 
        delay={0}
        sizeClass="w-24 h-32 sm:w-32 sm:h-40 lg:w-48 lg:h-64"
        lines={['top-left', 'left-up']}
      />
      
      {/* Top Right (Visible on mobile, top-right corner) */}
      <FloatingImage 
        src="/images/garage-2.webp" 
        alt="Garage" 
        positionClass="top-[5%] right-[2%] md:top-[20%] md:right-[15%]" 
        delay={1}
        sizeClass="w-20 h-28 sm:w-36 sm:h-48 lg:w-56 lg:h-72"
        lines={['top-right', 'right-up']}
      />

      {/* Bottom Left (Visible on mobile, bottom-left corner) */}
      <FloatingImage 
        src="/images/detail-1.webp" 
        alt="Detailing" 
        positionClass="bottom-[5%] left-[2%] md:bottom-[15%] md:left-[20%]" 
        delay={2}
        sizeClass="w-24 h-32 sm:w-40 sm:h-52 lg:w-64 lg:h-80"
        lines={['bottom-left', 'left-down']}
      />

      {/* Bottom Right (Hidden on mobile) */}
      <FloatingImage 
        src="/images/result-3.webp" 
        alt="Result" 
        positionClass="hidden md:block bottom-[20%] right-[15%]" 
        delay={1.5}
        sizeClass="w-24 h-32 sm:w-32 sm:h-40 lg:w-48 lg:h-64"
        lines={['bottom-right', 'right-down']}
      />

      {/* Middle Left (Hidden on mobile) */}
      <FloatingImage 
        src="/images/gallery-1.webp" 
        alt="Gallery" 
        positionClass="hidden md:block top-[50%] left-[10%]" 
        delay={0.5}
        sizeClass="w-20 h-28 sm:w-28 sm:h-36 lg:w-40 lg:h-56"
        lines={['top-left', 'bottom-left']}
      />

      {/* Center Text Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto text-center px-6 py-12 md:py-16 bg-dark/85 md:bg-dark/70 backdrop-blur-md border border-white/20"
      >
        <SectionLabel className="justify-center mb-6">
          {t("label")}
        </SectionLabel>
        
        <H2 className="mb-8 mx-auto max-w-lg leading-tight">
          {t("title")}
        </H2>
        
        <Paragraph className="mb-10 text-white/80 leading-relaxed text-lg md:text-xl">
          {t("description")}
        </Paragraph>

        <div className="flex justify-center">
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
        </div>
      </motion.div>
    </Section>
  );
}
