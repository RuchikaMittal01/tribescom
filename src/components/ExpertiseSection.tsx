import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import activationsImg from "@/assets/expertise-activations.jpg";
import eventsImg from "@/assets/expertise-events.jpg";
import exhibitionsImg from "@/assets/expertise-exhibitions.jpg";
import ruralImg from "@/assets/expertise-rural.jpg";
import techImg from "@/assets/expertise-tech.jpg";

const expertiseItems = [
  {
    title: "Brand Activations",
    description: "Strategic, immersive touchpoints that drive participation, engagement, and brand recall across consumer and corporate environments.",
    image: activationsImg,
  },
  {
    title: "Event Management",
    description: "End-to-end execution of large-scale corporate events, product launches, conferences, summits, and award shows across India and international markets.",
    image: eventsImg,
  },
  {
    title: "Exhibitions & Expos",
    description: "Concept-to-execution expo management, combining design, fabrication, and technology to deliver high-impact brand presence and measurable ROX.",
    image: exhibitionsImg,
  },
  {
    title: "Rural Marketing",
    description: "Localized outreach programs that connect brands with rural audiences through culturally relevant, on-ground engagement.",
    image: ruralImg,
  },
  {
    title: "Tech-Enabled Experiences",
    description: "Generative AI, Integration of AR, VR, kinetic installations, 3D anamorphic visuals, and interactive formats to elevate live experiences.",
    image: techImg,
  },
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <motion.h2
          className="text-2xl font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Our Expertise
        </motion.h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group overflow-hidden rounded-lg bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
