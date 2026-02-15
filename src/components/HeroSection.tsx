import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import tribesLogo from "@/assets/tribes-logo.png";
import latitudeXpLogo from "@/assets/latitude-xp-logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Large-scale brand activation event"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.65)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-10 sm:px-12 lg:px-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={tribesLogo} alt="Tribes Communication" className="h-10 w-auto" />
        </motion.div>

        {/* Hero text */}
        <div className="max-w-3xl pb-24 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <img src={latitudeXpLogo} alt="Latitude XP - Design & Experiences" className="h-14 w-auto sm:h-18 lg:h-22" />
          </motion.div>

          <motion.p
            className="mt-4 text-lg font-light italic text-primary-foreground/80 sm:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Experiences that <span className="text-primary not-italic font-medium">move people</span>, not just brands.
          </motion.p>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Latitude XP is the experiential marketing and events arm of Tribes Communication, focused on creating high-impact brand experiences across physical spaces. We specialize in turning strategy into action by designing moments where audiences don't just see a brand but engage with it meaningfully.
          </motion.p>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="h-10 w-[1px] bg-primary-foreground/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
