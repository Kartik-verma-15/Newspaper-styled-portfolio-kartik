import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const imageUrl =
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="relative w-full min-h-screen bg-[#f8f2e8] overflow-hidden">
      {/* Center Fold */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-black/10" />

      {/* Noise Layer */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,.8) .8px, transparent .8px)",
          backgroundSize: "8px 8px",
        }}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Masthead */}
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="border-y-4 border-black py-6"
        >
          <h1 className="text-center text-5xl md:text-8xl font-black uppercase tracking-wider text-shadow-lg">
            The Kartik Verma Times
          </h1>

          <div className="flex justify-between mt-4 text-xs md:text-sm uppercase tracking-widest">
            <p>• June 2026 Edition</p>
            <p>• Frontend Developer</p>
            <p>• Delhi, India</p>
          </div>
        </motion.header>

        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-12 mt-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="uppercase tracking-[0.4em] text-sm mb-4">
              Breaking News
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none mb-6">
              Developer Creates
              <br />
              Immersive Web
              <br />
              Experiences
            </h2>

            <p className="text-lg leading-8 text-neutral-700 max-w-xl">
              Kartik Verma continues exploring modern frontend
              technologies, crafting memorable digital experiences
              through motion design, creative layouts, and
              interactive storytelling.
            </p>

            <div className="mt-8 border-l-4 border-black pl-4 italic">
              By Kartik Verma • Editor & Developer
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative overflow-hidden rounded-xl cursor-none"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
          >
            {/* Grayscale Base */}
            <img
              src={imageUrl}
              alt="Sneaker"
              className="h-[650px] w-full object-cover grayscale"
            />

            {/* Color Reveal */}
            <img
              src={imageUrl}
              alt="Sneaker"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                clipPath: hovered
                  ? `circle(90px at ${mousePos.x}px ${mousePos.y}px)`
                  : `circle(0px at ${mousePos.x}px ${mousePos.y}px)`,
                transition: "clip-path 80ms linear",
              }}
            />

            {/* Crystal Lens */}
            <motion.div
              animate={{
                x: mousePos.x - 80,
                y: mousePos.y - 80,
                opacity: hovered ? 1 : 0,
                scale: hovered ? 1 : 0.8,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className="
                absolute
                top-0
                left-0
                h-40
                w-40
                rounded-full
                pointer-events-none
                border
                border-white/60
                backdrop-blur-md
                bg-white/10
                shadow-[0_0_40px_rgba(255,255,255,.45)]
              "
            />

            {/* Reflection */}
            <motion.div
              animate={{
                x: mousePos.x - 55,
                y: mousePos.y - 55,
                opacity: hovered ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
              className="
                absolute
                top-0
                left-0
                w-8
                h-8
                rounded-full
                bg-white/70
                blur-sm
                pointer-events-none
              "
            />

            {/* Hint */}
            <motion.div
              animate={{
                opacity: hovered ? 0 : 1,
              }}
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                bg-black/75
                text-white
                text-xs
                px-4
                py-2
                rounded-full
                backdrop-blur-sm
              "
            >
              Move cursor to reveal color
            </motion.div>
          </motion.div>
        </section>

        {/* Bottom News */}
        <section className="grid md:grid-cols-3 gap-8 mt-20 border-t border-black/20 pt-10">
          <motion.article
            whileHover={{ y: -6 }}
            className="cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-3">
              Latest Projects
            </h3>

            <p className="leading-7 text-neutral-700">
              Building immersive interfaces with React,
              Tailwind CSS, Framer Motion and modern
              frontend architecture.
            </p>
          </motion.article>

          <motion.article
            whileHover={{ y: -6 }}
            className="cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-3">
              Design Philosophy
            </h3>

            <p className="leading-7 text-neutral-700">
              Blending storytelling, typography and
              interaction design to create memorable
              user experiences.
            </p>
          </motion.article>

          <motion.article
            whileHover={{ y: -6 }}
            className="cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-3">
              Upcoming Work
            </h3>

            <p className="leading-7 text-neutral-700">
              Experimenting with newspaper layouts,
              Lenis smooth scrolling, creative motion,
              and editorial-style web experiences.
            </p>
          </motion.article>
        </section>
      </main>
    </div>
  );
}