import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BrandStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[hsl(var(--section-alt))] py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-4xl px-6 sm:px-12 text-center">
        <motion.p
          className="text-xl font-normal italic leading-relaxed text-foreground sm:text-2xl lg:text-3xl lg:leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          From concept to execution, we transform brand visions into tangible experiences that captivate audiences and create meaningful connections.
        </motion.p>
      </div>
    </section>
  );
};

export default BrandStatement;
