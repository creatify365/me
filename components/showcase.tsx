import { RocketIcon, PaletteIcon, LucideArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
export default function ShowCase() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-3">
            Our Work Samples
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See What We Can Create
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Web Design Placeholder */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Web design concept"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-white text-xl font-bold mb-1">
                  E-Commerce Site
                </h3>
                <p className="text-gray-200 text-sm">
                  Modern online store design
                </p>
                <Button variant={"outline"} size="sm" className="mt-3">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* Branding Placeholder */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
            <img
              src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Branding concept"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-white text-xl font-bold mb-1">
                  Brand Identity
                </h3>
                <p className="text-gray-200 text-sm">
                  Corporate branding package
                </p>
                <Button variant="outline" size="sm" className="mt-3">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* SEO Placeholder */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
            <img
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="SEO analytics"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-white text-xl font-bold mb-1">
                  SEO Strategy
                </h3>
                <p className="text-gray-200 text-sm">Traffic growth analysis</p>
                <Button variant="outline" size="sm" className="mt-3">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
            See Full Portfolio
            <LucideArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
