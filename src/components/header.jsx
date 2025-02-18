"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Prevent hydration error

  useEffect(() => {
    setIsClient(true); // Ensure component is only rendered on client
  }, []);

  if (!isClient) return null; // Prevent rendering until client-side

  return (
    <div className=" text-white relative">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <Image
            src="/toola_logo.png"
            width={100}
            height={100}
            alt="Toola Logo"
          />
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
        </div>
        <div className="space-x-4">
          <Button variant="ghost" className="text-white">
            Log in
          </Button>
          <Button className="bg-white text-purple-700">See Demo</Button>
        </div>
      </nav>
    </div>
  );
}
