"use client";
import { AlignRight, LucideArrowRight, X, RocketIcon } from "lucide-react";
import { ModeToggle } from "./toggle-mode";
import { Button } from "./ui/button";
import { useRef } from "react";
import {
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";
export default function NavBar() {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <RocketIcon className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-indigo-600">
              Creatify365
            </span>
          </div>
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">What We Do</a>
            </li>
            {/* <li>
              <a href="#about">What we do</a>
            </li> */}
            <li>
              <a href="/contact-us">Contacts </a>
            </li>
          </ul>
          <div
            className="flex items-center gap-4
        "
          >
            <ModeToggle />

            <Button
              onClick={openMenu}
              className="block md:hidden ml-3"
              size={"lg"}
              variant={"outline"}
            >
              <AlignRight className="size-6" />
            </Button>
          </div>
          {/* Mobile menu */}
          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-6 py-20 px-8 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/30 dark:border-gray-700/30 duration-500 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={closeMenu}
              className="absolute right-6 top-6 p-1 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <X className="size-6 text-gray-800 dark:text-gray-300" />
            </button>

            {/* Navigation links */}
            <li>
              <a
                href="/about"
                onClick={closeMenu}
                className="block py-3 text-gray-800 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                About
              </a>
            </li>
            {/* <li>
              <a
                href="/services"
                onClick={closeMenu}
                className="block py-3 text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
              >
                Services
              </a>
            </li> */}
            <li>
              <a
                href="/services"
                onClick={closeMenu}
                className="block py-3 text-gray-800 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
              >
                What We Do
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                onClick={closeMenu}
                className="block py-3 text-gray-800 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                Contacts
              </a>
            </li>

            {/* CTA Button */}
            <div className="mt-4 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <Button
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                onClick={closeMenu}
              >
                Get Started <LucideArrowRight className="size-4" />
              </Button>
            </div>

            {/* Social Icons - Added to bottom */}
            <div className="mt-auto pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                Connect With Us
              </h4>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-100/70 dark:bg-gray-800/70 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30 transition-colors"
                >
                  <TwitterIcon className="size-5 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-100/70 dark:bg-gray-800/70 hover:bg-blue-100/50 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <LinkedinIcon className="size-5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-100/70 dark:bg-gray-800/70 hover:bg-pink-100/50 dark:hover:bg-pink-900/30 transition-colors"
                >
                  <InstagramIcon className="size-3 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400" />
                </a>
              </div>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
