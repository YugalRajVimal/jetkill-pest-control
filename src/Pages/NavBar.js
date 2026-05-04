/**
 * JETKILL PEST CONTROL - Complete Landing Page
 * =============================================
 * Stack: React + Tailwind CSS + Framer Motion + Swiper + React Icons
 *
 * Install deps:
 *   npm install framer-motion swiper react-icons
 *
 * Tailwind config: ensure `content` includes this file path.
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // <-- Import react-router-dom

import "swiper/css";
import "swiper/css/pagination";

import {
  FaBug,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false); // Close mobile menu on route change
  }, [location]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Define classes that swap only the text color on scroll
  const textClass = scrolled ? "text-green-900" : "text-white";
  const subTextClass = scrolled ? "text-green-800" : "text-gray-400";
  const navLinkClass = scrolled
    ? "text-green-900 hover:text-lime-600"
    : "text-gray-300 hover:text-lime-400";

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`fixed top-4 w-[96vw] z-50 rounded-2xl transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-2xl"
          : "bg-green-950/85 backdrop-blur-xl"
      }`}
      style={{ right: "auto" }}
    >
      <div className="flex items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
            <FaBug className="text-green-900 text-lg" />
          </div>
          <div>
            <span className={`font-black text-lg tracking-wide ${textClass}`}>
              Jet<span className="text-lime-400">kill</span>
            </span>
            <p className={`text-[9px] uppercase tracking-widest -mt-0.5 ${subTextClass}`}>
              Pest Control
            </p>
          </div>
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`${navLinkClass} text-sm font-medium transition-colors duration-200 relative group`}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="tel:+918802830115"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={`hidden md:flex items-center gap-2 bg-lime-400 hover:bg-lime-300 ${
            scrolled ? "text-green-900" : "text-green-900"
          } font-bold text-sm px-5 py-2.5 rounded-xl transition-colors duration-200 shadow-lg`}
        >
          Free Estimate <FaArrowRight className="text-xs" />
        </motion.a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-xl p-1 ${textClass}`}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className={`${navLinkClass} text-sm font-medium transition-colors`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <a
                href="tel:+918802830115"
                className="bg-lime-400 text-green-900 font-bold text-sm px-5 py-3 rounded-xl text-center"
                onClick={() => setOpen(false)}
              >
                Free Estimate →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};