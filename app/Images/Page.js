"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hearts from "../components/Hearts";

export default function LoveLetter() {
  return (
    <div className="relative bg-pink-100 min-h-screen text-red-500 text-center flex flex-col items-center justify-center overflow-hidden">
      <Hearts />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-8 z-10"
      >
        <h1 className="text-4xl font-bold mb-4">My Love Letter 💌</h1>
        <p className="mt-6 text-lg italic max-w-2xl">
          My dearest <span className="font-semibold text-red-600">love</span>,  
          <br /><br />
          Every moment with you is a <span className="font-semibold">beautiful dream come true</span>.  
          You light up my world and fill my heart with joy.  
          <br /><br />
          I promise to <span className="underline decoration-pink-400">cherish and love you</span> forever. 💖  
        </p>
      </motion.div>
    </div>
  );
}
