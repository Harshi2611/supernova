"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../components/ui/button";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "COURSES", href: "/courses" },
  // { label: "RESULTS", href: "/results" },
  // { label: "CLUB", href: "/club" },
  // { label: "CAREER", href: "/career" },
  { label: "RESOURCES", href: "/resources" },
  { label: "ABOUT US", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white border-b shadow-sm fixed top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/supernova.png"
            alt="SuperNova Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-semibold text-sm tracking-wide transition ${
                    isActive
                      ? "text-[#00457D] border-b-2 border-[#00457D] pb-1"
                      : "text-gray-600 hover:text-[#00457D]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="py-5 px-6 bg-[#00457D] uppercase font-semibold text-base rounded-md">
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-primary"
              >
                {link.label}
              </Link>
            ))}

            <Button className="py-5">Enroll Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
