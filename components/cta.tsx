import { Button } from "./ui/button";
import { LucideArrowRight } from "lucide-react";
export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
            Ready to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-400">
              Transform
            </span>{" "}
            Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Let’s craft something extraordinary together. Reach out today for a
            free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant={"outline"}
              size="lg"
              className="text-indigo-600 hover:scale-105 transition-all duration-300 font-medium shadow-lg px-8 py-6 text-lg"
            >
              Contact Us <LucideArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="border-2 hover:scale-105 transition-all duration-300 font-medium px-8 py-6 text-lg"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
