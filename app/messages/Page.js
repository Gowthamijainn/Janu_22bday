"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hearts from "../components/Hearts";

export default function Messages() {
  return (
    <div className="relative bg-pink-100 min-h-screen text-red-500 text-center flex flex-col items-center justify-center">
      <Hearts />
      <Navbar />
      <div className="p-8 z-10">
        <h1 className="text-4xl font-bold">Sweet Messages 💕</h1>
        <p className="mt-6 text-lg">
          💖 You are my sunshine on the darkest days. ☀️
        </p>
        <p className="mt-4 text-lg">
          💖 Every moment with you is a blessing. 💑
        </p>
        <p className="mt-4 text-lg">
          💖 I love you more than words can say! 🌹
        </p>
      </div>
    </div>
  );
}
