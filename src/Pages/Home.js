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

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  FaBug, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaCheckCircle, FaArrowRight, FaPlay,
  FaFacebook, FaInstagram, FaTwitter, FaPinterest,
  FaStar, FaShieldAlt, FaLeaf, FaBars, FaTimes,
  FaHome, FaBuilding, FaSprayCan,
} from "react-icons/fa";
import { MdOutlinePestControl, MdSanitizer } from "react-icons/md";
import { GiBed, GiAnt, GiSpray, GiHouseInsects } from "react-icons/gi";
import { BsBuildingFill } from "react-icons/bs";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const NAV_LINKS = ["Home", "About Us", "Services", "Process", "Contact"];

const SERVICES = [
  {
    icon: <FaBug size={18} />,
    title: "Vector Control",
    desc: "Professional vector control eliminating mosquitoes, flies and disease-carrying insects from your premises using approved methods.",
    image: "/Images/img4.jpeg",
  },
  {
    icon: <FaBug size={18} />,
    title: "Termite Control",
    desc: "Comprehensive termite treatment using advanced drilling & chemical barrier methods to protect your property from structural damage.",
    image: "/Images/img5.jpeg",
  },
  {
    icon: <GiBed size={22} />,
    title: "Bed Bugs Control",
    desc: "Effective bed bug elimination using heat treatment and pesticides ensuring a completely pest-free sleep environment.",
    image: "/Images/img6.jpeg",
  },
  {
    icon: <GiAnt size={22} />,
    title: "General Pest Control",
    desc: "Complete pest management for cockroaches, ants, rodents, lizards, and all common household and commercial pests.",
    image: "/Images/img7.jpeg",
  },
  {
    icon: <MdSanitizer size={22} />,
    title: "Disinfection Service",
    desc: "Professional sanitization and disinfection using WHO-approved chemicals for homes, offices, hospitals and commercial spaces.",
    image: "/Images/img8.jpeg",
  },
  {
    icon: <BsBuildingFill size={18} />,
    title: "Post Construction Termite Treatment",
    desc: "Specialized anti-termite treatment post-construction to safeguard your new building from subterranean and drywood termites.",
    image: "/Images/img9.jpeg",
  },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, South Delhi",
    text: "Jetkill Pest Control provided excellent service from start to finish. Their team was professional, punctual and completely eliminated our termite problem. Highly recommended for reliable and affordable pest control services. Satyajeet explained everything clearly and the results were outstanding!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&face",
  },
  {
    name: "Priya Sharma",
    role: "Restaurant Owner, Ashram",
    text: "We had a severe bed bugs and cockroach issue. Jetkill handled it brilliantly. Very thorough and professional. The team follows safety standards strictly which is crucial for our food business. The technicians were knowledgeable and used safe products. Highly satisfied!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
  },
  {
    name: "Amit Verma",
    role: "Office Manager, Jeewan Nagar",
    text: "Outstanding disinfection service! Satyajeet and his team are extremely knowledgeable. They explained the entire process clearly and delivered excellent results. Our office is now completely pest-free. Fast response, transparent pricing, and no hidden costs. Will definitely call again!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
  },
];

const BLOG_POSTS = [
  {
    title: "A Complete Guide to Common Household Pests in Delhi",
    image: "https://images.unsplash.com/photo-1632163567268-ef07af25d9ce?w=600&h=400&fit=crop",
    date: "May 2, 2026",
    category: "Pest Guide",
  },
  {
    title: "Eco-Friendly Pest Control Solutions Safe for Family & Pets",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    date: "Apr 20, 2026",
    category: "Eco Tips",
  },
  {
    title: "Termite Damage: Early Warning Signs Every Homeowner Must Know",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
    date: "Apr 10, 2026",
    category: "Termites",
  },
];

const PEST_TYPES = [
  { name: "Cockroaches", image: "/Images/img11.jpeg" },
  { name: "Mosquitoes",  image: "/Images/img12.jpeg"},
  { name: "Bed Bugs",    image: "/Images/img13.jpeg"},
  { name: "Spiders",    image: "/Images/img14.jpeg"},
];

const STATS = [
  { num: "95%",  label: "Pest Control Success Rate",   icon: <FaCheckCircle /> },
  { num: "4.5K+", label: "Satisfied Customers",         icon: <FaShieldAlt /> },
  { num: "24/7", label: "Emergency Services Available", icon: <FaPhone className="rotate-90"/> },
  { num: "15+",  label: "Years of Experience",          icon: <FaStar /> },
];

// ─────────────────────────────────────────────
// ANIMATION HELPERS
// ─────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const slideLeft  = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const slideRight = { hidden: { opacity: 0, x:  60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

function useReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return [ref, inView];
}

// ─────────────────────────────────────────────
// SHARED: SECTION BADGE
// ─────────────────────────────────────────────
const SectionBadge = ({ text, dark = false }) => (
  <div
    className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border ${
      dark
        ? "bg-green-900/60 border-lime-400/30 text-lime-300"
        : "bg-white border-gray-200 text-green-900"
    }`}
  >
    <span className="w-2 h-2 rounded-full bg-lime-400 inline-block" />
    {text}
  </div>
);

// ─────────────────────────────────────────────
// 1. NAVBAR
// ─────────────────────────────────────────────
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Define classes that swap only the text color on scroll
  const textClass = scrolled
    ? "text-green-900" // Dark text after scroll
    : "text-white";    // Light text at top

  const subTextClass = scrolled
    ? "text-green-800"
    : "text-gray-400";

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
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`${navLinkClass} text-sm font-medium transition-colors duration-200 relative group`}
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="tel:+918802830115"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={`hidden md:flex items-center gap-2 bg-lime-400 hover:bg-lime-300 ${
            scrolled
              ? "text-green-900"
              : "text-green-900"
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
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`${navLinkClass} text-sm font-medium transition-colors`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
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

// ─────────────────────────────────────────────
// 2. HERO SECTION
// ─────────────────────────────────────────────
const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{
      backgroundImage: `url('/Images/hero-bg.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center 30%",
    }}
  >
    {/* Stronger gradient overlay for text visibility */}
    <div className="absolute inset-0 bg-gradient-to-r from-green-950/98 via-green-950/92 to-green-950/55" />
    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-950/70 to-transparent" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-2xl"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <SectionBadge text="Trusted Pest Professionals" dark />
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 drop-shadow-lg">
          Protecting homes with{" "}
          <span className="text-lime-400 drop-shadow-lg">expert pest</span> control
        </motion.h1>

        {/* Sub */}
        <motion.p variants={fadeUp} className="text-gray-100 text-lg mb-8 max-w-lg leading-relaxed drop-shadow">
          Our trained specialists use advanced, eco-friendly solutions to tackle everything
          from termites and bed bugs to vectors and cockroaches.
        </motion.p>

        {/* Feature pills */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-5 mb-10">
          {[
            { icon: <FaShieldAlt />, text: "Safe & Eco-Friendly Treatments" },
            { icon: <FaLeaf />,      text: "Certified & Licensed Experts" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-lime-400 flex items-center justify-center text-green-900 text-lg flex-shrink-0 shadow-lg">
                {item.icon}
              </div>
              <span className="text-white font-semibold text-sm drop-shadow">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 mb-8">
          <motion.a
            href="tel:+918802830115"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="bg-lime-400 hover:bg-lime-300 text-green-900 font-black px-8 py-4 rounded-2xl flex items-center gap-2 shadow-2xl shadow-lime-900/30 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-300"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.10)" }}
          >
            Get Pest Free Today <FaArrowRight />
          </motion.a>
          <motion.a
            href="tel:+919205576058"
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-3 text-white font-semibold hover:text-lime-200 transition-colors focus:outline-none focus:text-lime-200"
          >
            <div className="w-12 h-12 rounded-full bg-lime-400/30 border border-lime-400/70 flex items-center justify-center">
              <FaPlay className="text-lime-300 ml-0.5" />
            </div>
            <span className="drop-shadow">Call Now</span>
          </motion.a>
        </motion.div>

        {/* Phone numbers */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
          {["+91-8802830115", "+91-9205576058"].map((ph) => (
            <a
              key={ph}
              href={`tel:${ph.replace(/-/g, "")}`}
              className="flex items-center gap-2 text-lime-200 hover:text-lime-300 text-sm font-medium transition-colors drop-shadow focus:outline-none"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.48)" }}
            >
              <FaPhone className="text-lime-300 text-xs rotate-90" /> {ph}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// ─────────────────────────────────────────────
// 3. TRUSTED / MARQUEE STRIP
// ─────────────────────────────────────────────
const TrustedSection = () => {
  const certs = [
    "NDMC Certified", "ISO 9001:2015", "CIB Registered",
    "Govt. Licensed", "Eco-Certified", "WHO Standards", "PCO Licensed",
  ];
  return (
    <div className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      <div className="flex items-center gap-6 max-w-6xl mx-auto px-6 flex-wrap justify-between">
        <p className="text-gray-600 text-sm font-medium max-w-[200px] leading-snug">
          Your trusted partner for a healthier, safer, pest-free living environment.
        </p>
        <div className="flex gap-6 flex-wrap">
          {certs.map((c) => (
            <div key={c} className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
              <div className="w-6 h-6 rounded-full bg-lime-100 flex items-center justify-center">
                <FaBug className="text-lime-600 text-xs" />
              </div>
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// 4. ABOUT SECTION
// ─────────────────────────────────────────────
const AboutSection = () => {
  const [ref, inView] = useReveal();
  return (
    <section id="about-us" className="bg-[#f0f0ec] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Images left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Images/img1.jpeg"
                alt="Pest Control Expert"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay small image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-10 -left-8 w-56 h-48 rounded-2xl overflow-hidden border-[5px] border-white shadow-2xl"
            >
              <img
                src="/Images/0.jpeg"
                alt="Pest closeup"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Deco bug */}
            <div className="absolute -top-3 -right-3 text-green-900 opacity-5 text-[120px] pointer-events-none select-none">
              <FaBug />
            </div>
          </motion.div>

          {/* Content right */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="pt-4"
          >
            <SectionBadge text="About Us" />
            <h2 className="text-4xl md:text-5xl font-black text-green-900 leading-tight mb-5">
              Dedicated to protecting your home from pests
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to provide comprehensive and reliable pest control solutions
              that ensure the safety and comfort of your home. With{" "}
              <span className="font-bold text-green-900">Satyajeet's Technical Expertise</span>,
              Jetkill delivers unmatched premium pest control across Delhi-NCR.
            </p>

            {/* Card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
              <div className="flex gap-5">
                <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src="/Images/img3.jpeg"
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    Certified experts providing comprehensive pest management for homes, offices & commercial spaces.
                  </p>
                  <div className="space-y-1.5">
                    {["Certified & Experienced Technicians", "Advanced Detection & Removal Methods", "Transparent Pricing & No Hidden Costs"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="text-lime-500 flex-shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Years */}
            <div className="flex items-center gap-4 mb-7">
              <div>
                <span className="text-5xl font-black text-green-900">15+</span>
                <p className="text-gray-500 text-sm mt-0.5">Years providing expert pest control solutions</p>
              </div>
            </div>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-green-900 font-black px-7 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              Learn More About Us <FaArrowRight />
            </motion.a>
       
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// 5. SERVICES SECTION
// ─────────────────────────────────────────────
const ServicesSection = () => {
  const [ref, inView] = useReveal();
  return (
    <section id="services" className="bg-[#f0f0ec] pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionBadge text="Our Services" />
          <h2 className="text-4xl md:text-5xl font-black text-green-900 max-w-2xl mx-auto leading-tight">
            Safe and reliable pest control services solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-3xl p-7 text-center transition-shadow duration-300 cursor-pointer"
            >
              {/* Circular image */}
              <div className="relative w-32 h-32 mx-auto mb-5">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#f0f0ec]">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                </div>
                {/* Icon badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-green-900 shadow-lg">
                  {svc.icon}
                </div>
              </div>
              <h3 className="font-black text-green-900 text-lg mb-2">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed ">{svc.desc}</p>
              {/* <div className="border-t border-gray-100 pt-4">
                <a href="#contact" className="inline-flex items-center gap-2 font-bold text-green-900 hover:text-lime-600 text-sm transition-colors">
                  Learn More <FaArrowRight className="text-xs" />
                </a>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center mt-12 gap-2"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden">
                  <img src={`https://i.pravatar.cc/40?img=${n + 10}`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-9 h-9 rounded-full bg-lime-400 border-2 border-white flex items-center justify-center text-green-900 text-xs font-bold">+</div>
            </div>
            <p className="text-gray-600 text-sm">
              Advanced pest control for safe, clean spaces –{" "}
              <a href="/services" className="text-lime-600 font-semibold underline underline-offset-2">View All Services</a>
            </p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            {[1,2,3,4,5].map((i) => <FaStar key={i} className="text-lime-400 text-lg" />)}
            <span className="font-black text-green-900 text-lg ml-1">4.9/5</span>
            <span className="text-gray-500 text-sm ml-1">Over 4200 Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// 6. WHY CHOOSE US
// ─────────────────────────────────────────────
const WhyChooseSection = () => {
  const [ref, inView] = useReveal();
  return (
    <section className="bg-white py-28">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <SectionBadge text="Why Choose Us" />
            <h2 className="text-4xl md:text-5xl font-black text-green-900 leading-tight mb-5">
              Why choose us for reliable affordable pest control
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our experienced technicians use proven methods and eco-friendly treatments to
              deliver reliable, long-lasting results with transparent pricing and no hidden costs.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: <FaShieldAlt />, title: "Safe for Children",   desc: "Child-safe treatments tough on pests, gentle for your family." },
                { icon: <FaLeaf />,      title: "Transparent Pricing", desc: "Clear, upfront pricing for all services. No surprises." },
                { icon: <FaHome />,      title: "Home & Office",       desc: "Residential and commercial pest management solutions." },
                { icon: <FaPhone className="rotate-90"/>,     title: "Same-Day Service",    desc: "Rapid response team available for emergency treatments." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-11 h-11 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-lime-400 flex-shrink-0">
                <img
                  src="/Images/img7.jpeg"
                  alt="Satyajeet Kushwaha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-green-900">Satyajeet Kushwaha</p>
                <p className="text-gray-500 text-xs">Founder & Technical Expert, Jetkill Pest Control</p>
                <p className="text-gray-600 text-sm mt-1 italic">"Award-winning pest control with 15+ years of trusted Delhi expertise."</p>
              </div>
            </div>
          </motion.div>

          {/* Right images */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="w-[78%] ml-auto h-[260px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/Images/img7.jpeg"
                alt="Pest"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[72%] h-[310px] rounded-2xl overflow-hidden shadow-2xl mt-4 mr-auto">
              <img
                src="/Images/img8.jpeg"
                alt="Technician"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute bottom-8 right-0 bg-white rounded-2xl px-6 py-4 shadow-2xl"
            >
              <div className="text-4xl font-black text-green-900">95%</div>
              <div className="text-gray-500 text-xs font-medium">Pest Control Success Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// 7. CORE FEATURES (dark green BG)
// ─────────────────────────────────────────────
const CoreFeaturesSection = () => {
  const [ref, inView] = useReveal();
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Safe for Children",
      desc: "We use carefully selected products that are tough on pests while being completely safe for your family and pets.",
      points: ["Child-Safe Treatment Method", "Low-Odor, Safe Applications"],
    },
    {
      icon: <FaBug />,
      title: "Advanced Pest Detection",
      desc: "Cutting-edge technology and methods to identify and eliminate pest infestations at their source.",
      points: ["Carefully Tested Products", "Family Service Standards"],
    },
    {
      icon: <FaPhone className="rotate-90"/>,
      title: "Same-Day Service",
      desc: "Quick response and same-day service availability for urgent pest control needs across Delhi-NCR.",
      points: ["Emergency Response Available", "Safe Indoor Applications"],
    },
  ];

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1584515933487-779824d29309?w=1600&h=900&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-green-950/90" />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionBadge text="Core Feature" dark />
          <h2 className="text-4xl md:text-5xl font-black text-white max-w-2xl mx-auto leading-tight">
            Core features that set our pest control services apart
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              whileHover={{ borderColor: "rgba(163,212,64,0.5)", y: -4 }}
              className="bg-green-950/60 backdrop-blur-sm border border-white/10 rounded-2xl p-7 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center text-green-900 text-xl mb-5 shadow-lg">
                {feat.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{feat.title}</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">{feat.desc}</p>
              {feat.points.map((pt) => (
                <div key={pt} className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                  <FaCheckCircle className="text-lime-400 flex-shrink-0" /> {pt}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-16 border-t border-white/10 pt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-white font-semibold mb-6">Certified and Licensed Pest Control Experts</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["NDMC Certified","ISO 9001:2015","CIB Registered","Govt. Approved","WHO Standards","PCO Licensed"].map((cert) => (
              <div key={cert} className="flex items-center gap-2 text-gray-400 text-sm">
                <FaCheckCircle className="text-lime-400" /> {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// 8. PEST TYPES + STATS
// ─────────────────────────────────────────────
const PestTypesSection = () => {
  const [ref, inView] = useReveal();
  return (
    <section className="bg-[#f0f0ec] py-28">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionBadge text="Protected / Safety" />
          <h2 className="text-4xl md:text-5xl font-black text-green-900 leading-tight max-w-xl mx-auto">
            Protecting your home with expert pest control
          </h2>
        </motion.div>

        {/* Pest circles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {PEST_TYPES.map((pest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative w-36 h-36">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-lime-300">
                  <img src={pest.image} alt={pest.name} className="w-full h-full object-cover" />
                </div>
                {/* X cross */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-full h-full rounded-full border-[3px] border-lime-400">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[135%] h-[3px] bg-lime-400 rotate-45 absolute rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <span className="font-bold text-green-900 text-base">{pest.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="border-t border-gray-200 pt-10">
          <p className="text-center font-bold text-green-900 text-lg mb-8">Amazing Facts About Common Pests</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full border-2 border-lime-300 flex items-center justify-center text-lime-600 text-2xl flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-black text-green-900">{stat.num}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// 9. PROCESS SECTION
// ─────────────────────────────────────────────
const ProcessSection = () => {
  const [ref, inView] = useReveal();
  const steps = [
    { num: "01", title: "Inspection",     desc: "Identify pest activity, entry points and extent of infestation." },
    { num: "02", title: "Treatment Plan", desc: "Customised eco-friendly treatment plan tailored to your property." },
    { num: "03", title: "Treatment",      desc: "Professional application of CIB/WHO-approved pesticides." },
    { num: "04", title: "Follow-Up",      desc: "Post-treatment monitoring and preventive recommendations." },
  ];

  return (
    <section className="bg-white py-28">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <SectionBadge text="Pest Control Process" />
            <h2 className="text-4xl font-black text-green-900 leading-tight mb-5">
              Our Pest Control Process for Safe &amp; Effective Results
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our experienced technicians use proven methods and eco-friendly treatments to
              deliver reliable, long-lasting results with transparent pricing.
            </p>
            <div className="flex flex-wrap gap-5 mb-8">
              {["Certified & Experienced Technicians", "Long-term prevention & monitoring"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-lime-500" /> {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-[#f0f0ec] rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-green-900 font-black text-sm mb-3">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-green-900 mb-1">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {[1,2,3,4,5].map((i) => <FaStar key={i} className="text-lime-400 text-lg" />)}
              <span className="font-black text-green-900">4.9/5</span>
              <span className="text-gray-500 text-sm">Our 4200 Reviews</span>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden h-[500px] shadow-2xl">
              <img
                src="/Images/img16.jpeg"
                alt="Pest Control Process"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 bg-white rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-black text-green-900">4.9/5</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => <FaStar key={i} className="text-lime-400 text-sm" />)}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map((n) => (
                    <div key={n} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/40?img=${n + 20}`} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-lime-400 border-2 border-white flex items-center justify-center text-green-900 text-xs font-bold">+</div>
                </div>
                <span className="text-gray-600 text-xs font-medium">5k+ Our Customers</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// 10. TESTIMONIALS (Swiper)
// ─────────────────────────────────────────────
const TestimonialsSection = () => {
  const [ref, inView] = useReveal();
  return (
    <section className="bg-green-950 py-28 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden h-[440px] shadow-2xl">
              <img
                src="/Images/img17.jpeg"
                alt="Pest Control"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Deco bug outline */}
            <div className="absolute -bottom-8 -left-6 text-white/5 text-[200px] pointer-events-none select-none">
              <FaBug />
            </div>
            {/* Rating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 left-8 bg-white rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-black text-green-900">4.9/5</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => <FaStar key={i} className="text-lime-400 text-sm" />)}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map((n) => (
                    <div key={n} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/40?img=${n + 30}`} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-full bg-lime-400 border-2 border-white flex items-center justify-center text-green-900 text-xs font-bold">+</div>
                </div>
                <span className="text-gray-600 text-sm font-medium">5k+ Customers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right testimonial */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <SectionBadge text="What Client Says" dark />
            <h2 className="text-4xl font-black text-white mb-8 leading-tight">
              What our customers say about pest control
            </h2>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              className="testimonial-swiper"
            >
              {TESTIMONIALS.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="pb-10">
                    <div className="flex gap-1 mb-5">
                      {[1,2,3,4,5].map((n) => <FaStar key={n} className="text-lime-400 text-xl" />)}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 border-b border-white/10 pb-8">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-lime-400 flex-shrink-0">
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-white font-bold">{t.name}</div>
                        <div className="text-gray-400 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>

      {/* Swiper dot styles */}
      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #4b7a2b; width: 8px; height: 8px;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #a3d940; width: 28px; border-radius: 9999px;
        }
      `}</style>
    </section>
  );
};

// ─────────────────────────────────────────────
// 11. BLOG SECTION
// ─────────────────────────────────────────────
const BlogSection = () => {
  const [ref, inView] = useReveal();
  return (
    <section className="bg-[#f0f0ec] py-28">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionBadge text="Latest Blog" />
          <h2 className="text-4xl md:text-5xl font-black text-green-900 max-w-2xl mx-auto leading-tight">
            Stay updated with our pest control knowledge center
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl overflow-hidden h-[390px] group cursor-pointer shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-lime-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-lime-400 text-xs font-medium mb-2">{post.date}</p>
                <h3 className="text-white font-bold text-lg mb-4 leading-snug">{post.title}</h3>
                <div className="border-t border-white/20 pt-4">
                  <a href="#" className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-lime-400 transition-colors">
                    Read More <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// 12. CONTACT SECTION
// ─────────────────────────────────────────────
const ContactSection = () => {
  const [ref, inView] = useReveal();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="bg-white py-28">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionBadge text="Contact Us" />
          <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-3 leading-tight">
            Get Your Free Estimate Today
          </h2>
          <p className="text-gray-600">Call us now or fill in the form. We respond within 1 hour.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Contact info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-7"
          >
            {[
              { icon: <FaPhone className="rotate-90"/>, label: "Call Us (Free Estimates)", items: ["+91-8802830115", "+91-9205576058", "011-46051882"] },
              { icon: <FaEnvelope />, label: "Email", items: ["satyajeetkushwaha2017@gmail.com"] },
              { icon: <FaMapMarkerAlt />, label: "Address", items: ["196A, FF, Jeewan Nagar, Opp. Maharani Bagh, Ashram, New Delhi - 110014"] },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center text-green-900 text-lg flex-shrink-0 shadow-md">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-green-900 mb-1">{item.label}</p>
                  {item.items.map((it) => (
                    <p key={it} className="text-gray-600 text-sm">{it}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-52 bg-gray-100 flex items-center justify-center border border-gray-200 mt-4">
              <div className="text-center">
                <FaMapMarkerAlt className="text-lime-500 text-3xl mx-auto mb-2" />
                <p className="text-gray-500 text-sm font-medium">Jeewan Nagar, Ashram, New Delhi</p>
                <p className="text-gray-400 text-xs">196A, FF, Opp. Maharani Bagh, ND-14</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-[#f0f0ec] rounded-3xl p-8 shadow-sm">
              <h3 className="font-black text-green-900 text-xl mb-6">Send Us a Message</h3>
              <div className="space-y-4">
                {[
                  { name: "name",  placeholder: "Your Full Name",   type: "text"  },
                  { name: "phone", placeholder: "Phone Number",      type: "tel"   },
                  { name: "email", placeholder: "Email Address",     type: "email" },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-white rounded-xl px-4 py-3 text-sm border border-gray-200 focus:outline-none focus:border-lime-400 transition-colors"
                  />
                ))}
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-white rounded-xl px-4 py-3 text-sm border border-gray-200 focus:outline-none focus:border-lime-400 text-gray-600"
                >
                  <option value="">Select Service</option>
                  {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message / Problem Description"
                  className="w-full bg-white rounded-xl px-4 py-3 text-sm border border-gray-200 focus:outline-none focus:border-lime-400 resize-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-lime-400 hover:bg-lime-300 text-green-900 font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
                  type="button"
                >
                  Get Free Estimate <FaArrowRight />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// 13. FOOTER
// ─────────────────────────────────────────────
const Footer = () => (
  <footer className="bg-green-950 pt-16 pb-6 overflow-hidden relative">
    {/* Deco bug outlines */}
    <div className="absolute bottom-0 left-0 opacity-[0.04] text-[260px] text-white pointer-events-none select-none">
      <FaBug />
    </div>
    <div className="absolute top-6 right-0 opacity-[0.04] text-[180px] text-white rotate-12 pointer-events-none select-none">
      <FaBug />
    </div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        {/* Company */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
              <FaBug className="text-green-900 text-lg" />
            </div>
            <span className="text-white font-black text-lg">
              Jet<span className="text-lime-400">kill</span>
            </span>
          </div>
          <h4 className="text-white font-bold text-base mb-3">About Our Company</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            We are a trusted pest control service provider offering safe, effective, and
            affordable solutions for homes and businesses across Delhi-NCR.
          </p>
          <div className="flex gap-3">
            {[FaPinterest, FaTwitter, FaFacebook, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-full border border-lime-400/30 flex items-center justify-center text-lime-400 hover:bg-lime-400 hover:text-green-900 transition-all duration-200"
              >
                <Icon className="text-sm" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {["Home", "About Us", "Our Services", "Contact Us", "Free Estimate"].map((link) => (
              <li key={link}>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-lime-400 text-sm transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 flex-shrink-0" />
                  {link}
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
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-lime-400 text-sm transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 flex-shrink-0" />
                  {svc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours + Contact */}
        <div>
          <h4 className="text-white font-bold text-base mb-4">Working Hours</h4>
          <ul className="space-y-2.5 mb-6">
            {["Monday – Saturday: 9:00 AM – 7:00 PM", "Sunday: Emergency Services Available"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="border-t border-white/10 pt-5">
            <p className="text-gray-500 text-xs mb-2">Contact Us!</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lime-400/20 border border-lime-400/30 flex items-center justify-center">
                <FaPhone className="text-lime-400 text-sm rotate-90" />
              </div>
              <div>
                <a href="tel:+918802830115" className="text-white font-bold text-sm block hover:text-lime-400 transition-colors">
                  +91-8802830115
                </a>
                <a href="tel:+919205576058" className="text-lime-400 font-bold text-sm block hover:text-lime-300 transition-colors">
                  +91-9205576058
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-green-900/50 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5 mb-10">
        <div className="flex items-center gap-3 md:w-52 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
            <FaBug className="text-green-900" />
          </div>
          <span className="text-white font-bold text-lg">Jetkill</span>
        </div>
        <p className="text-gray-300 text-sm font-semibold md:flex-1 text-center">
          Newsletter Subscription
        </p>
        <div className="flex gap-3 w-full md:w-auto">
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
        <p className="text-gray-500 text-sm">
          Copyright © 2026 Jetkill Pest Control. All Rights Reserved. | Powered by{" "}
          <span className="text-lime-400 font-semibold">Satyajeet Technical Expertise</span>
        </p>
      </div>
    </div>
  </footer>
);

// ─────────────────────────────────────────────
// FLOATING CTA BUTTONS
// ─────────────────────────────────────────────
const FloatingCTA = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <motion.a
      href="tel:+918802830115"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      title="Call Now"
      className="w-14 h-14 bg-lime-400 rounded-full flex items-center justify-center shadow-2xl hover:bg-lime-300 transition-colors"
    >
      <FaPhone className="text-green-900 text-xl rotate-90" />
    </motion.a>
    <motion.a
      href="mailto:satyajeetkushwaha2017@gmail.com"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      title="Email Us"
      className="w-14 h-14 bg-green-900 rounded-full flex items-center justify-center shadow-2xl border border-lime-400/30 hover:bg-green-800 transition-colors"
    >
      <FaEnvelope className="text-lime-400 text-xl" />
    </motion.a>
  </div>
);

// ─────────────────────────────────────────────
// ROOT APP
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <div className="font-sans antialiased text-gray-900 overflow-x-hidden">

      <HeroSection />
      {/* <TrustedSection /> */}
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <CoreFeaturesSection />
      <PestTypesSection />
      <ProcessSection />
      <TestimonialsSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <FloatingCTA />
    </div>
  );
}