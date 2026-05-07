// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import {
//   FiMenu, FiX, FiArrowRight, FiPhone, FiMail, FiMapPin,
//   FiCheck, FiChevronDown, FiChevronUp, FiStar, FiShield,
//   FiUsers, FiAward, FiClock, FiHome,
//   FiSearch, FiClipboard, FiZap, FiRefreshCw // <-- Added as per lint error
// } from "react-icons/fi";
// import {
//   MdOutlinePestControl, MdBugReport, MdOutlineLocalHospital,
//   MdConstruction, MdSecurity, MdOutlineVerified
// } from "react-icons/md";
// import { GiBee, GiSpiderWeb, GiRat, GiSprout } from "react-icons/gi";
// import { FaBug, FaCheckCircle, FaArrowRight as FaArrowRightSolid, FaArrowRight } from "react-icons/fa";


//   const slideLeft  = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
//   const slideRight = { hidden: { opacity: 0, x:  60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
  
//   function useReveal() {
//     const ref = useRef(null);
//     const inView = useInView(ref, { once: true, margin: "-80px" });
//     return [ref, inView];
//   }

//   const SectionBadge = ({ text, dark = false }) => (
//     <div
//       className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border ${
//         dark
//           ? "bg-green-900/60 border-lime-400/30 text-lime-300"
//           : "bg-white border-gray-200 text-green-900"
//       }`}
//     >
//       <span className="w-2 h-2 rounded-full bg-lime-400 inline-block" />
//       {text}
//     </div>
//   );

// // ── GLOBAL STYLES ──────────────────────────────────────────────────────────────


// // ── DATA ───────────────────────────────────────────────────────────────────────
// const NAV_PAGES = ["Home", "About Us", "Services", "Contact Us"];

// const SERVICES_LIST = [
//   {
//     id: 1,
//     title: "Vector Control",
//     desc: "Comprehensive mosquito, fly and vector pest management using targeted sprays and eco-safe fogging methods.",
//     icon: <GiBee size={28} />,
//     img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80",
//     tags: ["Safe", "Certified", "Effective"],
//   },
//   {
//     id: 2,
//     title: "Termite Control",
//     desc: "Advanced termite detection and elimination with soil treatment and baiting systems for lasting protection.",
//     icon: <MdOutlinePestControl size={28} />,
//     img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80",
//     tags: ["Safe", "Certified", "Effective"],
//   },
//   {
//     id: 3,
//     title: "Bed Bugs Control",
//     desc: "Heat and chemical treatment methods to fully eliminate bed bug infestations from all living spaces.",
//     icon: <MdBugReport size={28} />,
//     img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
//     tags: ["Safe", "Certified", "Effective"],
//   },
//   {
//     id: 4,
//     title: "General Pest Control",
//     desc: "Complete household pest management — cockroaches, ants, spiders, silverfish and more, thoroughly treated.",
//     icon: <GiSpiderWeb size={28} />,
//     img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
//     tags: ["Safe", "Certified", "Effective"],
//   },
//   {
//     id: 5,
//     title: "Disinfection Service",
//     desc: "Deep sanitization and disinfection for homes, offices and commercial spaces with hospital-grade solutions.",
//     icon: <MdOutlineLocalHospital size={28} />,
//     img: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=500&q=80",
//     tags: ["Safe", "Certified", "Effective"],
//   },
//   {
//     id: 6,
//     title: "Post Construction Termite Treatment",
//     desc: "Specialized anti-termite treatment applied after construction to protect new structures long-term.",
//     icon: <MdConstruction size={28} />,
//     img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80",
//     tags: ["Safe", "Certified", "Effective"],
//   },
// ];

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Rajan Sharma",
//     role: "Homeowner, Delhi",
//     text: "Jetkill's team was professional, punctual and completely eliminated our cockroach problem. They follow safety standards strictly which is crucial with kids at home. Very happy with the results — highly recommended!",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/60?img=11",
//   },
//   {
//     id: 2,
//     name: "Priya Mehta",
//     role: "Office Manager, South Delhi",
//     text: "We had a severe termite issue in our office. Satyajeet and his team did a thorough inspection and treatment. Fast response, transparent pricing and no hidden costs. Our office is pest-free now.",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/60?img=5",
//   },
//   {
//     id: 3,
//     name: "Vikram Patel",
//     role: "Restaurant Owner, Ashram",
//     text: "Excellent service from start to finish. They handled our bed bug infestation completely. Technicians were knowledgeable and explained every step. Follow-up inspection was thorough too.",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/60?img=15",
//   },
// ];

// const FAQS = [
//   {
//     q: "Do you use eco-friendly and approved pest control chemicals?",
//     a: "Yes, we use eco-friendly and government-approved pest control chemicals that are safe for children, pets, and the environment. Our treatments are carefully selected to effectively eliminate pests without harming your family.",
//   },
//   {
//     q: "How often should pest control services be scheduled annually?",
//     a: "We recommend quarterly treatments for general pest control. However, specific pest situations like termites or bed bugs may require more targeted scheduling based on our technician's assessment.",
//   },
//   {
//     q: "What preparation is required before starting pest control treatment?",
//     a: "Clear food items and cover kitchen surfaces. Vacate treated areas for 2-4 hours post-treatment. Keep pets away during and shortly after treatment. Our team will guide you with specific instructions before every visit.",
//   },
//   {
//     q: "Do you offer follow-up inspections after pest treatment completion?",
//     a: "Absolutely. We provide complimentary follow-up inspection within 15 days to ensure complete elimination. If any pest activity is detected, re-treatment is done at no extra charge.",
//   },
//   {
//     q: "Can pests return after completing the pest control treatment?",
//     a: "With proper treatment and preventive measures, recurrence is minimal. Our residual treatments remain effective for months. We also provide you tips to prevent re-infestation after treatment.",
//   },
// ];

// const ACHIEVEMENTS = [
//   { year: "2010", title: "Founded Jetkill", org: "Delhi NCR Operations Begin" },
//   { year: "2015", title: "NPMA Certified", org: "National Pest Management Association" },
//   { year: "2019", title: "1000+ Homes Served", org: "South Delhi & NCR Milestone" },
//   { year: "2024", title: "Green Compliance", org: "Eco-Safe Chemical Certification" },
// ];

// const PESTS = [
//   { name: "Cockroaches", emoji: "🪳" },
//   { name: "Mosquitoes", emoji: "🦟" },
//   { name: "Bed Bugs", emoji: "🐛" },
//   { name: "Termites", emoji: "🐜" },
//   { name: "Spiders", emoji: "🕷️" },
//   { name: "Rodents", emoji: "🐀" },
// ];

// const STATS = [
//   { value: "95%", label: "Pest Elimination Rate", icon: <MdOutlineVerified size={28} /> },
//   { value: "5K+", label: "Species Controlled", icon: <MdBugReport size={28} /> },
//   { value: "24/7", label: "Emergency Support", icon: <FiClock size={28} /> },
//   { value: "15+", label: "Years Experience", icon: <FiAward size={28} /> },
// ];

// // ── SHARED COMPONENTS ──────────────────────────────────────────────────────────

// function SectionTag({ label }) {
//   return (
//     <div style={{
//       display: "inline-flex", alignItems: "center", gap: 8,
//       background: "#fff", border: "1px solid var(--border)",
//       padding: "6px 16px", borderRadius: 999,
//       marginBottom: 20, width: "fit-content",
//     }}>
//       <span className="pulse-dot" style={{
//         width: 8, height: 8, borderRadius: "50%",
//         background: "var(--green-accent)", display: "block", flexShrink: 0,
//       }} />
//       <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-mid)", letterSpacing: "0.02em" }}>
//         {label}
//       </span>
//     </div>
//   );
// }

// function SectionHeader({ tag, title, center = false }) {
//   return (
//     <div style={{ textAlign: center ? "center" : "left", marginBottom: 48 }}>
//       <div style={{ display: center ? "flex" : "block", justifyContent: center ? "center" : "flex-start" }}>
//         <SectionTag label={tag} />
//       </div>
//       <h2 style={{
//         fontFamily: "'Fraunces', serif",
//         fontWeight: 700,
//         fontSize: "clamp(28px, 4vw, 46px)",
//         color: "var(--text-dark)",
//         lineHeight: 1.2,
//         maxWidth: center ? 700 : "100%",
//         margin: center ? "0 auto" : 0,
//       }}>
//         {title}
//       </h2>
//     </div>
//   );
// }

// function ReviewBar() {
//   return (
//     <div style={{
//       display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
//       marginTop: 24,
//     }}>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         {[...Array(3)].map((_, i) => (
//           <img
//             key={i}
//             src={`https://i.pravatar.cc/36?img=${10 + i}`}
//             alt=""
//             style={{
//               width: 36, height: 36, borderRadius: "50%",
//               border: "2px solid #fff",
//               marginLeft: i > 0 ? -10 : 0,
//               objectFit: "cover",
//             }}
//           />
//         ))}
//         <div style={{
//           width: 36, height: 36, borderRadius: "50%",
//           background: "var(--green-accent)", border: "2px solid #fff",
//           marginLeft: -10, display: "flex", alignItems: "center",
//           justifyContent: "center", fontSize: 11, fontWeight: 700,
//           color: "var(--text-dark)",
//         }}>+</div>
//       </div>
//       <div>
//         <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
//           {[...Array(5)].map((_, i) => (
//             <FiStar key={i} size={13} color="#F5A623" fill="#F5A623" />
//           ))}
//         </div>
//         <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
//           <b style={{ color: "var(--text-dark)" }}>4.9/5</b> · Over 4200 Reviews
//         </span>
//       </div>
//     </div>
//   );
// }

// function GreenBtn({ children, outline = false, onClick, small = false }) {
//   const [hov, setHov] = useState(false);
//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         display: "inline-flex", alignItems: "center", gap: 8,
//         background: outline ? "transparent" : (hov ? "var(--green-mid)" : "var(--green-accent)"),
//         border: outline ? "2px solid var(--green-accent)" : "none",
//         color: outline ? "var(--green-accent)" : "var(--text-dark)",
//         padding: small ? "10px 22px" : "14px 30px",
//         borderRadius: 8,
//         fontSize: small ? 13 : 15,
//         fontWeight: 700,
//         cursor: "pointer",
//         fontFamily: "'Plus Jakarta Sans', sans-serif",
//         letterSpacing: "0.01em",
//         transition: "all 0.2s ease",
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// // ── NAVBAR ─────────────────────────────────────────────────────────────────────
// function Navbar({ activePage, setPage }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   return (
//     <nav style={{
//       position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
//       padding: "0 24px",
//     }}>
//       <div style={{
//         maxWidth: 1280, margin: "12px auto 0",
//         background: scrolled ? "rgba(13,51,24,0.97)" : "rgba(13,51,24,0.92)",
//         backdropFilter: "blur(16px)",
//         borderRadius: 14,
//         padding: "0 28px",
//         height: 68,
//         display: "flex", alignItems: "center", justifyContent: "space-between",
//         boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
//         border: "1px solid rgba(168,230,61,0.12)",
//         transition: "all 0.3s",
//       }}>
//         {/* Logo */}
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <div style={{
//             width: 40, height: 40, borderRadius: "50%",
//             background: "var(--green-accent)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//           }}>
//             <MdOutlinePestControl size={22} color="#0D3318" />
//           </div>
//           <span style={{
//             fontFamily: "'Fraunces', serif",
//             fontWeight: 700, fontSize: 20, color: "#fff",
//             letterSpacing: "0.02em",
//           }}>
//             Jetkill
//           </span>
//         </div>

//         {/* Desktop Nav */}
//         <div style={{ display: "flex", gap: 6, alignItems: "center" }}
//           className="desktop-nav"
//         >
//           {NAV_PAGES.map((p) => (
//             <button
//               key={p}
//               onClick={() => setPage(p)}
//               style={{
//                 background: "none", border: "none", cursor: "pointer",
//                 padding: "8px 16px", borderRadius: 8,
//                 color: activePage === p ? "var(--green-accent)" : "rgba(255,255,255,0.8)",
//                 fontFamily: "'Plus Jakarta Sans', sans-serif",
//                 fontSize: 14, fontWeight: activePage === p ? 700 : 500,
//                 transition: "all 0.2s",
//               }}
//             >
//               {p}
//             </button>
//           ))}
//         </div>

//         {/* CTA */}
//         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//           <a href="tel:+918802830115" style={{
//             display: "flex", alignItems: "center", gap: 6,
//             color: "rgba(255,255,255,0.7)",
//             fontSize: 13, textDecoration: "none", fontWeight: 500,
//           }}>
//             <FiPhone size={14} /> +91-88028 30115
//           </a>
//           <GreenBtn small onClick={() => setPage("Contact Us")}>
//             Free Estimate <FiArrowRight size={13} />
//           </GreenBtn>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // ── PAGE HERO BANNER ───────────────────────────────────────────────────────────
// function PageHero({ title, breadcrumb, activePage }) {
//   return (
//     <div style={{
//       position: "relative",
//       height: 420,
//       background: "var(--green-dark)",
//       overflow: "hidden",
//     }}>
//       <img
//         src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1600&q=80"
//         alt=""
//         style={{
//           position: "absolute", inset: 0,
//           width: "100%", height: "100%",
//           objectFit: "cover", opacity: 0.35,
//         }}
//       />
//       <div style={{
//         position: "absolute", inset: 0,
//         background: "linear-gradient(135deg, rgba(13,51,24,0.85) 40%, rgba(27,94,48,0.5) 100%)",
//       }} />
//       <div style={{
//         position: "absolute", inset: 0,
//         display: "flex", flexDirection: "column",
//         justifyContent: "flex-end", padding: "0 10% 60px",
//         maxWidth: 1280, margin: "0 auto", left: 0, right: 0,
//       }}>
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           style={{
//             fontFamily: "'Fraunces', serif",
//             fontWeight: 700, fontSize: "clamp(42px, 6vw, 72px)",
//             color: "#fff", marginBottom: 12,
//           }}
//         >
//           {title}
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}
//         >
//           Home / <span style={{ color: "var(--green-accent)" }}>{breadcrumb}</span>
//         </motion.p>
//       </div>

//       {/* Decorative dot */}
//       <div style={{
//         position: "absolute", bottom: "40%", right: "35%",
//         width: 10, height: 10, borderRadius: "50%",
//         background: "var(--green-accent)",
//       }} className="pulse-dot" />
//     </div>
//   );
// }

// // ══════════════════════════════════════════════════════════════════════════════
// // ABOUT US PAGE
// // ══════════════════════════════════════════════════════════════════════════════

// const AboutIntro = () => {
//     const [ref, inView] = useReveal();
//     return (
//       <section id="about-us" className="bg-[#f0f0ec] py-28">
//         <div className="max-w-6xl mx-auto px-6">
//           <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
//             {/* Images left */}
//             <motion.div
//               variants={slideLeft}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               className="relative"
//             >
//               <div className="relative w-full h-[440px] rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1632163567268-ef07af25d9ce?w=800&h=550&fit=crop"
//                   alt="Pest Control Expert"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               {/* Overlay small image */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.85 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 0.4, duration: 0.5 }}
//                 className="absolute -bottom-10 -left-8 w-56 h-48 rounded-2xl overflow-hidden border-[5px] border-white shadow-2xl"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=350&h=280&fit=crop"
//                   alt="Pest closeup"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//               {/* Deco bug */}
//               <div className="absolute -top-3 -right-3 text-green-900 opacity-5 text-[120px] pointer-events-none select-none">
//                 <FaBug />
//               </div>
//             </motion.div>
  
//             {/* Content right */}
//             <motion.div
//               variants={slideRight}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               className="pt-4"
//             >
//               <SectionBadge text="About Us" />
//               <h2 className="text-4xl md:text-5xl font-black text-green-900 leading-tight mb-5">
//                 Dedicated to protecting your home from pests
//               </h2>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Our mission is to provide comprehensive and reliable pest control solutions
//                 that ensure the safety and comfort of your home. With{" "}
//                 <span className="font-bold text-green-900">Satyajeet's Technical Expertise</span>,
//                 Jetkill delivers unmatched premium pest control across Delhi-NCR.
//               </p>
  
//               {/* Card */}
//               <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
//                 <div className="flex gap-5">
//                   <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
//                     <img
//                       src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=200&h=160&fit=crop"
//                       alt="Service"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <p className="text-gray-600 text-sm mb-3 leading-relaxed">
//                       Certified experts providing comprehensive pest management for homes, offices & commercial spaces.
//                     </p>
//                     <div className="space-y-1.5">
//                       {["Certified & Experienced Technicians", "Advanced Detection & Removal Methods", "Transparent Pricing & No Hidden Costs"].map((item) => (
//                         <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
//                           <FaCheckCircle className="text-lime-500 flex-shrink-0" /> {item}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
  
//               {/* Years */}
//               <div className="flex items-center gap-4 mb-7">
//                 <div>
//                   <span className="text-5xl font-black text-green-900">15+</span>
//                   <p className="text-gray-500 text-sm mt-0.5">Years providing expert pest control solutions</p>
//                 </div>
//               </div>
  
//               <motion.a
//                 href="/about"
//                 whileHover={{ scale: 1.03, y: -2 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-green-900 font-black px-7 py-3.5 rounded-xl transition-colors shadow-lg"
//               >
//                 Learn More About Us <FaArrowRight />
//               </motion.a>
         
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     );
//   };

// function AboutApproach() {
//   const [animated, setAnimated] = useState(false);
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   useEffect(() => { if (inView) setAnimated(true); }, [inView]);

//   const bars = [
//     { label: "Businesses Protected", pct: 75 },
//     { label: "Pest Elimination Rate", pct: 90 },
//   ];

//   return (
//     <section style={{ padding: "100px 24px", background: "var(--bg-light)" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
//         {/* Left */}
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//           <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", marginBottom: 20 }}>
//             <img
//               src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80"
//               alt="Approach"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//             {[{ icon: <MdSecurity size={22} />, title: "Our Mission", desc: "To provide safe, effective pest control solutions for every home and business." },
//               { icon: <FiShield size={22} />, title: "Our Vision", desc: "A pest-free India, one property at a time, using eco-conscious methods." }
//             ].map((item) => (
//               <div key={item.title} style={{
//                 background: "#fff", borderRadius: 12, padding: 20,
//                 boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
//               }}>
//                 <div style={{
//                   width: 48, height: 48, borderRadius: 12,
//                   background: "var(--green-accent)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   marginBottom: 16, color: "var(--text-dark)",
//                 }}>
//                   {item.icon}
//                 </div>
//                 <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--text-dark)", marginBottom: 8 }}>{item.title}</h4>
//                 <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right */}
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
//           <SectionTag label="Our Approach" />
//           <h2 style={{
//             fontFamily: "'Fraunces', serif", fontWeight: 700,
//             fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--text-dark)",
//             lineHeight: 1.25, marginBottom: 20,
//           }}>
//             Our proven approach to effective pest control
//           </h2>
//           <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32, fontSize: 15 }}>
//             Our proven approach combines thorough inspection, targeted treatment, and preventive measures
//             to eliminate pests at the source. We use safe, industry-approved solutions tailored to
//             your property, ensuring long-lasting protection.
//           </p>

//           {/* Feature highlights */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
//             {[{ icon: <MdOutlinePestControl size={20} />, title: "Advanced Pest Control Techniques" },
//               { icon: <FiShield size={20} />, title: "Thorough Pest Inspection Process" }
//             ].map((f) => (
//               <div key={f.title} style={{
//                 display: "flex", gap: 12, alignItems: "flex-start",
//                 background: "#fff", borderRadius: 10, padding: 16,
//               }}>
//                 <div style={{
//                   width: 40, height: 40, borderRadius: "50%",
//                   background: "#E8F7D0", display: "flex", alignItems: "center",
//                   justifyContent: "center", color: "var(--green-mid)", flexShrink: 0,
//                 }}>
//                   {f.icon}
//                 </div>
//                 <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text-dark)", lineHeight: 1.4 }}>{f.title}</span>
//               </div>
//             ))}
//           </div>

//           {/* Progress bars */}
//           <div ref={ref} style={{ marginBottom: 36 }}>
//             {bars.map((bar) => (
//               <div key={bar.label} style={{ marginBottom: 20 }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
//                   <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-dark)" }}>{bar.label}</span>
//                   <span style={{ fontSize: 14, fontWeight: 700, color: "var(--green-mid)" }}>{bar.pct}%</span>
//                 </div>
//                 <div style={{ background: "#DDE8DD", borderRadius: 99, height: 10, overflow: "hidden" }}>
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: animated ? `${bar.pct}%` : 0 }}
//                     transition={{ duration: 1.2, ease: "easeOut" }}
//                     style={{
//                       height: "100%",
//                       background: "linear-gradient(90deg, var(--green-accent), var(--green-mid))",
//                       borderRadius: 99,
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           <GreenBtn>Contact Us <FiArrowRight size={15} /></GreenBtn>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function WhoWeAre() {
//   const cards = [
//     {
//       icon: <FiUsers size={26} />,
//       title: "Experienced technicians delivering reliable pest control",
//       desc: "Our skilled and certified technicians use proven techniques and modern equipment to identify, treat, and prevent pest infestations effectively.",
//       emoji: "🪳",
//     },
//     {
//       icon: <MdOutlinePestControl size={26} />,
//       title: "Advanced methods for long-lasting pest protection",
//       desc: "Our skilled and certified technicians use proven techniques and modern equipment to identify, treat, and prevent pest infestations effectively.",
//       emoji: "🦟",
//     },
//     {
//       icon: <MdConstruction size={26} />,
//       title: "Residential and commercial pest management experts",
//       desc: "Our skilled and certified technicians use proven techniques and modern equipment to identify, treat, and prevent pest infestations effectively.",
//       emoji: "🐀",
//     },
//   ];

//   return (
//     <section style={{ padding: "100px 24px", background: "#fff" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <SectionHeader tag="Who We Are" title="Experienced professionals delivering pest free spaces" center />

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 56 }}>
//           {cards.map((card, i) => (
//             <motion.div
//               key={card.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               style={{
//                 background: "var(--bg-light)", borderRadius: 16, padding: 28,
//                 border: "1px solid var(--border)",
//               }}
//             >
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
//                 <div style={{
//                   width: 52, height: 52, borderRadius: "50%",
//                   background: "var(--green-accent)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   color: "var(--text-dark)",
//                 }}>
//                   {card.icon}
//                 </div>
//                 <span style={{ fontSize: 42 }}>{card.emoji}</span>
//               </div>
//               <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--text-dark)", lineHeight: 1.4, marginBottom: 12 }}>
//                 {card.title}
//               </h3>
//               <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>{card.desc}</p>
//               <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//                 {["Certified", "Effective", "Safe"].map((tag) => (
//                   <span key={tag} style={{
//                     display: "flex", alignItems: "center", gap: 4,
//                     fontSize: 12, fontWeight: 600, color: "var(--text-mid)",
//                     background: "#fff", border: "1px solid var(--border)",
//                     padding: "4px 10px", borderRadius: 99,
//                   }}>
//                     <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green-accent)", display: "block" }} />
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <ReviewBar />
//       </div>
//     </section>
//   );
// }

// function Achievements() {
//   return (
//     <section style={{
//       position: "relative", padding: "100px 24px",
//       overflow: "hidden",
//     }}>
//       <div style={{
//         position: "absolute", inset: 0,
//         background: "var(--green-dark)",
//       }} />
//       <img
//         src="/Images/hero-bg.jpg"
//         alt=""
//         style={{
//           position: "absolute", inset: 0,
//           width: "100%", height: "100%",
//           objectFit: "cover", opacity: 0.2,
//           mixBlendMode: "luminosity",
//         }}
//       />
//       <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
//         <SectionHeader tag="Achievements" title="Our achievements reflect pest control excellence" center />
//         <h2 style={{ color: "#f5fae0", textAlign: "center" }} />

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: -20 }}>
//           {ACHIEVEMENTS.map((a, i) => (
//             <motion.div
//               key={a.year}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               style={{
//                 background: "rgba(34, 61, 40, 0.82)",
//                 // darker transparent bg for contrast
//                 backdropFilter: "blur(12px)",
//                 border: "1px solid rgba(220,255,204,0.22)",
//                 borderRadius: 16, padding: 28,
//                 textAlign: "center",
//                 color: "#f5fae0",
//               }}
//             >
//               {/* Wreath SVG */}
//               <svg viewBox="0 0 80 80" width={70} style={{ margin: "0 auto 16px", display: "block", opacity: 0.92 }}>
//                 <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(210,255,180,0.7)" strokeWidth="1.7" strokeDasharray="4 3" />
//                 <circle cx="40" cy="40" r="22" fill="none" stroke="rgba(168,230,61,0.42)" strokeWidth="1.5" />
//                 <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
//                   fill="#f5fae0" fontSize="13" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
//                   {a.year}
//                 </text>
//               </svg>
//               <div style={{
//                 background: "rgba(168,230,61,0.18)", borderRadius: 6,
//                 padding: "4px 12px", display: "inline-block", marginBottom: 16,
//               }}>
//                 <span style={{ color: "#b8f22a", fontSize: 13, fontWeight: 700, letterSpacing: 0.5 }}>{a.year}</span>
//               </div>
//               <h4 style={{ color: "#fff", fontSize: 17, fontWeight: 800, lineHeight: 1.5, textShadow: "0 2px 12px rgba(34,61,40,0.23)" }}>{a.title}</h4>
//               <p style={{ color: "rgba(206,255,181,0.89)", fontSize: 13, marginTop: 8, fontWeight: 500 }}>{a.org}</p>
//             </motion.div>
//           ))}
//         </div>

//         <div style={{ textAlign: "center", marginTop: 48 }}>
//           <div style={{
//             display: "inline-flex", alignItems: "center", gap: 8,
//             background: "var(--green-accent)", borderRadius: 999,
//             padding: "6px 14px", marginBottom: 0,
//             boxShadow: "0 2px 16px 0 rgba(168,230,61,0.16)",
//           }}>
//             <span style={{ fontWeight: 700, fontSize: 13, color: "#23400a", letterSpacing: 1 }}>Free</span>
//           </div>
//           <span style={{ color: "#f2ffdf", fontSize: 15, marginLeft: 10 }}>
//             Connect with our team for professional pest solutions — <a href="tel:+918802830115" style={{ color: "#b8f22a", fontWeight: 700, textDecoration: "underline" }}>Join Us Today</a>
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TeamSection() {
//   const team = [
//     { name: "Satyajeet Kushwaha", role: "Chief Pest Control Officer", img: "https://i.pravatar.cc/300?img=52" },
//     { name: "Ramesh Kumar", role: "Lead Termite Specialist", img: "https://i.pravatar.cc/300?img=59" },
//     { name: "Ankit Sharma", role: "Senior Pest Technician", img: "https://i.pravatar.cc/300?img=60" },
//     { name: "Deepak Singh", role: "Field Operations Manager", img: "https://i.pravatar.cc/300?img=53" },
//   ];

//   return (
//     <section style={{ padding: "100px 24px", background: "var(--bg-light)" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <SectionHeader tag="Our Team" title="Dedicated experts delivering reliable pest control" center />
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
//           {team.map((m, i) => (
//             <motion.div
//               key={m.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               style={{ borderRadius: 16, overflow: "hidden", background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
//             >
//               <img src={m.img} alt={m.name} style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }} />
//               <div style={{ padding: "16px 20px" }}>
//                 <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--text-dark)", marginBottom: 4 }}>{m.name}</h4>
//                 <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{m.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         <ReviewBar />
//       </div>
//     </section>
//   );
// }

// function AboutTestimonials() {
//   return (
//     <section style={{ padding: "100px 24px", background: "var(--green-dark)", position: "relative", borderRadius: "20px", margin: "0 24px 80px", overflow: "hidden" }}>
//       {/* BG pattern */}
//       <div style={{
//         position: "absolute", inset: 0,
//         backgroundImage: "radial-gradient(circle, rgba(168,230,61,0.06) 1px, transparent 1px)",
//         backgroundSize: "32px 32px",
//       }} />
//       <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
//         {/* Left image */}
//         <div style={{ position: "relative" }}>
//           <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "3/4" }}>
//             <img
//               src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=80"
//               alt=""
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </div>
//           <div style={{
//             position: "absolute", bottom: 24, left: -20,
//             background: "#fff", borderRadius: 14, padding: "18px 24px",
//             boxShadow: "0 8px 30px rgba(0,0,0,0.15)", minWidth: 200,
//           }}>
//             <div style={{ display: "flex", gap: 2, marginBottom: 8 }}>
//               {[...Array(5)].map((_, i) => <FiStar key={i} size={14} color="#F5A623" fill="#F5A623" />)}
//             </div>
//             <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 24, color: "var(--text-dark)" }}>4.9/5</span>
//             <ReviewBar />
//           </div>
//           {/* Leaf decor */}
//           <svg style={{ position: "absolute", bottom: 0, right: -20, opacity: 0.06 }} width="100" height="160" viewBox="0 0 100 160">
//             <path d="M10,150 Q80,80 80,10 Q40,80 10,150Z" fill="#A8E63D" />
//           </svg>
//         </div>

//         {/* Right reviews */}
//         <div>
//           <SectionTag label="What Client Says" />
//           <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", color: "#fff", marginBottom: 32, lineHeight: 1.2 }}>
//             What our customers say about pest control
//           </h2>
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             autoplay={{ delay: 4000 }}
//             pagination={{ clickable: true }}
//             loop
//             style={{ paddingBottom: 40 }}
//           >
//             {TESTIMONIALS.map((t) => (
//               <SwiperSlide key={t.id}>
//                 <div>
//                   <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
//                     {[...Array(t.rating)].map((_, i) => <FiStar key={i} size={18} color="#A8E63D" fill="#A8E63D" />)}
//                   </div>
//                   <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>
//                     "{t.text}"
//                   </p>
//                   <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
//                     <img src={t.avatar} alt={t.name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover" }} />
//                     <div>
//                       <p style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>{t.name}</p>
//                       <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{t.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }

// function AboutPage({ setPage }) {
//   return (
//     <div>
//       <PageHero title="About us" breadcrumb="About Us" />
//       <AboutIntro />
//       <AboutApproach />
//       <WhoWeAre />
//       <Achievements />
//       <TeamSection />
//       {/* <AboutTestimonials /> */}
//     </div>
//   );
// }

// // ══════════════════════════════════════════════════════════════════════════════
// // SERVICES PAGE
// // ══════════════════════════════════════════════════════════════════════════════

// function ServicesGrid() {
//   const [hov, setHov] = useState(null);
//   return (
//     <section style={{ padding: "100px 24px", background: "var(--bg-light)" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
//           {SERVICES_LIST.map((svc, i) => (
//             <motion.div
//               key={svc.id}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.08 }}
//               onMouseEnter={() => setHov(svc.id)}
//               onMouseLeave={() => setHov(null)}
//               style={{
//                 background: "#fff",
//                 borderRadius: 16,
//                 padding: 28,
//                 border: `1px solid ${hov === svc.id ? "var(--green-accent)" : "var(--border)"}`,
//                 boxShadow: hov === svc.id ? "0 8px 32px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
//                 cursor: "pointer",
//                 transition: "all 0.25s ease",
//               }}
//             >
//               {/* Circle image */}
//               <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
//                 <div style={{ position: "relative", width: 120 }}>
//                   <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", border: "4px solid var(--bg-light)" }}>
//                     <img src={svc.img} alt={svc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                   </div>
//                   <div style={{
//                     position: "absolute", bottom: 0, right: 0,
//                     width: 36, height: 36, borderRadius: "50%",
//                     background: "var(--green-accent)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     color: "var(--text-dark)", border: "2px solid #fff",
//                   }}>
//                     {svc.icon}
//                   </div>
//                 </div>
//               </div>

//               <h3 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontWeight: 700, fontSize: 18,
//                 color: "var(--green-mid)", textAlign: "center",
//                 marginBottom: 12, lineHeight: 1.3,
//               }}>
//                 {svc.title}
//               </h3>
//               <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, textAlign: "center", marginBottom: 20 }}>
//                 {svc.desc}
//               </p>
//               <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }} />
//               <div style={{ textAlign: "center" }}>
//                 <a href="#" style={{
//                   display: "inline-flex", alignItems: "center", gap: 6,
//                   color: "var(--green-mid)", fontWeight: 700, fontSize: 14,
//                   textDecoration: "none",
//                 }}>
//                   Learn More <FiArrowRight size={14} />
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function PestProtection() {
//   return (
//     <section style={{ padding: "100px 24px", background: "#fff" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <SectionHeader tag="Protected / Safety" title="Protecting your home with expert pest control" center />

//         {/* Pest circles */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16, marginBottom: 60 }}>
//           {PESTS.map((p, i) => (
//             <motion.div
//               key={p.name}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.07 }}
//               style={{ textAlign: "center" }}
//             >
//               <div style={{
//                 width: 100, height: 100, borderRadius: "50%",
//                 border: "2.5px solid var(--green-accent)",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: 42, margin: "0 auto 12px",
//                 position: "relative",
//                 background: "#fff",
//               }}>
//                 {p.emoji}
//                 {/* Cross line */}
//                 <div style={{
//                   position: "absolute", inset: 0, borderRadius: "50%",
//                   border: "2px solid transparent",
//                   overflow: "hidden",
//                 }}>
//                   <div style={{
//                     position: "absolute",
//                     top: "50%", left: "10%", right: "10%",
//                     height: "2.5px",
//                     background: "var(--green-accent)",
//                     transform: "rotate(-45deg)",
//                     transformOrigin: "center",
//                   }} />
//                 </div>
//               </div>
//               <p style={{ fontWeight: 700, fontSize: 13, color: "var(--text-dark)" }}>{p.name}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats bar */}
//         <div style={{ borderTop: "1px solid var(--border)", paddingTop: 48 }}>
//           <p style={{ textAlign: "center", fontWeight: 700, fontSize: 16, color: "var(--text-mid)", marginBottom: 32 }}>
//             Amazing Facts About Common Pests
//           </p>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
//             {STATS.map((s, i) => (
//               <motion.div
//                 key={s.value}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 style={{ display: "flex", alignItems: "center", gap: 16 }}
//               >
//                 <div style={{ color: "var(--green-mid)", opacity: 0.5 }}>{s.icon}</div>
//                 <div>
//                   <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 36, color: "var(--text-dark)", lineHeight: 1 }}>
//                     {s.value}
//                   </p>
//                   <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function PestProcess() {
//   return (
//     <section
//       style={{
//         padding: "100px 0 100px 0",
//         background: "linear-gradient(125deg, #e8f7e0 0%, var(--bg-light) 100%)",
//         boxShadow: "0px 8px 40px rgba(168, 230, 61, 0.08) inset",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "1.1fr 1fr",
//           gap: 64,
//           alignItems: "center",
//           padding: "0 24px",
//         }}
//       >
//         {/* Left */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//         >
//           <SectionTag label="Pest Control Process" />
//           <h2
//             style={{
//               fontFamily: "'Fraunces', serif",
//               fontWeight: 800,
//               fontSize: "clamp(28px, 3.6vw, 44px)",
//               color: "var(--text-dark)",
//               lineHeight: 1.13,
//               marginBottom: 24,
//               letterSpacing: "-0.03em",
//             }}
//           >
//             Our Pest Control Process for Safe &amp; Effective Results
//           </h2>
//           <p
//             style={{
//               color: "var(--text-mid)",
//               lineHeight: 1.85,
//               marginBottom: 32,
//               fontSize: 16,
//               background: "rgba(168, 230, 61, 0.08)",
//               borderRadius: 8,
//               padding: "14px 20px",
//               maxWidth: 470,
//               borderLeft: "5px solid var(--green-accent)",
//               fontWeight: 500,
//             }}
//           >
//             Jetkill’s certified technicians use proven methods and eco-friendly treatments to deliver reliable, long-lasting results — with honest, transparent pricing for your peace of mind.
//           </p>
//           <div style={{ display: "flex", gap: 32, marginBottom: 18, flexWrap: "wrap" }}>
//             {[
//               { label: "Certified & Experienced Technicians", icon: <FiCheck size={15} color="var(--text-dark)" strokeWidth={3.2} /> },
//               { label: "Long-term prevention & monitoring", icon: <FiCheck size={15} color="var(--text-dark)" strokeWidth={3.2} /> },
//             ].map((c) => (
//               <div
//                 key={c.label}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 10,
//                   marginBottom: 0,
//                   background: "#fff",
//                   borderRadius: 20,
//                   boxShadow: "0 2px 8px rgba(168,230,61,0.07)",
//                   padding: "6px 18px 6px 8px",
//                   border: "1px solid var(--border)",
//                 }}
//               >
//                 <span
//                   style={{
//                     width: 26,
//                     height: 26,
//                     borderRadius: "50%",
//                     background: "var(--green-accent)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     boxShadow: "0 2px 8px rgba(168,230,61,0.16)",
//                     flexShrink: 0,
//                   }}
//                 >
//                   {c.icon}
//                 </span>
//                 <span
//                   style={{
//                     fontSize: 15,
//                     fontWeight: 600,
//                     color: "var(--text-dark)",
//                     fontFamily: "'Plus Jakarta Sans'",
//                     letterSpacing: "-.01em"
//                   }}
//                 >
//                   {c.label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               gap: 20,
//               marginTop: 36,
//               marginBottom: 38,
//               maxWidth: 540,
//             }}
//           >
//             {[
//               {
//                 num: "01",
//                 title: "Inspection",
//                 desc: "We meticulously identify pest activity, high-risk areas, and possible entry points.",
//                 icon: <FiSearch size={18} color="var(--green-accent)" />,
//                 shadow: "rgba(168,230,61,0.12)",
//               },
//               {
//                 num: "02",
//                 title: "Treatment Plan",
//                 desc: "A custom solution is designed for your pest challenge with full transparency.",
//                 icon: <FiClipboard size={18} color="#5cba00" />,
//                 shadow: "rgba(97,219,51,0.16)",
//               },
//               {
//                 num: "03",
//                 title: "Treatment",
//                 desc: "We apply eco-friendly, approved chemicals and deliver results with minimal disruption.",
//                 icon: <FiZap size={18} color="#569800" />,
//                 shadow: "rgba(89,166,37,0.12)",
//               },
//               {
//                 num: "04",
//                 title: "Follow-up",
//                 desc: "Enjoy free re-inspection within 15 days to ensure your satisfaction.",
//                 icon: <FiRefreshCw size={18} color="#b2d600" />,
//                 shadow: "rgba(179,209,51,0.12)",
//               },
//             ].map((step) => (
//               <div
//                 key={step.num}
//                 style={{
//                   background: "#fcfcfc",
//                   borderRadius: 16,
//                   padding: "24px 18px",
//                   boxShadow: `0 4px 12px ${step.shadow}`,
//                   border: "1.5px solid var(--border)",
//                   transition: "border 0.21s, box-shadow 0.21s",
//                   minHeight: 160,
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "flex-start",
//                   gap: 4,
//                 }}
//               >
//                 <div
//                   style={{
//                     width: 42,
//                     height: 42,
//                     borderRadius: "50%",
//                     background: "linear-gradient(130deg, var(--green-accent) 60%, #e5ffb0 100%)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontWeight: 800,
//                     color: "var(--text-dark)",
//                     marginBottom: 10,
//                     fontSize: 15,
//                     border: "3px solid #ecfae2",
//                     boxShadow: "0 2px 8px 0 rgba(168,230,61,0.13)",
//                   }}
//                 >
//                   {step.icon}
//                   <span style={{ position: "absolute", left: -9999 }}>{step.num}</span>
//                 </div>
//                 <h4
//                   style={{
//                     fontWeight: 700,
//                     fontSize: 16,
//                     color: "var(--text-dark)",
//                     marginBottom: 2,
//                     fontFamily: "'Plus Jakarta Sans'",
//                     letterSpacing: "-0.01em"
//                   }}
//                 >
//                   {step.title}
//                 </h4>
//                 <p
//                   style={{
//                     fontSize: 13.5,
//                     color: "var(--text-muted)",
//                     fontWeight: 500,
//                     marginTop: 0,
//                   }}
//                 >
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div style={{ marginTop: 12 }}>
//             <ReviewBar />
//           </div>
//         </motion.div>

//         {/* Right image */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           style={{ position: "relative", justifySelf: "end" }}
//         >
//           <div
//             style={{
//               borderRadius: 22,
//               overflow: "hidden",
//               aspectRatio: "3/4",
//               boxShadow: "0 16px 52px rgba(168,230,61,0.13)",
//               border: "2px solid #e8f7e0",
//               minWidth: 310,
//             }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80"
//               alt="A Jetkill pest control technician at work"
//               style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
//             />
//           </div>
//           {/* Floating rating card */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: 26,
//               left: "50%",
//               transform: "translateX(-50%)",
//               background: "#fff",
//               borderRadius: 18,
//               padding: "22px 28px",
//               boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
//               minWidth: 230,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               border: "1px solid #f0f0f0",
//             }}
//           >
//             <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
//               {[...Array(5)].map((_, i) => (
//                 <FiStar key={i} size={17} color="#A8E63D" fill="#A8E63D" />
//               ))}
//             </div>
//             <p
//               style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontWeight: 700,
//                 fontSize: 26,
//                 color: "var(--text-dark)",
//                 margin: "0 0 8px 0",
//                 letterSpacing: "-0.01em",
//               }}
//             >
//               4.9/5
//             </p>
//             <div style={{ width: 90 }}>
//               <ReviewBar />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function ServicesPage({ setPage }) {
//   return (
//     <div>
//       <PageHero title="Our services" breadcrumb="Services" />
//       <ServicesGrid />
//       <PestProtection />
//       <PestProcess />
//     </div>
//   );
// }

// // ══════════════════════════════════════════════════════════════════════════════
// // CONTACT PAGE
// // ══════════════════════════════════════════════════════════════════════════════

// function ContactCards() {
//   const cards = [
//     {
//       img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
//       label: "Contact Us!",
//       value: "+91-88028 30115 / 9205576058",
//       icon: <FiPhone size={20} />,
//       href: "tel:+918802830115",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
//       label: "E-mail Us!",
//       value: "satyajeetkushwaha2017@gmail.com",
//       icon: <FiMail size={20} />,
//       href: "mailto:satyajeetkushwaha2017@gmail.com",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80",
//       label: "Our Location!",
//       value: "196A FF, Jeewan Nagar, Opp. Maharani Bagh, Ashram, ND-14",
//       icon: <FiMapPin size={20} />,
//       href: "#map",
//     },
//   ];

//   return (
//     <section style={{ padding: "80px 24px 0", background: "var(--bg-light)" }}>
//       <div style={{ 
//         maxWidth: 1200, 
//         margin: "0 auto", 
//         display: "grid", 
//         gridTemplateColumns: "repeat(3, 1fr)", 
//         gap: 24 
//       }}>
//         {cards.map((c, i) => (
//           <motion.a
//             key={c.label}
//             href={c.href}
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1 }}
//             style={{ 
//               textDecoration: "none", 
//               display: "block", 
//               background: "#fff", 
//               borderRadius: 16, 
//               overflow: "hidden", 
//               border: "2px solid var(--green-accent)", // Make border thicker and green for visibility
//               boxShadow: "0 2px 14px 0 rgba(0,0,0,0.07)" 
//             }}
//           >
//             <div style={{ 
//               height: 180, 
//               overflow: "hidden", 
//               borderBottom: "1.5px solid var(--border)" // Border between image and card content
//             }}>
//               <img 
//                 src={c.img} 
//                 alt="" 
//                 style={{ width: "100%", height: "100%", objectFit: "cover", borderTopLeftRadius: 16, borderTopRightRadius: 16 }} 
//               />
//             </div>
//             <div 
//               style={{ 
//                 padding: "20px 24px", 
//                 display: "flex", 
//                 alignItems: "flex-start", 
//                 gap: 14, 
//                 borderTop: "1.5px solid var(--border)" // Emphasize top border of content area
//               }}
//             >
//               <div style={{
//                 width: 44, 
//                 height: 44, 
//                 borderRadius: "50%",
//                 background: "var(--green-accent)", 
//                 flexShrink: 0,
//                 display: "flex", 
//                 alignItems: "center", 
//                 justifyContent: "center",
//                 color: "var(--text-dark)",
//                 border: "2.5px solid #fff", // border around icon circle
//                 boxShadow: "0 2px 6px rgba(168,230,61,0.08)"
//               }}>
//                 {c.icon}
//               </div>
//               <div
//                 style={{
//                   // optional: vertical colored border indicator on left
//                   borderLeft: "3px solid var(--green-accent)",
//                   paddingLeft: 12,
//                   minHeight: 44,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center"
//                 }}
//               >
//                 <p style={{ 
//                   fontSize: 12, 
//                   color: "var(--text-muted)", 
//                   marginBottom: 4, 
//                   fontWeight: 500,
//                   borderBottom: "1px dashed var(--border)", // subtle underline
//                   display: "inline-block",
//                   paddingBottom: 2
//                 }}>
//                   {c.label}
//                 </p>
//                 <p style={{ 
//                   fontWeight: 700, 
//                   fontSize: 14, 
//                   color: "var(--text-dark)", 
//                   lineHeight: 1.4,
//                   borderRadius: 6,
//                   border: "1px solid var(--border)",
//                   padding: "4px 8px",
//                   background: "rgba(168,230,61,0.07)"
//                 }}>
//                   {c.value}
//                 </p>
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// }

// function ContactForm() {
//   const [form, setForm] = useState({ first: "", last: "", phone: "", email: "", message: "" });
//   const [sent, setSent] = useState(false);

//   const inputStyle = {
//     width: "100%", padding: "14px 18px",
//     background: "var(--bg-light)",
//     border: "2px solid rgb(12, 5, 5)", // dark border
//     borderRadius: 10,
//     fontSize: 14,
//     color: "var(--text-dark)",
//     fontFamily: "'Plus Jakarta Sans', sans-serif",
//     transition: "border 0.2s",
//     boxSizing: "border-box",
//     outline: "none",
//   };

//   // A button style with dark border for Send button
//   const buttonStyle = {
// border: "2px solid rgb(12, 5, 5)",
//     borderRadius: 10,
//     fontWeight: 700,
//     fontSize: 15,
//     display: "inline-flex",
//     alignItems: "center",
//     gap: 8,
//     background: "var(--green-accent)",
//     color: "#0D3318",
//     padding: "14px 26px",
//     cursor: "pointer",
//     boxShadow: "0px 2px 18px 0px rgba(168,230,61,0.10)",
//     transition: "background 0.2s, border 0.2s, color 0.2s",
//     outline: "none",
//   };

//   return (
//     <section style={{ padding: "80px 24px", background: "#fff" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
//         {/* Image + Hours */}
//         <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: "relative" }}>
//           <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/5" }}>
//             <img
//               src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=80"
//               alt="Contact"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </div>
//           {/* Working hours card */}
//           <div style={{
//             position: "absolute", bottom: 30, left: 20,
//             background: "rgba(255,255,255,0.95)",
//             backdropFilter: "blur(12px)",
//             borderRadius: 14, padding: "20px 24px",
//             boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
//             border: "1px solid var(--border)",
//           }}>
//             <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--text-dark)", marginBottom: 12 }}>Working Hours:</h4>
//             {[
//               "Monday – Saturday: 9:00 AM – 7:00 PM",
//               "Sunday: Emergency Services Available",
//             ].map((h) => (
//               <div key={h} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
//                 <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green-accent)", flexShrink: 0, display: "block" }} />
//                 <span style={{ fontSize: 13, color: "var(--text-mid)" }}>{h}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Form */}
//         <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
//           <SectionTag label="Contact Us" />
//           <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--text-dark)", lineHeight: 1.2, marginBottom: 16 }}>
//             Reach out today for fast, reliable pest solutions
//           </h2>
//           <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
//             We prioritize your safety and comfort, using modern techniques and eco-friendly methods
//             to eliminate pests quickly and prevent future infestations.
//           </p>

//           <AnimatePresence>
//             {sent ? (
//               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//                 style={{ background: "#E8F7D0", borderRadius: 12, padding: 28, textAlign: "center", border: "2px solid var(--green-accent)" }}>
//                 <p style={{ fontWeight: 700, fontSize: 18, color: "var(--green-mid)", marginBottom: 8 }}>✅ Message Sent!</p>
//                 <p style={{ color: "var(--text-muted)" }}>We'll contact you within 24 hours. For urgent help call +91-88028 30115</p>
//               </motion.div>
//             ) : (
//               <motion.div>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
//                   <input
//                     style={inputStyle}
//                     placeholder="First name"
//                     value={form.first}
//                     onChange={e => setForm({ ...form, first: e.target.value })}
//                   />
//                   <input
//                     style={inputStyle}
//                     placeholder="Last name"
//                     value={form.last}
//                     onChange={e => setForm({ ...form, last: e.target.value })}
//                   />
//                   <input
//                     style={inputStyle}
//                     placeholder="Phone Number"
//                     value={form.phone}
//                     onChange={e => setForm({ ...form, phone: e.target.value })}
//                   />
//                   <input
//                     style={inputStyle}
//                     placeholder="E-mail Address"
//                     value={form.email}
//                     onChange={e => setForm({ ...form, email: e.target.value })}
//                   />
//                 </div>
//                 <textarea
//                   style={{ ...inputStyle, height: 130, resize: "vertical", display: "block", marginBottom: 24, border: "2px solid rgb(12, 5, 5)" }}
//                   placeholder="Write your message...."
//                   value={form.message}
//                   onChange={e => setForm({ ...form, message: e.target.value })}
//                 />
//                 <button
//                   style={buttonStyle}
//                   onClick={() => setSent(true)}
//                 >
//                   Send A Message <FiArrowRight size={15} />
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function FaqSection() {
//   const [open, setOpen] = useState(0);

//   return (
//     <section style={{ padding: "80px 24px", background: "var(--bg-light)" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
//         {/* Left */}
//         <div>
//           <SectionTag label="Frequently Asked Questions" />
//           <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 38px)", color: "var(--text-dark)", lineHeight: 1.25, marginBottom: 20 }}>
//             Helpful information to guide your pest control decision
//           </h2>
//           <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
//             Yes, we use eco-friendly and government-approved pest control chemicals that are safe
//             for children, pets, and the environment. Our treatments are carefully selected to effectively eliminate pests.
//           </p>
//           {/* <GreenBtn>View All FAQ's <FiArrowRight size={15} /></GreenBtn> */}

//           {/* Image with badge */}
//           <div style={{ position: "relative", marginTop: 36, borderRadius: 14, overflow: "hidden" }}>
//             <img
//               src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
//               alt=""
//               style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
//             />
//             <div style={{
//               position: "absolute", bottom: 16, left: 16,
//               background: "rgba(13,51,24,0.85)", backdropFilter: "blur(8px)",
//               borderRadius: 10, padding: "12px 18px",
//               display: "flex", alignItems: "center", gap: 12,
//             }}>
//               {[...Array(3)].map((_, i) => (
//                 <img key={i} src={`https://i.pravatar.cc/32?img=${20 + i}`} alt=""
//                   style={{ width: 32, height: 32, borderRadius: "50%", marginLeft: i > 0 ? -10 : 0, border: "2px solid rgba(255,255,255,0.3)", objectFit: "cover" }} />
//               ))}
//               <div>
//                 <p style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>20k+</p>
//                 <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>Homes & Businesses Served</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Accordion */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//           {FAQS.map((faq, i) => (
//             <div
//               key={i}
//               style={{
//                 borderRadius: 12,
//                 background: open === i ? "#A8E63D" : "#fff",
//                 border: `1px solid ${open === i ? "var(--green-accent)" : "var(--border)"}`,
//                 overflow: "hidden",
//                 transition: "all 0.25s",
//               }}
//             >
//               <button
//                 onClick={() => setOpen(open === i ? -1 : i)}
//                 style={{
//                   width: "100%", display: "flex", justifyContent: "space-between",
//                   alignItems: "center", padding: "18px 22px",
//                   background: "none", border: "none", cursor: "pointer",
//                   textAlign: "left",
//                 }}
//               >
//                 <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text-dark)", lineHeight: 1.4 }}>
//                   {i + 1}. {faq.q}
//                 </span>
//                 {open === i ? <FiChevronUp size={18} color="var(--text-dark)" /> : <FiChevronDown size={18} color="var(--text-muted)" />}
//               </button>
//               <AnimatePresence>
//                 {open === i && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                     style={{ overflow: "hidden" }}
//                   >
//                     <div style={{ padding: "0 22px 18px", fontSize: 14, color: "var(--text-dark)", lineHeight: 1.7 }}>
//                       {faq.a}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function MapSection() {
//   return (
//     <section id="map" style={{ padding: "80px 24px 100px", background: "#fff" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <SectionHeader tag="Our Location" title="Reach out today for fast, reliable pest solutions" center />
//         <div style={{
//           borderRadius: 16, overflow: "hidden",
//           boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
//           height: 480,
//           border: "1px solid var(--border)",
//         }}>
//           <iframe
//             title="Jetkill Location"
//             src="https://maps.google.com/maps?q=Jeewan+Nagar,+Ashram,+New+Delhi&z=15&output=embed"
//             width="100%"
//             height="100%"
//             style={{ border: 0, display: "block" }}
//             allowFullScreen=""
//             loading="lazy"
//           />
//         </div>
//         <div style={{
//           display: "flex", justifyContent: "center",
//           gap: 32, marginTop: 28, flexWrap: "wrap",
//         }}>
//           {[
//             { icon: <FiPhone size={16} />, label: "+91-88028 30115", href: "tel:+918802830115" },
//             { icon: <FiPhone size={16} />, label: "011-46051882", href: "tel:01146051882" },
//             { icon: <FiMail size={16} />, label: "satyajeetkushwaha2017@gmail.com", href: "mailto:satyajeetkushwaha2017@gmail.com" },
//             { icon: <FiMapPin size={16} />, label: "196A FF, Jeewan Nagar, Ashram, ND-14", href: "#" },
//           ].map((item) => (
//             <a key={item.label} href={item.href} style={{
//               display: "flex", alignItems: "center", gap: 8,
//               color: "var(--text-mid)", fontSize: 14,
//               textDecoration: "none", fontWeight: 500,
//               transition: "color 0.2s",
//             }}>
//               <div style={{
//                 width: 32, height: 32, borderRadius: "50%",
//                 background: "#E8F7D0",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 color: "var(--green-mid)",
//               }}>
//                 {item.icon}
//               </div>
//               {item.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ContactPage({ setPage }) {
//   return (
//     <div>
//       <PageHero title="Contact us" breadcrumb="Contact Us" />
//       <ContactCards />
//       <ContactForm />
//       <FaqSection />
//       <MapSection />
//     </div>
//   );
// }

// // ══════════════════════════════════════════════════════════════════════════════
// // FOOTER
// // ══════════════════════════════════════════════════════════════════════════════
// function Footer({ setPage }) {
//   return (
//     <footer style={{ background: "var(--green-dark)", padding: "64px 24px 28px" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 48 }}>
//           <div>
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
//               <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--green-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <MdOutlinePestControl size={22} color="#0D3318" />
//               </div>
//               <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>Jetkill</span>
//             </div>
//             <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.7 }}>
//               Delhi's trusted pest control partner since 2010. Safe, effective, and affordable pest management solutions.
//             </p>
//           </div>
//           <div>
//             <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Quick Links</h4>
//             {["Home", "About Us", "Services", "Contact Us"].map((l) => (
//               <button key={l} onClick={() => setPage(l)} style={{
//                 display: "block", background: "none", border: "none",
//                 color: "rgba(255,255,255,0.55)", fontSize: 13,
//                 cursor: "pointer", padding: "4px 0", fontFamily: "'Plus Jakarta Sans'",
//                 transition: "color 0.2s",
//               }}
//                 onMouseEnter={e => e.target.style.color = "var(--green-accent)"}
//                 onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
//               >
//                 {l}
//               </button>
//             ))}
//           </div>
//           <div>
//             <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Services</h4>
//             {SERVICES_LIST.map((s) => (
//               <p key={s.id} style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 6 }}>{s.title}</p>
//             ))}
//           </div>
//           <div>
//             <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Contact</h4>
//             {[
//               { icon: <FiPhone size={13} />, text: "+91-88028 30115" },
//               { icon: <FiPhone size={13} />, text: "9205576058 / 011-46051882" },
//               { icon: <FiMail size={13} />, text: "satyajeetkushwaha2017@gmail.com" },
//               { icon: <FiMapPin size={13} />, text: "196A FF, Jeewan Nagar, Opp. Maharani Bagh, Ashram, ND-14" },
//             ].map((c, i) => (
//               <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
//                 <span style={{ color: "var(--green-accent)", marginTop: 1, flexShrink: 0 }}>{c.icon}</span>
//                 <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.5 }}>{c.text}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>© 2026 Jetkill Pest Control. All rights reserved.</p>
//           <a href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textDecoration: "none" }}>Terms & Privacy</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // Exporting AboutPage, ServicesPage, ContactPage, Navbar, and Footer as named exports
// export { AboutPage, ServicesPage, ContactPage };


import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  FiMenu, FiX, FiArrowRight, FiPhone, FiMail, FiMapPin,
  FiCheck, FiChevronDown, FiChevronUp, FiStar, FiShield,
  FiUsers, FiAward, FiClock, FiHome,
  FiSearch, FiClipboard, FiZap, FiRefreshCw
} from "react-icons/fi";
import {
  MdOutlinePestControl, MdBugReport, MdOutlineLocalHospital,
  MdConstruction, MdSecurity, MdOutlineVerified
} from "react-icons/md";
import { GiBee, GiSpiderWeb, GiRat, GiSprout } from "react-icons/gi";
import { FaBug, FaCheckCircle, FaArrowRight as FaArrowRightSolid, FaArrowRight } from "react-icons/fa";


  const slideLeft  = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
  const slideRight = { hidden: { opacity: 0, x:  60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
  
  function useReveal() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return [ref, inView];
  }

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

// ── GLOBAL STYLES ──────────────────────────────────────────────────────────────


// ── DATA ───────────────────────────────────────────────────────────────────────
const NAV_PAGES = ["Home", "About Us", "Services", "Contact Us"];

const SERVICES_LIST = [
  {
    id: 1,
    title: "Vector Control",
    desc: "Comprehensive mosquito, fly and vector pest management using targeted sprays and eco-safe fogging methods.",
    icon: <GiBee size={28} />,
    img: "/Images/img1.jpeg",
    tags: ["Safe", "Certified", "Effective"],
  },
  {
    id: 2,
    title: "Termite Control",
    desc: "Advanced termite detection and elimination with soil treatment and baiting systems for lasting protection.",
    icon: <MdOutlinePestControl size={28} />,
    img: "/Images/img2.jpeg",
    tags: ["Safe", "Certified", "Effective"],
  },
  {
    id: 3,
    title: "Bed Bugs Control",
    desc: "Heat and chemical treatment methods to fully eliminate bed bug infestations from all living spaces.",
    icon: <MdBugReport size={28} />,
    img: "/Images/img3.jpeg",
    tags: ["Safe", "Certified", "Effective"],
  },
  {
    id: 4,
    title: "General Pest Control",
    desc: "Complete household pest management — cockroaches, ants, spiders, silverfish and more, thoroughly treated.",
    icon: <GiSpiderWeb size={28} />,
    img: "/Images/img4.jpeg",
    tags: ["Safe", "Certified", "Effective"],
  },
  {
    id: 5,
    title: "Disinfection Service",
    desc: "Deep sanitization and disinfection for homes, offices and commercial spaces with hospital-grade solutions.",
    icon: <MdOutlineLocalHospital size={28} />,
    img: "/Images/img9.jpeg",
    tags: ["Safe", "Certified", "Effective"],
  },
  {
    id: 6,
    title: "Post Construction Termite Treatment",
    desc: "Specialized anti-termite treatment applied after construction to protect new structures long-term.",
    icon: <MdConstruction size={28} />,
    img: "/Images/img10.jpeg",
    tags: ["Safe", "Certified", "Effective"],
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajan Sharma",
    role: "Homeowner, Delhi",
    text: "Jetkill's team was professional, punctual and completely eliminated our cockroach problem. They follow safety standards strictly which is crucial with kids at home. Very happy with the results — highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?img=11",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Office Manager, South Delhi",
    text: "We had a severe termite issue in our office. Satyajeet and his team did a thorough inspection and treatment. Fast response, transparent pricing and no hidden costs. Our office is pest-free now.",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?img=5",
  },
  {
    id: 3,
    name: "Vikram Patel",
    role: "Restaurant Owner, Ashram",
    text: "Excellent service from start to finish. They handled our bed bug infestation completely. Technicians were knowledgeable and explained every step. Follow-up inspection was thorough too.",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?img=15",
  },
];

const FAQS = [
  {
    q: "Do you use eco-friendly and approved pest control chemicals?",
    a: "Yes, we use eco-friendly and government-approved pest control chemicals that are safe for children, pets, and the environment. Our treatments are carefully selected to effectively eliminate pests without harming your family.",
  },
  {
    q: "How often should pest control services be scheduled annually?",
    a: "We recommend quarterly treatments for general pest control. However, specific pest situations like termites or bed bugs may require more targeted scheduling based on our technician's assessment.",
  },
  {
    q: "What preparation is required before starting pest control treatment?",
    a: "Clear food items and cover kitchen surfaces. Vacate treated areas for 2-4 hours post-treatment. Keep pets away during and shortly after treatment. Our team will guide you with specific instructions before every visit.",
  },
  {
    q: "Do you offer follow-up inspections after pest treatment completion?",
    a: "Absolutely. We provide complimentary follow-up inspection within 15 days to ensure complete elimination. If any pest activity is detected, re-treatment is done at no extra charge.",
  },
  {
    q: "Can pests return after completing the pest control treatment?",
    a: "With proper treatment and preventive measures, recurrence is minimal. Our residual treatments remain effective for months. We also provide you tips to prevent re-infestation after treatment.",
  },
];

const ACHIEVEMENTS = [
  { year: "2010", title: "Founded Jetkill", org: "Delhi NCR Operations Begin" },
  { year: "2015", title: "NPMA Certified", org: "National Pest Management Association" },
  { year: "2019", title: "1000+ Homes Served", org: "South Delhi & NCR Milestone" },
  { year: "2024", title: "Green Compliance", org: "Eco-Safe Chemical Certification" },
];

const PESTS = [
  { name: "Cockroaches", emoji: "🪳" },
  { name: "Mosquitoes", emoji: "🦟" },
  { name: "Bed Bugs", emoji: "🐛" },
  { name: "Termites", emoji: "🐜" },
  { name: "Spiders", emoji: "🕷️" },
  { name: "Rodents", emoji: "🐀" },
];

const STATS = [
  { value: "95%", label: "Pest Elimination Rate", icon: <MdOutlineVerified size={28} /> },
  { value: "5K+", label: "Species Controlled", icon: <MdBugReport size={28} /> },
  { value: "24/7", label: "Emergency Support", icon: <FiClock size={28} /> },
  { value: "15+", label: "Years Experience", icon: <FiAward size={28} /> },
];

// ── SHARED COMPONENTS ──────────────────────────────────────────────────────────

function SectionTag({ label }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "#fff", border: "1px solid var(--border)",
      padding: "6px 16px", borderRadius: 999,
      marginBottom: 20, width: "fit-content",
    }}>
      <span className="pulse-dot" style={{
        width: 8, height: 8, borderRadius: "50%",
        background: "var(--green-accent)", display: "block", flexShrink: 0,
      }} />
      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-mid)", letterSpacing: "0.02em" }}>
        {label}
      </span>
    </div>
  );
}

function SectionHeader({ tag, title, center = false }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 48 }}>
      <div style={{ display: center ? "flex" : "block", justifyContent: center ? "center" : "flex-start" }}>
        <SectionTag label={tag} />
      </div>
      <h2 style={{
        fontFamily: "'Fraunces', serif",
        fontWeight: 700,
        fontSize: "clamp(28px, 4vw, 46px)",
        color: "var(--text-dark)",
        lineHeight: 1.2,
        maxWidth: center ? 700 : "100%",
        margin: center ? "0 auto" : 0,
      }}>
        {title}
      </h2>
    </div>
  );
}

function ReviewBar() {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
      marginTop: 24,
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {[...Array(3)].map((_, i) => (
          <img
            key={i}
            src={`https://i.pravatar.cc/36?img=${10 + i}`}
            alt=""
            style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "2px solid #fff",
              marginLeft: i > 0 ? -10 : 0,
              objectFit: "cover",
            }}
          />
        ))}
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "var(--green-accent)", border: "2px solid #fff",
          marginLeft: -10, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 11, fontWeight: 700,
          color: "var(--text-dark)",
        }}>+</div>
      </div>
      <div>
        <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} size={13} color="#F5A623" fill="#F5A623" />
          ))}
        </div>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
          <b style={{ color: "var(--text-dark)" }}>4.9/5</b> · Over 4200 Reviews
        </span>
      </div>
    </div>
  );
}

function GreenBtn({ children, outline = false, onClick, small = false }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: outline ? "transparent" : (hov ? "var(--green-mid)" : "var(--green-accent)"),
        border: outline ? "2px solid var(--green-accent)" : "none",
        color: outline ? "var(--green-accent)" : "var(--text-dark)",
        padding: small ? "10px 22px" : "14px 30px",
        borderRadius: 8,
        fontSize: small ? 13 : 15,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        letterSpacing: "0.01em",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </button>
  );
}

// ── NAVBAR ─────────────────────────────────────────────────────────────────────
function Navbar({ activePage, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      padding: "0 24px",
    }}>
      <div style={{
        maxWidth: 1280, margin: "12px auto 0",
        background: scrolled ? "rgba(13,51,24,0.97)" : "rgba(13,51,24,0.92)",
        backdropFilter: "blur(16px)",
        borderRadius: 14,
        padding: "0 28px",
        height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        border: "1px solid rgba(168,230,61,0.12)",
        transition: "all 0.3s",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "var(--green-accent)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <MdOutlinePestControl size={22} color="#0D3318" />
          </div>
          <span style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700, fontSize: 20, color: "#fff",
            letterSpacing: "0.02em",
          }}>
            Jetkill
          </span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}
          className="desktop-nav"
        >
          {NAV_PAGES.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "8px 16px", borderRadius: 8,
                color: activePage === p ? "var(--green-accent)" : "rgba(255,255,255,0.8)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14, fontWeight: activePage === p ? 700 : 500,
                transition: "all 0.2s",
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="tel:+918802830115" style={{
            display: "flex", alignItems: "center", gap: 6,
            color: "rgba(255,255,255,0.7)",
            fontSize: 13, textDecoration: "none", fontWeight: 500,
          }}>
            <FiPhone size={14} /> +91-88028 30115
          </a>
          <GreenBtn small onClick={() => setPage("Contact Us")}>
            Free Estimate <FiArrowRight size={13} />
          </GreenBtn>
        </div>
      </div>
    </nav>
  );
}

// ── PAGE HERO BANNER ───────────────────────────────────────────────────────────
function PageHero({ title, breadcrumb, activePage }) {
  return (
    <div style={{
      position: "relative",
      height: 420,
      background: "var(--green-dark)",
      overflow: "hidden",
    }}>
      <img
        src="/Images/img7.jpeg"
        alt=""
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", opacity: 0.35,
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(13,51,24,0.85) 40%, rgba(27,94,48,0.5) 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "0 10% 60px",
        maxWidth: 1280, margin: "0 auto", left: 0, right: 0,
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700, fontSize: "clamp(42px, 6vw, 72px)",
            color: "#fff", marginBottom: 12,
          }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}
        >
          Home / <span style={{ color: "var(--green-accent)" }}>{breadcrumb}</span>
        </motion.p>
      </div>

      {/* Decorative dot */}
      <div style={{
        position: "absolute", bottom: "40%", right: "35%",
        width: 10, height: 10, borderRadius: "50%",
        background: "var(--green-accent)",
      }} className="pulse-dot" />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ABOUT US PAGE
// ══════════════════════════════════════════════════════════════════════════════

const AboutIntro = () => {
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
              <div className="relative w-full h-[440px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/Images/img8.jpeg"
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
                  src="/Images/img9.jpeg"
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
                      src="/Images/img10.jpeg"
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

function AboutApproach() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => { if (inView) setAnimated(true); }, [inView]);

  const bars = [
    { label: "Businesses Protected", pct: 75 },
    { label: "Pest Elimination Rate", pct: 90 },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-light)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        {/* Left */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", marginBottom: 20 }}>
            <img
              src="/Images/img16.jpeg"
              alt="Approach"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[{ icon: <MdSecurity size={22} />, title: "Our Mission", desc: "To provide safe, effective pest control solutions for every home and business." },
              { icon: <FiShield size={22} />, title: "Our Vision", desc: "A pest-free India, one property at a time, using eco-conscious methods." }
            ].map((item) => (
              <div key={item.title} style={{
                background: "#fff", borderRadius: 12, padding: 20,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "var(--green-accent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16, color: "var(--text-dark)",
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--text-dark)", marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <SectionTag label="Our Approach" />
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 700,
            fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--text-dark)",
            lineHeight: 1.25, marginBottom: 20,
          }}>
            Our proven approach to effective pest control
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32, fontSize: 15 }}>
            Our proven approach combines thorough inspection, targeted treatment, and preventive measures
            to eliminate pests at the source. We use safe, industry-approved solutions tailored to
            your property, ensuring long-lasting protection.
          </p>

          {/* Feature highlights */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
            {[{ icon: <MdOutlinePestControl size={20} />, title: "Advanced Pest Control Techniques" },
              { icon: <FiShield size={20} />, title: "Thorough Pest Inspection Process" }
            ].map((f) => (
              <div key={f.title} style={{
                display: "flex", gap: 12, alignItems: "flex-start",
                background: "#fff", borderRadius: 10, padding: 16,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "#E8F7D0", display: "flex", alignItems: "center",
                  justifyContent: "center", color: "var(--green-mid)", flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text-dark)", lineHeight: 1.4 }}>{f.title}</span>
              </div>
            ))}
          </div>

          {/* Progress bars */}
          <div ref={ref} style={{ marginBottom: 36 }}>
            {bars.map((bar) => (
              <div key={bar.label} style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-dark)" }}>{bar.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--green-mid)" }}>{bar.pct}%</span>
                </div>
                <div style={{ background: "#DDE8DD", borderRadius: 99, height: 10, overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: animated ? `${bar.pct}%` : 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      background: "linear-gradient(90deg, var(--green-accent), var(--green-mid))",
                      borderRadius: 99,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <GreenBtn>Contact Us <FiArrowRight size={15} /></GreenBtn>
        </motion.div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  // Adding a bgColor property to each card for differentiation
  const cards = [
    {
      icon: <FiUsers size={26} />,
      title: "Experienced technicians delivering reliable pest control",
      desc: "Our skilled and certified technicians use proven techniques and modern equipment to identify, treat, and prevent pest infestations effectively.",
      emoji: "🪳",
      bgColor: "#F1F8E8",
    },
    {
      icon: <MdOutlinePestControl size={26} />,
      title: "Advanced methods for long-lasting pest protection",
      desc: "Our skilled and certified technicians use proven techniques and modern equipment to identify, treat, and prevent pest infestations effectively.",
      emoji: "🦟",
      bgColor: "#EAFBF2",
    },
    {
      icon: <MdConstruction size={26} />,
      title: "Residential and commercial pest management experts",
      desc: "Our skilled and certified technicians use proven techniques and modern equipment to identify, treat, and prevent pest infestations effectively.",
      emoji: "🐀",
      bgColor: "#FFF8EA",
    },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="Who We Are" title="Experienced professionals delivering pest free spaces" center />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 56 }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: card.bgColor,
                borderRadius: 16,
                padding: 28,
                border: "1px solid var(--border)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "var(--green-accent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-dark)",
                }}>
                  {card.icon}
                </div>
                <span style={{ fontSize: 42 }} className="pr-4">{card.emoji}</span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--text-dark)", lineHeight: 1.4, marginBottom: 12 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>{card.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Certified", "Effective", "Safe"].map((tag) => (
                  <span key={tag} style={{
                    display: "flex", alignItems: "center", gap: 4,
                    fontSize: 12, fontWeight: 600, color: "var(--text-mid)",
                    background: "#fff", border: "1px solid var(--border)",
                    padding: "4px 10px", borderRadius: 99,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green-accent)", display: "block" }} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <ReviewBar />
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section style={{
      position: "relative", padding: "100px 24px",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "var(--green-dark)",
      }} />
      <img
        src="/Images/img5.jpeg"
        alt=""
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", opacity: 0.2,
          mixBlendMode: "luminosity",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="Achievements" title="Our achievements reflect pest control excellence" center />
        <h2 style={{ color: "#f5fae0", textAlign: "center" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: -20 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: "rgba(34, 61, 40, 0.82)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(220,255,204,0.22)",
                borderRadius: 16, padding: 28,
                textAlign: "center",
                color: "#f5fae0",
              }}
            >
              {/* Wreath SVG */}
              <svg viewBox="0 0 80 80" width={70} style={{ margin: "0 auto 16px", display: "block", opacity: 0.92 }}>
                <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(210,255,180,0.7)" strokeWidth="1.7" strokeDasharray="4 3" />
                <circle cx="40" cy="40" r="22" fill="none" stroke="rgba(168,230,61,0.42)" strokeWidth="1.5" />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
                  fill="#f5fae0" fontSize="13" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
                  {a.year}
                </text>
              </svg>
              <div style={{
                background: "rgba(168,230,61,0.18)", borderRadius: 6,
                padding: "4px 12px", display: "inline-block", marginBottom: 16,
              }}>
                <span style={{ color: "#b8f22a", fontSize: 13, fontWeight: 700, letterSpacing: 0.5 }}>{a.year}</span>
              </div>
              <h4 style={{ color: "#fff", fontSize: 17, fontWeight: 800, lineHeight: 1.5, textShadow: "0 2px 12px rgba(34,61,40,0.23)" }}>{a.title}</h4>
              <p style={{ color: "rgba(206,255,181,0.89)", fontSize: 13, marginTop: 8, fontWeight: 500 }}>{a.org}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--green-accent)", borderRadius: 999,
            padding: "6px 14px", marginBottom: 0,
            boxShadow: "0 2px 16px 0 rgba(168,230,61,0.16)",
          }}>
            <span style={{ fontWeight: 700, fontSize: 13, color: "#23400a", letterSpacing: 1 }}>Free</span>
          </div>
          <span style={{ color: "#f2ffdf", fontSize: 15, marginLeft: 10 }}>
            Connect with our team for professional pest solutions — <a href="tel:+918802830115" style={{ color: "#b8f22a", fontWeight: 700, textDecoration: "underline" }}>Join Us Today</a>
          </span>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    { name: "Satyajeet Kushwaha", role: "Chief Pest Control Officer", img: "https://i.pravatar.cc/300?img=52" },
    { name: "Ramesh Kumar", role: "Lead Termite Specialist", img: "https://i.pravatar.cc/300?img=59" },
    { name: "Ankit Sharma", role: "Senior Pest Technician", img: "https://i.pravatar.cc/300?img=60" },
    { name: "Deepak Singh", role: "Field Operations Manager", img: "https://i.pravatar.cc/300?img=53" },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-light)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="Our Team" title="Dedicated experts delivering reliable pest control" center />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ borderRadius: 16, overflow: "hidden", background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <img src={m.img} alt={m.name} style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }} />
              <div style={{ padding: "16px 20px" }}>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--text-dark)", marginBottom: 4 }}>{m.name}</h4>
                <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <ReviewBar />
      </div>
    </section>
  );
}

function AboutTestimonials() {
  return (
    <section style={{ padding: "100px 24px", background: "var(--green-dark)", position: "relative", borderRadius: "20px", margin: "0 24px 80px", overflow: "hidden" }}>
      {/* BG pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(168,230,61,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left image */}
        <div style={{ position: "relative" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "3/4" }}>
            <img
              src="/Images/img6.jpeg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{
            position: "absolute", bottom: 24, left: -20,
            background: "#fff", borderRadius: 14, padding: "18px 24px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)", minWidth: 200,
          }}>
            <div style={{ display: "flex", gap: 2, marginBottom: 8 }}>
              {[...Array(5)].map((_, i) => <FiStar key={i} size={14} color="#F5A623" fill="#F5A623" />)}
            </div>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 24, color: "var(--text-dark)" }}>4.9/5</span>
            <ReviewBar />
          </div>
          {/* Leaf decor */}
          <svg style={{ position: "absolute", bottom: 0, right: -20, opacity: 0.06 }} width="100" height="160" viewBox="0 0 100 160">
            <path d="M10,150 Q80,80 80,10 Q40,80 10,150Z" fill="#A8E63D" />
          </svg>
        </div>

        {/* Right reviews */}
        <div>
          <SectionTag label="What Client Says" />
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", color: "#fff", marginBottom: 32, lineHeight: 1.2 }}>
            What our customers say about pest control
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop
            style={{ paddingBottom: 40 }}
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                    {[...Array(t.rating)].map((_, i) => <FiStar key={i} size={18} color="#A8E63D" fill="#A8E63D" />)}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>
                    "{t.text}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
                    <img src={t.avatar} alt={t.name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover" }} />
                    <div>
                      <p style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>{t.name}</p>
                      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function AboutPage({ setPage }) {
  return (
    <div>
      <PageHero title="About us" breadcrumb="About Us" />
      <AboutIntro />
      <AboutApproach />
      <WhoWeAre />
      <Achievements />
      <TeamSection />
      {/* <AboutTestimonials /> */}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SERVICES PAGE
// ══════════════════════════════════════════════════════════════════════════════

function ServicesGrid() {
  const [hov, setHov] = useState(null);
  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-light)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {SERVICES_LIST.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHov(svc.id)}
              onMouseLeave={() => setHov(null)}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: 28,
                border: `1px solid ${hov === svc.id ? "var(--green-accent)" : "var(--border)"}`,
                boxShadow: hov === svc.id ? "0 8px 32px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {/* Circle image */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
                <div style={{ position: "relative", width: 120 }}>
                  <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", border: "4px solid var(--bg-light)" }}>
                    <img src={svc.img} alt={svc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{
                    position: "absolute", bottom: 0, right: 0,
                    width: 36, height: 36, borderRadius: "50%",
                    background: "var(--green-accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-dark)", border: "2px solid #fff",
                  }}>
                    {svc.icon}
                  </div>
                </div>
              </div>

              <h3 style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700, fontSize: 18,
                color: "var(--green-mid)", textAlign: "center",
                marginBottom: 12, lineHeight: 1.3,
              }}>
                {svc.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, textAlign: "center", marginBottom: 20 }}>
                {svc.desc}
              </p>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }} />
              <div style={{ textAlign: "center" }}>
                <a href="#" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  color: "var(--green-mid)", fontWeight: 700, fontSize: 14,
                  textDecoration: "none",
                }}>
                  Learn More <FiArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PestProtection() {
  return (
    <section style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="Protected / Safety" title="Protecting your home with expert pest control" center />

        {/* Pest circles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16, marginBottom: 60 }}>
          {PESTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{ textAlign: "center" }}
            >
              <div style={{
                width: 100, height: 100, borderRadius: "50%",
                border: "2.5px solid var(--green-accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 42, margin: "0 auto 12px",
                position: "relative",
                background: "#fff",
              }}>
                {p.emoji}
                {/* Cross line */}
                <div style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  border: "2px solid transparent",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    top: "50%", left: "10%", right: "10%",
                    height: "2.5px",
                    background: "var(--green-accent)",
                    transform: "rotate(-45deg)",
                    transformOrigin: "center",
                  }} />
                </div>
              </div>
              <p style={{ fontWeight: 700, fontSize: 13, color: "var(--text-dark)" }}>{p.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 48 }}>
          <p style={{ textAlign: "center", fontWeight: 700, fontSize: 16, color: "var(--text-mid)", marginBottom: 32 }}>
            Amazing Facts About Common Pests
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ display: "flex", alignItems: "center", gap: 16 }}
              >
                <div style={{ color: "var(--green-mid)", opacity: 0.5 }}>{s.icon}</div>
                <div>
                  <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 36, color: "var(--text-dark)", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PestProcess() {
  return (
    <section
      style={{
        padding: "100px 0 100px 0",
        background: "linear-gradient(125deg, #e8f7e0 0%, var(--bg-light) 100%)",
        boxShadow: "0px 8px 40px rgba(168, 230, 61, 0.08) inset",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 64,
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionTag label="Pest Control Process" />
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 3.6vw, 44px)",
              color: "var(--text-dark)",
              lineHeight: 1.13,
              marginBottom: 24,
              letterSpacing: "-0.03em",
            }}
          >
            Our Pest Control Process for Safe &amp; Effective Results
          </h2>
          <p
            style={{
              color: "var(--text-mid)",
              lineHeight: 1.85,
              marginBottom: 32,
              fontSize: 16,
              background: "rgba(168, 230, 61, 0.08)",
              borderRadius: 8,
              padding: "14px 20px",
              maxWidth: 470,
              borderLeft: "5px solid var(--green-accent)",
              fontWeight: 500,
            }}
          >
            Jetkill's certified technicians use proven methods and eco-friendly treatments to deliver reliable, long-lasting results — with honest, transparent pricing for your peace of mind.
          </p>
          <div style={{ display: "flex", gap: 32, marginBottom: 18, flexWrap: "wrap" }}>
            {[
              { label: "Certified & Experienced Technicians", icon: <FiCheck size={15} color="var(--text-dark)" strokeWidth={3.2} /> },
              { label: "Long-term prevention & monitoring", icon: <FiCheck size={15} color="var(--text-dark)" strokeWidth={3.2} /> },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 0,
                  background: "#fff",
                  borderRadius: 20,
                  boxShadow: "0 2px 8px rgba(168,230,61,0.07)",
                  padding: "6px 18px 6px 8px",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "var(--green-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(168,230,61,0.16)",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--text-dark)",
                    fontFamily: "'Plus Jakarta Sans'",
                    letterSpacing: "-.01em"
                  }}
                >
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginTop: 36,
              marginBottom: 38,
              maxWidth: 540,
            }}
          >
            {[
              {
                num: "01",
                title: "Inspection",
                desc: "We meticulously identify pest activity, high-risk areas, and possible entry points.",
                icon: <FiSearch size={18} color="var(--green-accent)" />,
                shadow: "rgba(168,230,61,0.12)",
              },
              {
                num: "02",
                title: "Treatment Plan",
                desc: "A custom solution is designed for your pest challenge with full transparency.",
                icon: <FiClipboard size={18} color="#5cba00" />,
                shadow: "rgba(97,219,51,0.16)",
              },
              {
                num: "03",
                title: "Treatment",
                desc: "We apply eco-friendly, approved chemicals and deliver results with minimal disruption.",
                icon: <FiZap size={18} color="#569800" />,
                shadow: "rgba(89,166,37,0.12)",
              },
              {
                num: "04",
                title: "Follow-up",
                desc: "Enjoy free re-inspection within 15 days to ensure your satisfaction.",
                icon: <FiRefreshCw size={18} color="#b2d600" />,
                shadow: "rgba(179,209,51,0.12)",
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  background: "#fcfcfc",
                  borderRadius: 16,
                  padding: "24px 18px",
                  boxShadow: `0 4px 12px ${step.shadow}`,
                  border: "1.5px solid var(--border)",
                  transition: "border 0.21s, box-shadow 0.21s",
                  minHeight: 160,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "linear-gradient(130deg, var(--green-accent) 60%, #e5ffb0 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    color: "var(--text-dark)",
                    marginBottom: 10,
                    fontSize: 15,
                    border: "3px solid #ecfae2",
                    boxShadow: "0 2px 8px 0 rgba(168,230,61,0.13)",
                  }}
                >
                  {step.icon}
                  <span style={{ position: "absolute", left: -9999 }}>{step.num}</span>
                </div>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--text-dark)",
                    marginBottom: 2,
                    fontFamily: "'Plus Jakarta Sans'",
                    letterSpacing: "-0.01em"
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--text-muted)",
                    fontWeight: 500,
                    marginTop: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <ReviewBar />
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ position: "relative", justifySelf: "end" }}
        >
          <div
            style={{
              borderRadius: 22,
              overflow: "hidden",
              aspectRatio: "3/4",
              boxShadow: "0 16px 52px rgba(168,230,61,0.13)",
              border: "2px solid #e8f7e0",
              minWidth: 310,
            }}
          >
            <img
              src="/Images/img17.jpeg"
              alt="A Jetkill pest control technician at work"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          {/* Floating rating card */}
          <div
            style={{
              position: "absolute",
              bottom: 26,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#fff",
              borderRadius: 18,
              padding: "22px 28px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
              minWidth: 230,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #f0f0f0",
            }}
          >
            <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} size={17} color="#A8E63D" fill="#A8E63D" />
              ))}
            </div>
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                fontSize: 26,
                color: "var(--text-dark)",
                margin: "0 0 8px 0",
                letterSpacing: "-0.01em",
              }}
            >
              4.9/5
            </p>
            <div style={{ width: 90 }}>
              <ReviewBar />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesPage({ setPage }) {
  return (
    <div>
      <PageHero title="Our services" breadcrumb="Services" />
      <ServicesGrid />
      <PestProtection />
      <PestProcess />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CONTACT PAGE
// ══════════════════════════════════════════════════════════════════════════════

function ContactCards() {
  const cards = [
    {
      label: "Contact Us!",
      value: "+91-88028 30115 / 9205576058",
      icon: <FiPhone size={20} />,
      href: "tel:+918802830115",
    },
    {
      label: "E-mail Us!",
      value: "satyajeetkushwaha2017@gmail.com",
      icon: <FiMail size={20} />,
      href: "mailto:satyajeetkushwaha2017@gmail.com",
    },
    {
      label: "Our Location!",
      value: "196A FF, Jeewan Nagar, Opp. Maharani Bagh, Ashram, ND-14",
      icon: <FiMapPin size={20} />,
      href: "#map",
    },
  ];

  return (
    <section style={{ padding: "80px 24px 0", background: "var(--bg-light)" }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: "0 auto", 
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: 24 
      }}>
        {cards.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ 
              textDecoration: "none", 
              display: "block", 
              background: "#fff", 
              borderRadius: 16, 
              overflow: "hidden", 
              border: "2px solid var(--green-accent)",
              boxShadow: "0 2px 14px 0 rgba(0,0,0,0.07)" 
            }}
          >
            <div 
              style={{ 
                padding: "40px 24px 40px 24px", 
                display: "flex", 
                alignItems: "flex-start", 
                gap: 14
              }}
            >
              <div style={{
                width: 44, 
                height: 44, 
                borderRadius: "50%",
                background: "var(--green-accent)", 
                flexShrink: 0,
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "var(--text-dark)",
                border: "2.5px solid #fff",
                boxShadow: "0 2px 6px rgba(168,230,61,0.08)"
              }}>
                {c.icon}
              </div>
              <div
                style={{
                  borderLeft: "3px solid var(--green-accent)",
                  paddingLeft: 12,
                  minHeight: 44,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <p style={{ 
                  fontSize: 12, 
                  color: "var(--text-muted)", 
                  marginBottom: 4, 
                  fontWeight: 500,
                  borderBottom: "1px dashed var(--border)",
                  display: "inline-block",
                  paddingBottom: 2
                }}>
                  {c.label}
                </p>
                <p style={{ 
                  fontWeight: 700, 
                  fontSize: 14, 
                  color: "var(--text-dark)", 
                  lineHeight: 1.4,
                  borderRadius: 6,
                  border: "1px solid var(--border)",
                  padding: "4px 8px",
                  background: "rgba(168,230,61,0.07)"
                }}>
                  {c.value}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ first: "", last: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    width: "100%", padding: "14px 18px",
    background: "var(--bg-light)",
    border: "2px solid rgb(12, 5, 5)",
    borderRadius: 10,
    fontSize: 14,
    color: "var(--text-dark)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    transition: "border 0.2s",
    boxSizing: "border-box",
    outline: "none",
  };

  const buttonStyle = {
    border: "2px solid rgb(12, 5, 5)",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 15,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "var(--green-accent)",
    color: "#0D3318",
    padding: "14px 26px",
    cursor: "pointer",
    boxShadow: "0px 2px 18px 0px rgba(168,230,61,0.10)",
    transition: "background 0.2s, border 0.2s, color 0.2s",
    outline: "none",
  };

  return (
    <section style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
        {/* Image + Hours */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: "relative" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/5" }}>
            <img
              src="/Images/img6.jpeg"
              alt="Contact"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Working hours card */}
          <div style={{
            position: "absolute", bottom: 30, left: 20,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
            borderRadius: 14, padding: "20px 24px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
            border: "1px solid var(--border)",
          }}>
            <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--text-dark)", marginBottom: 12 }}>Working Hours:</h4>
            {[
              "Monday – Saturday: 9:00 AM – 7:00 PM",
              "Sunday: Emergency Services Available",
            ].map((h) => (
              <div key={h} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green-accent)", flexShrink: 0, display: "block" }} />
                <span style={{ fontSize: 13, color: "var(--text-mid)" }}>{h}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <SectionTag label="Contact Us" />
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--text-dark)", lineHeight: 1.2, marginBottom: 16 }}>
            Reach out today for fast, reliable pest solutions
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
            We prioritize your safety and comfort, using modern techniques and eco-friendly methods
            to eliminate pests quickly and prevent future infestations.
          </p>

          <AnimatePresence>
            {sent ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                style={{ background: "#E8F7D0", borderRadius: 12, padding: 28, textAlign: "center", border: "2px solid var(--green-accent)" }}>
                <p style={{ fontWeight: 700, fontSize: 18, color: "var(--green-mid)", marginBottom: 8 }}>✅ Message Sent!</p>
                <p style={{ color: "var(--text-muted)" }}>We'll contact you within 24 hours. For urgent help call +91-88028 30115</p>
              </motion.div>
            ) : (
              <motion.div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <input
                    style={inputStyle}
                    placeholder="First name"
                    value={form.first}
                    onChange={e => setForm({ ...form, first: e.target.value })}
                  />
                  <input
                    style={inputStyle}
                    placeholder="Last name"
                    value={form.last}
                    onChange={e => setForm({ ...form, last: e.target.value })}
                  />
                  <input
                    style={inputStyle}
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                  <input
                    style={inputStyle}
                    placeholder="E-mail Address"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <textarea
                  style={{ ...inputStyle, height: 130, resize: "vertical", display: "block", marginBottom: 24, border: "2px solid rgb(12, 5, 5)" }}
                  placeholder="Write your message...."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
                <button
                  style={buttonStyle}
                  onClick={() => setSent(true)}
                >
                  Send A Message <FiArrowRight size={15} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{ padding: "80px 24px", background: "var(--bg-light)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        {/* Left */}
        <div>
          <SectionTag label="Frequently Asked Questions" />
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 38px)", color: "var(--text-dark)", lineHeight: 1.25, marginBottom: 20 }}>
            Helpful information to guide your pest control decision
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
            Yes, we use eco-friendly and government-approved pest control chemicals that are safe
            for children, pets, and the environment. Our treatments are carefully selected to effectively eliminate pests.
          </p>

          {/* Image with badge */}
          <div style={{ position: "relative", marginTop: 36, borderRadius: 14, overflow: "hidden" }}>
            <img
              src="/Images/img5.jpeg"
              alt=""
              style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", bottom: 16, left: 16,
              background: "rgba(13,51,24,0.85)", backdropFilter: "blur(8px)",
              borderRadius: 10, padding: "12px 18px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              {[...Array(3)].map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/32?img=${20 + i}`} alt=""
                  style={{ width: 32, height: 32, borderRadius: "50%", marginLeft: i > 0 ? -10 : 0, border: "2px solid rgba(255,255,255,0.3)", objectFit: "cover" }} />
              ))}
              <div>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>20k+</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>Homes & Businesses Served</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                borderRadius: 12,
                background: open === i ? "#A8E63D" : "#fff",
                border: `1px solid ${open === i ? "var(--green-accent)" : "var(--border)"}`,
                overflow: "hidden",
                transition: "all 0.25s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%", display: "flex", justifyContent: "space-between",
                  alignItems: "center", padding: "18px 22px",
                  background: "none", border: "none", cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text-dark)", lineHeight: 1.4 }}>
                  {i + 1}. {faq.q}
                </span>
                {open === i ? <FiChevronUp size={18} color="var(--text-dark)" /> : <FiChevronDown size={18} color="var(--text-muted)" />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 22px 18px", fontSize: 14, color: "var(--text-dark)", lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section id="map" style={{ padding: "80px 24px 100px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="Our Location" title="Reach out today for fast, reliable pest solutions" center />
        <div style={{
          borderRadius: 16, overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
          height: 480,
          border: "1px solid var(--border)",
        }}>
          <iframe
            title="Jetkill Location"
            src="https://maps.google.com/maps?q=Jeewan+Nagar,+Ashram,+New+Delhi&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 32, marginTop: 28, flexWrap: "wrap",
        }}>
          {[
            { icon: <FiPhone size={16} />, label: "+91-88028 30115", href: "tel:+918802830115" },
            { icon: <FiPhone size={16} />, label: "011-46051882", href: "tel:01146051882" },
            { icon: <FiMail size={16} />, label: "satyajeetkushwaha2017@gmail.com", href: "mailto:satyajeetkushwaha2017@gmail.com" },
            { icon: <FiMapPin size={16} />, label: "196A FF, Jeewan Nagar, Ashram, ND-14", href: "#" },
          ].map((item) => (
            <a key={item.label} href={item.href} style={{
              display: "flex", alignItems: "center", gap: 8,
              color: "var(--text-mid)", fontSize: 14,
              textDecoration: "none", fontWeight: 500,
              transition: "color 0.2s",
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "#E8F7D0",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--green-mid)",
              }}>
                {item.icon}
              </div>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage({ setPage }) {
  return (
    <div>
      <PageHero title="Contact us" breadcrumb="Contact Us" />
      <ContactCards />
      <ContactForm />
      <FaqSection />
      <MapSection />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// FOOTER
// ══════════════════════════════════════════════════════════════════════════════
function Footer({ setPage }) {
  return (
    <footer style={{ background: "var(--green-dark)", padding: "64px 24px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--green-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MdOutlinePestControl size={22} color="#0D3318" />
              </div>
              <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>Jetkill</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.7 }}>
              Delhi's trusted pest control partner since 2010. Safe, effective, and affordable pest management solutions.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Quick Links</h4>
            {["Home", "About Us", "Services", "Contact Us"].map((l) => (
              <button key={l} onClick={() => setPage(l)} style={{
                display: "block", background: "none", border: "none",
                color: "rgba(255,255,255,0.55)", fontSize: 13,
                cursor: "pointer", padding: "4px 0", fontFamily: "'Plus Jakarta Sans'",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = "var(--green-accent)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
              >
                {l}
              </button>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Services</h4>
            {SERVICES_LIST.map((s) => (
              <p key={s.id} style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 6 }}>{s.title}</p>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Contact</h4>
            {[
              { icon: <FiPhone size={13} />, text: "+91-88028 30115" },
              { icon: <FiPhone size={13} />, text: "9205576058 / 011-46051882" },
              { icon: <FiMail size={13} />, text: "satyajeetkushwaha2017@gmail.com" },
              { icon: <FiMapPin size={13} />, text: "196A FF, Jeewan Nagar, Opp. Maharani Bagh, Ashram, ND-14" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                <span style={{ color: "var(--green-accent)", marginTop: 1, flexShrink: 0 }}>{c.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.5 }}>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>© 2026 Jetkill Pest Control. All rights reserved.</p>
          <a href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textDecoration: "none" }}>Terms & Privacy</a>
        </div>
      </div>
    </footer>
  );
}

// Exporting AboutPage, ServicesPage, ContactPage, Navbar, and Footer as named exports
export { AboutPage, ServicesPage, ContactPage };