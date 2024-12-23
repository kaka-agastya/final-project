"use client"
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
    triggerOnce: false,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
