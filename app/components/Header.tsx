"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <motion.header
      className="relative flex flex-col items-center justify-center h-[500px] rounded overflow-hidden text-center"
      animate={{
        y: [0, -20, -40, 2 - 0, 0, 30, 50, 30, 0], // wave pattern
        rotate: [0, 1, 0, -1, 0], // slight tilt
      }}
      transition={{
        duration: 8, // slower = smoother
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <Image
        src="/assets/bg-clouds.png"
        alt="floating background"
        fill
        className="object-cover opacity-70"
      />
      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4 z-10">
        Explore the World 🌍
      </h1>
      <p className="text-gray-600 text-lg z-10">
        Book hotels, flights & tours easily
      </p>

      {/* Floating Images */}
      <motion.div
        className="absolute top-10 left-1/4"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/plane.png"
          alt="plane"
          width={80}
          height={80}
          className="opacity-80 drop-shadow-lg"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-1/4"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/palm-tree.png"
          alt="palm"
          width={100}
          height={100}
          className="opacity-80 drop-shadow-lg"
        />
      </motion.div>

      <motion.div
        className="absolute top-20 right-10"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/suitcase.png"
          alt="suitcase"
          width={90}
          height={90}
          className="opacity-90 drop-shadow-xl"
        />
      </motion.div>
    </motion.header>
  );
};

export default Header;
