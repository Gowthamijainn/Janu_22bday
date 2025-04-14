import Navbar from "../../app/components/Navbar";
import Hearts from "../../app/components/Hearts";

export default function Music() {
  return (
    <div className="relative bg-pink-100 min-h-screen text-red-500 text-center flex flex-col items-center justify-center">
      <Hearts />
      <Navbar />
      <div className="p-8 z-10">
        <h1 className="text-4xl font-bold">Love Songs 🎶</h1>
        <audio controls className="mt-6">
          <source src="/romantic-music.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}
