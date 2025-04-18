import { Button } from "./ui/button";
import { RocketIcon } from "lucide-react";
export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-20">
        <section className="flex flex-col items-center justify-center text-center">
          {/* Image added here - adjust sizing as needed */}

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
            Elevate Your Brand with Modern Solutions
          </h1>
          <p className="text-lg mb-8 text-white/90 max-w-2xl">
            We specialize in web design, branding, and SEO to help your business
            thrive in the digital landscape.
          </p>
          <Button
            size="lg"
            className="bg-indigo-600  text-white hover:bg-indigo-500  hover:scale-105 transition-transform duration-200 font-medium shadow-lg px-8 py-6 text-lg"
          >
            Get Started <RocketIcon className="ml-2 size-4" />
          </Button>
        </section>
      </div>
    </div>
  );
}
