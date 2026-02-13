"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the image
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Counters animation
  const [mealsCount, setMealsCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  useEffect(() => {
    const mealsInterval = setInterval(() => {
      setMealsCount((prev) => (prev < 12500 ? prev + 125 : 12500));
    }, 15);
    const membersInterval = setInterval(() => {
      setMembersCount((prev) => (prev < 2800 ? prev + 28 : 2800));
    }, 20);
    return () => {
      clearInterval(mealsInterval);
      clearInterval(membersInterval);
    };
  }, []);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.2, 0.99] as const },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative p-4 min-h-screen  flex items-center bg-[#5B544D] text-[#F5F3EE] overflow-hidden"
    >
      {/* ===== DYNAMIC BACKGROUND BLOBS ===== */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-125 h-125 bg-[#A3AD5F]/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -left-20 w-150 h-150 bg-[#A3AD5F]/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#A3AD5F]/10 rounded-full blur-[150px]"
        />
      </motion.div>

      {/* ===== MAIN GRID ===== */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Staggered Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight"
          >
            <span className="block">Eat Healthy.</span>
            <span className="block text-[#A3AD5F] mt-2">Live Better.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-[#E8E5DF] max-w-xl leading-relaxed"
          >
            Green Bean is Kampala’s structured healthy kitchen offering balanced
            meal plans, weight loss programs, and performance nutrition designed
            for real results.
          </motion.p>

          {/* CTA Buttons with Scale on Hover/Click */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/meal-plans"
              className="group relative bg-[#A3AD5F] text-[#2E2A26] px-8 py-3 rounded-full text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10">Explore Meal Plans</span>
              <motion.span
                className="absolute inset-0 bg-white/30"
                initial={{ scale: 0, x: "100%" }}
                whileHover={{ scale: 2, x: 0 }}
                transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
              />
            </Link>

            <Link
              href="/programs"
              className="border border-[#A3AD5F] px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#A3AD5F] hover:text-[#2E2A26] hover:shadow-lg"
            >
              Start a Weight Loss Plan
            </Link>
          </motion.div>

          {/* Animated Trust Banner */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#CFCBC4]"
          >
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#A3AD5F]"
              >
                ●
              </motion.span>
              Structured Macro Plans
            </span>
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                className="text-[#A3AD5F]"
              >
                ●
              </motion.span>
              Weekly Delivery
            </span>
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                className="text-[#A3AD5F]"
              >
                ●
              </motion.span>
              Nutrition Coaching
            </span>
          </motion.div>

          {/* Limited Offer Badge (visible after delay) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-8 inline-block bg-[#2E2A26]/80 text-[#F5F3EE] px-4 py-2 rounded-full text-xs font-medium border border-[#A3AD5F]/50"
          >
            ✦ Limited time: Free nutrition coaching with annual plan ✦
          </motion.div>
        </motion.div>

        {/* ===== RIGHT COLUMN – IMAGE + STAT CARD ===== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden md:block"
        >
          {/* Parallax image container */}
          <motion.div
            style={{ y: imageY }}
            className="relative w-full h-137.5 lg:h-150 rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero-meal.jpg"
              alt="Healthy Meal Plan"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Subtle overlay gradient for depth */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#5B544D]/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Stat Card */}
        

          {/* Rotating food illustration (decorative) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-[#A3AD5F]/30 rounded-full backdrop-blur-md flex items-center justify-center"
          >
            <span className="text-3xl">🥗</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#CFCBC4]"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-[#CFCBC4]/60 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-[#CFCBC4]/80 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
