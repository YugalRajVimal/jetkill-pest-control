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

import React from "react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaBug,
  FaPhone,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { MdSanitizer } from "react-icons/md";
import { GiBed, GiAnt } from "react-icons/gi";
import { BsBuildingFill } from "react-icons/bs";

// Add Quick Links based on App.js routes, for SPA navigation (assume React Router)
const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const SERVICES = [
  {
    icon: <FaBug size={18} />,
    title: "Vector Control",
    desc: "Professional vector control eliminating mosquitoes, flies and disease-carrying insects from your premises using approved methods.",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74320d54e?w=400&h=400&fit=crop",
  },
  {
    icon: <FaBug size={18} />,
    title: "Termite Control",
    desc: "Comprehensive termite treatment using advanced drilling & chemical barrier methods to protect your property from structural damage.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  },
  {
    icon: <GiBed size={22} />,
    title: "Bed Bugs Control",
    desc: "Effective bed bug elimination using heat treatment and pesticides ensuring a completely pest-free sleep environment.",
    image:
      "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=400&h=400&fit=crop",
  },
  {
    icon: <GiAnt size={22} />,
    title: "General Pest Control",
    desc: "Complete pest management for cockroaches, ants, rodents, lizards, and all common household and commercial pests.",
    image:
      "https://images.unsplash.com/photo-1632163567268-ef07af25d9ce?w=400&h=400&fit=crop",
  },
  {
    icon: <MdSanitizer size={22} />,
    title: "Disinfection Service",
    desc: "Professional sanitization and disinfection using WHO-approved chemicals for homes, offices, hospitals and commercial spaces.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=400&fit=crop",
  },
  {
    icon: <BsBuildingFill size={18} />,
    title: "Post Construction Termite Treatment",
    desc: "Specialized anti-termite treatment post-construction to safeguard your new building from subterranean and drywood termites.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop",
  },
];

// ─────────────────────────────────────────────
// 13. FOOTER
// ─────────────────────────────────────────────
export const Footer = () => (
  <footer className="bg-green-950 pt-16 pb-6 overflow-hidden relative">
    {/* Deco bug outlines */}
    <div className="absolute bottom-0 left-0 opacity-[0.04] text-[180px] sm:text-[260px] text-white pointer-events-none select-none">
      <FaBug />
    </div>
    <div className="absolute top-4 right-0 opacity-[0.04] text-[120px] sm:text-[180px] text-white rotate-12 pointer-events-none select-none">
      <FaBug />
    </div>

    <div className="max-w-6xl mx-auto px-3 sm:px-6 relative z-10">
      <div className="grid grid-cols-1 gap-10 mb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
              <FaBug className="text-green-900 text-lg" />
            </div>
            <span className="text-white font-black text-lg">
              Jet<span className="text-lime-400">kill</span>
            </span>
          </div>
          <h4 className="text-white font-bold text-base mb-3">
            About Our Company
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            We are a trusted pest control service provider offering safe,
            effective, and affordable solutions for homes and businesses across
            Delhi-NCR.
          </p>
          <div className="flex gap-3">
            {[FaPinterest, FaTwitter, FaFacebook, FaInstagram].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full border border-lime-400/30 flex items-center justify-center text-lime-400 hover:bg-lime-400 hover:text-green-900 transition-all duration-200"
                >
                  <Icon className="text-sm" />
                </motion.a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-gray-400 hover:text-lime-400 text-sm transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 flex-shrink-0" />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-base mb-4">Our Services</h4>
          <ul className="space-y-2.5">
            {SERVICES.map((svc) => (
              <li key={svc.title}>
                <a
                  href="/services"
                  className="flex items-center gap-2 text-gray-400 hover:text-lime-400 text-sm transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 flex-shrink-0" />
                  {svc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours + Contact */}
        <div>
          <h4 className="text-white font-bold text-base mb-4">
            Working Hours
          </h4>
          <ul className="space-y-2.5 mb-6">
            {[
              "Monday – Saturday: 9:00 AM – 7:00 PM",
              "Sunday: Emergency Services Available",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-gray-400 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="border-t border-white/10 pt-5">
            <p className="text-gray-500 text-xs mb-2">Contact Us!</p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="w-10 h-10 rounded-full bg-lime-400/20 border border-lime-400/30 flex items-center justify-center mb-2 sm:mb-0">
                <FaPhone className="text-lime-400 text-sm rotate-90" />
              </div>
              <div>
                <a
                  href="tel:+918802830115"
                  className="text-white font-bold text-sm block hover:text-lime-400 transition-colors"
                >
                  +91-8802830115
                </a>
                <a
                  href="tel:+919205576058"
                  className="text-lime-400 font-bold text-sm block hover:text-lime-300 transition-colors"
                >
                  +91-9205576058
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-green-900/50 border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col gap-4 md:flex-row md:items-center md:gap-5 mb-10">
        <div className="flex items-center gap-3 w-full justify-center md:justify-start md:w-52 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
            <FaBug className="text-green-900" />
          </div>
          <span className="text-white font-bold text-lg">Jetkill</span>
        </div>
        <p className="text-gray-300 text-sm font-semibold w-full md:flex-1 text-center md:text-left">
          Newsletter Subscription
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter Email Address*"
            className="flex-1 md:w-64 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-lime-400 hover:bg-lime-300 text-green-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2 whitespace-nowrap transition-colors"
          >
            Subscribe <FaArrowRight />
          </motion.button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-6 text-center">
        <p className="text-gray-500 text-sm break-words">
          Copyright © 2026 Jetkill Pest Control. All Rights Reserved. | Powered
          by{" "}
          <span className="text-lime-400 font-semibold">
            Satyajeet Technical Expertise
          </span>
          {" "} | Tech Partner{" "}
          <a
            href="https://gowappily.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-400 font-semibold underline hover:text-lime-300 transition-colors"
          >
            GoWappily Infotech
          </a>
        </p>
      </div>
    </div>
  </footer>
);