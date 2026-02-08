import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.7)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-12">
        <motion.h2
          className="text-2xl font-normal leading-snug tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Ready to Create Memorable Experiences?
        </motion.h2>

        <motion.p
          className="mt-5 text-base leading-relaxed text-primary-foreground/75 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Let's transform your brand vision into immersive experiences that resonate and drive results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="mailto:enquiries@tribeww.in"
            className="mt-10 inline-block rounded-md bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
