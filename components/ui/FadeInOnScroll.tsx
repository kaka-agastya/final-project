"use client";

import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  duration?: number;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  className = "",
  threshold = 0.1,
  duration = 0.5,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  useEffect(() => {
    // Memulai animasi hanya ketika elemen masuk ke dalam viewport
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      data-inview={inView ? "true" : "false"} // Untuk fallback CSS
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, transform: "translateY(0)" },
        hidden: { opacity: 0, transform: "translateY(20px)" },
      }}
      transition={{ duration }}
      className={`${className} fade-in-scroll`} // Tambahkan kelas CSS untuk fallback
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
