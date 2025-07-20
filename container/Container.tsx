import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function Container({ children }: ChildrenProps) {
  return (
    <div className="flex items-center justify-between min-h-screen  text-white flex-col max-w-5xl border-r-4 border-l-4 border-blue-500 mx-auto">
      <header className="bg-green-500 w-full">
        <Navbar />
      </header>
      <main className="flex-1 bg-red-500 w-full flex items-center justify-center">
        {children}
      </main>
      <footer className="bg-yellow-500 w-full">
        <Footer />
      </footer>
    </div>
  );
}
