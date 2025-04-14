"use client";
import { useEffect, useState } from "react";

export default function Hearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 30 + 10,
          duration: Math.random() * 5 + 3,
        },
      ]);
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.slice(1));
      }, 8000);
    };

    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-red-500"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `floatUp ${heart.duration}s linear infinite`,
          }}
        >
          ❤️
        </div>
      ))}
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(100vh) scale(1); opacity: 1; }
            100% { transform: translateY(-10vh) scale(0.5); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
