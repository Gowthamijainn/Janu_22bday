import Navbar from "../components/Navbar";
import Hearts from "../components/Hearts";

export default function LoveLetter() {
  return (
    <div className="relative bg-pink-100 min-h-screen text-red-500 text-center flex flex-col items-center justify-center">
      <Hearts />
      <Navbar />
      <div className="p-8 z-10">
        <h1 className="text-4xl font-bold">My Love Letter 💌</h1>
        <p className="mt-6 text-lg italic max-w-2xl">
          My dearest love,&nbsp;
          Every moment with you is a beautiful dream come true. You light up my world and fill my heart with joy.&nbsp;
          I promise to cherish and love you forever. 💖
        </p>
      </div>
    </div>
  );
}
