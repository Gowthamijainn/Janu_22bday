import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-red-500 text-white p-4 fixed top-0 w-full shadow-lg">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link href="/" className="hover:text-yellow-300">Home</Link>
        <Link href="/images" className="hover:text-yellow-300">Images</Link>
        <Link href="/love-letter" className="hover:text-yellow-300">Love Letter</Link>
        <Link href="/music" className="hover:text-yellow-300">Music</Link>
        <Link href="/add-message" className="hover:text-yellow-300">Add Message</Link>
      </div>
    </nav>
  );
}
