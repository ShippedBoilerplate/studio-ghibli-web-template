import React from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  quote,
  avatar,
  index,
}) => {
  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-xl max-w-2xl mx-auto text-slate-600 relative"
    >
      <div className="flex items-start gap-6">
        <div
          className={`flex-shrink-0 absolute -top-4 ${
            isOdd ? "-right-[20px]" : "-left-[20px]"
          } shadow-lg`}
        >
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-lg object-cover rotate-[-4deg]"
          />
        </div>
        <div
          className={`flex-grow bg-amber-100 bg-opacity-80 px-6 py-4 rounded-lg ${
            isOdd ? "pr-[100px]" : "pl-[100px]"
          }`}
        >
          <div className="mb-3">
            <p className="font-crimson text-xl drop-shadow-xl">{name}</p>
            <p className="font-crimson text-sm drop-shadow-lg">{role}</p>
          </div>
          <p className="text-lg font-crimson italic drop-shadow-lg">
            "{quote}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Maya R.",
      role: "Dream Weaver & Visual Poet",
      quote:
        "This space feels like a secret garden where creativity blooms freely. Every time I create here, it's like watching stars being born in a midnight sky.",
      avatar: "/avatars/aiko.jpeg",
    },
    {
      name: "Jules K.",
      role: "Pixel Whisperer",
      quote:
        "There's something magical about how everything comes together here. It's as if the platform understands the rhythm of imagination itself.",
      avatar: "/avatars/jules.jpeg",
    },
    {
      name: "Lina S.",
      role: "Digital Dreamscaper",
      quote:
        "In this creative sanctuary, every project feels like embarking on an enchanted journey. The tools here dance with your ideas like fireflies in a summer evening.",
      avatar: "/avatars/lina.jpeg",
    },
  ];

  return (
    <section className="relative z-10 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-crimson text-white">
          Join 200+ dreamers
        </h2>
        <div className="grid grid-cols-1 gap-16 max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
