"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function homePage() {
  return (
    <div className="min-h-screen text-white relative">
      <div className="flex">
        <div className="text-center max-w-4xl mx-auto py-20">
          <div className="bg-white text-purple-700 rounded-full px-4 py-1 inline-block mb-4">
            Welcome to modern finance
          </div>
          <h2 className="text-4xl font-bold leading-tight">
            Effortless Accounting, Tax & Payroll <br />
            For Startups & Ecommerce Founders
          </h2>
          <p className="text-lg text-gray-200 mt-4">
            Software + Services that help you grow faster with 100% compliance
          </p>
          <Button className="mt-6 bg-white text-purple-700 px-6 py-3 font-semibold">
            See Demo
          </Button>
        </div>
        <div>
          <Image
            src="/homePage/banner-img.png"
            alt="Banner Background"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <div
        className="bg-[#FFFFFF] min-h-screen text-white relative"
        style={{
          clipPath: "ellipse(90% 50% at 50% 95%)",
        }}
      >
        <h1 className="text-red-600">Trusted by businesses that operate on</h1>
      </div>
    </div>
  );
}
