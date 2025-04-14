"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hearts from "./components/Hearts";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="relative bg-gradient-to-b from-pink-300 to-red-400 min-h-screen text-white scroll-smooth overflow-hidden">
      <Hearts />
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-8 relative z-10">
        <h1 className="text-6xl font-bold">Happy Birthday My Love 💖</h1>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-white text-red-500 px-6 py-2 rounded-lg font-bold transition-all hover:bg-red-500 hover:text-white"
          onClick={() => setShowMessage(!showMessage)}
        >
          Click Me
        </motion.button>
        {showMessage && (
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-xl"
          >
            I love you so much! You are the world to me kanda! ❤️
          </motion.p>
        )}
      </section>

      {/* Images Section */}
      <section id="images" className="h-screen flex flex-col items-center justify-center p-8 relative z-10">
        <h2 className="text-4xl font-bold">Cute Love GIFs & Memories 🧸💕</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <Image src="/Images/hugging.gif" alt="Caring Teddy" width={160} height={160} className="rounded-lg shadow-lg" />
            <p className="text-lg">A warm hug that says everything! 🤗💕</p>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/Images/kissing.gif" alt="Hugging Teddy" width={160} height={160} className="rounded-lg shadow-lg" />
            <p className="text-lg">Sweet kisses to brighten the day! 😘💖</p>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/Images/caring.gif" alt="Kissing Teddy" width={160} height={160} className="rounded-lg shadow-lg" />
            <p className="text-lg">Always caring for you, my love! 💞</p>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/Images/Love.gif" alt="Balloon Teddy" width={160} height={160} className="rounded-lg shadow-lg" />
            <p className="text-lg">Love that lifts us higher! 🎈❤️</p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
            <div className="flex items-center gap-4">
              <Image src="/Images/janu2.jpg" alt="Janu 2" width={160} height={160} className="rounded-lg shadow-lg" />
            </div>
            <div className="flex items-center gap-4">
              <Image src="/Images/janu1.jpg" alt="Janu 1" width={160} height={160} className="rounded-lg shadow-lg" />
            </div>
            <div className="flex items-center gap-4">
              <Image src="/Images/janu3.jpg" alt="Janu 3" width={160} height={160} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <p className="text-lg mt-4">
          My love for you grows every day, just like the stars in the sky. You are my everything, and I promise to love you forever! 💕 In my happiest moments, your presence makes them even brighter. The way you hold my hand, the way you listen with your heart, and the way you stand beside me through everything—these are the things I cherish most. 
          You are my safe place, my home, my forever. No matter what life brings, I know with you, everything will always be okay. 
          Thank you for being my love, my best friend, and my greatest blessing.
        </p>
      </section>
      
      {/* Love Letter Section */}
      <section id="love-letter" className="h-screen flex flex-col items-center justify-center p-8 relative z-10">
        <h2 className="text-4xl font-bold">Love Letter 💌</h2>
        <p className="mt-4 text-xl max-w-4xl text-center">
          My Dearest Janu,
          <br /><br />
          From the moment you walked into my life, everything changed. The world became brighter, my heart felt lighter, and every day turned into a beautiful dream. You are my sunshine on the cloudiest days, my guiding star in the darkest nights, and the reason behind my every smile.
          <br /><br />
          Words will never be enough to express how much I love you, but today, I will try.
          <br /><br />
          Janu, you are my home. No matter where I am, as long as I have you, I am at peace. Your laughter is the sweetest melody, the song I want to hear for the rest of my life. Your eyes hold galaxies of love, and every time I look into them, I see my entire world.
          <br /><br />
          Every moment with you is a treasure. Whether it&apos;s the way you hold my hand, the way you whisper my name, or the way you look at me with so much love, I cherish it all. You make even the simplest moments feel magical. A walk in the park, a quiet conversation, a shared cup of coffee—everything becomes extraordinary when you&apos;re by my side.
          <br /><br />
          I love the way you care for me, the way you understand my silence, and the way you make me laugh even on my worst days. You have a heart so pure, a soul so beautiful, and a love so deep that I often wonder what I did to deserve you.
          <br /><br />
          You are my strength when I feel weak, my hope when I feel lost, and my greatest joy in this life. I promise to stand by you in every storm, to be your biggest supporter, your most loyal friend, and your forever love.
          <br /><br />
          No matter how many years pass, my love for you will only grow stronger. Through every sunrise and every sunset, through every challenge and every victory, my heart will always belong to you.
          <br /><br />
          Janu, you are not just my love; you are my forever. I love you more than words can say, more than the stars in the sky, and more than life itself.
          <br /><br />
          Forever yours, <br />
          Gowthami 💕
        </p>
      </section>

      {/* Music Section */}
      <section id="music" className="h-screen flex flex-col items-center justify-center p-8 relative z-10">
        <h2 className="text-4xl font-bold">Our Love Song 🎶</h2>
        <audio controls className="mt-6">
          <source src="/music/meri-good-mrng1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio controls className="mt-6">
          <source src="/music/tera_ban_jauga.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio controls className="mt-6">
          <source src="/music/jeene_laga_hoon_love.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio controls className="mt-6">
          <source src="/music/sajni_re.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </section>
    </div>
  );
}
