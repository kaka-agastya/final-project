"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/Barunastra ITS. (1) (1).svg"
          alt="logo"
          width={200}
          height={29}
          className="pr-10"
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            passHref
            className="regular-16 text-gray-100 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative">
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <Image
              src={isMenuOpen ? "/close.svg" : "/menu.svg"}
              alt={isMenuOpen ? "close" : "menu"}
              width={30}
              height={30}
              style={{ filter: "invert(1)" }}
            />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-0 right-0 mt-16 mr-4 bg-blue-70 shadow-lg rounded-lg p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-2 right-2"
            >
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </button>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  passHref
                  className="regular-16 text-white cursor-pointer transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
