"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoMenuOutline, IoClose } from "react-icons/io5";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Prevent hydration error

  useEffect(() => {
    setIsClient(true); // Ensure component is only rendered on client
  }, []);

  if (!isClient) return null; // Prevent rendering until client-side

  return (
    <nav className="bg-transparent px-6 py-4">
      <div className="flex items-center justify-between relative md:hidden">
        {/* Left: Sidebar Toggle for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none"
        >
          {isOpen ? <IoClose size={28} /> : <IoMenuOutline size={28} />}
        </button>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="absolute left-0 top-16 bg-transparent w-60 h-screen p-5 flex flex-col space-y-4 sm:hidden">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        )}

        {/* Middle: Logo */}
        <div className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/toola_logo.png"
            width={100}
            height={100}
            alt="Toola Logo"
          />
        </div>

        {/* Right: Login & See Demo */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold">
            Login
          </button>
          <button className="hidden md:block px-4 py-2 bg-white text-[#662ab2] rounded-lg font-semibold">
            See Demo
          </button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex md:items-center justify-between">
        {/* Middle: Logo */}
        <div className="text-2xl font-bold">
          <Image
            src="/toola_logo.png"
            width={100}
            height={100}
            alt="Toola Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Right: Login & See Demo */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-white text-[#662ab2] rounded-lg font-semibold">
            Login
          </button>
          <button className="px-4 py-2 bg-white text-[#662ab2] rounded-lg font-semibold">
            See Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
