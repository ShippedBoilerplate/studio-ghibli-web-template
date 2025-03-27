import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Hero Image Essence?",
    answer:
      "Hero Image Essence is a platform dedicated to helping businesses and individuals create impactful hero images that capture attention and convey powerful messages. We provide tools and resources to enhance your visual storytelling.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Simply sign up for an account, choose your preferred plan, and begin creating stunning hero images using our intuitive interface. Our platform guides you through the entire process.",
  },
  {
    question: "What image formats do you support?",
    answer:
      "We support all major image formats including JPG, PNG, and WebP. Our platform automatically optimizes your images for web performance while maintaining the highest quality.",
  },
  {
    question: "Can I use my own images?",
    answer:
      "Yes, absolutely! You can upload your own images or choose from our extensive library of high-quality stock photos. We also provide tools to enhance and customize your images.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes, we offer enterprise-level custom solutions for businesses with specific needs. Contact our sales team to discuss your requirements and we'll create a tailored package for you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/dog.jpeg"
                alt="dog"
                className="w-[200px] h-[200px] rounded-sm object-cover"
              />
            </motion.div>
          </div>
          <h2 className="text-4xl font-bold text-center mb-12 font-crimson text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto font-crimson">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="mb-4 rounded-lg overflow-hidden text-slate-700"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-amber-100 bg-opacity-70 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl text-gray-600"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-amber-100 bg-opacity-70">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
