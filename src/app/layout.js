import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subset: ["latin"] });

export const metadata = {
  title: "Toola",
  // description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* Header */}
        <div className="w-full h-[100%] bg-[url('/homePage/banner-bg.png')] bg-cover bg-center shadow-lg">
          <Header />
          <main className="min-h-screen">{children}</main>
        </div>
        {/* Footer */}
        {/* <footer className="bg-[#662AB2] py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Develop By Avinash</p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
