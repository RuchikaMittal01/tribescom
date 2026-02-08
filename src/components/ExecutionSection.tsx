import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import executionBg from "@/assets/execution-bg.jpg";

const ExecutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-normal leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Execution with Purpose
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl lg:leading-relaxed">
              Working with both private enterprises and government bodies, Latitude XP brings together creative thinking, operational rigor, and on-ground excellence to deliver experiences that are immersive, scalable, and memorable.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={executionBg}
              alt="Behind the scenes event execution"
              className="w-full rounded-lg object-cover shadow-lg aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSection;
