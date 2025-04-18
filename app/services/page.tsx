// app/services/page.tsx
import {
  CodeIcon,
  PaletteIcon,
  SearchIcon,
  SmartphoneIcon,
  BarChart2Icon,
  ZapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      icon: <CodeIcon className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Custom, high-performance websites built with modern frameworks like Next.js and Tailwind CSS.",
      highlights: [
        "100% mobile-responsive",
        "SEO-optimized architecture",
        "Ongoing maintenance",
      ],
    },
    {
      icon: <PaletteIcon className="h-8 w-8" />,
      title: "Brand Design",
      description:
        "Complete visual identity packages that make your brand unforgettable.",
      highlights: [
        "Logo & color palette",
        "Typography systems",
        "Brand style guides",
      ],
    },
    {
      icon: <SearchIcon className="h-8 w-8" />,
      title: "SEO Optimization",
      description:
        "Data-driven strategies to dominate search rankings and attract quality leads.",
      highlights: ["Keyword research", "Technical audits", "Content strategy"],
    },
    {
      icon: <SmartphoneIcon className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Engaging cross-platform applications with flawless UX.",
      highlights: [
        "iOS & Android",
        "React Native development",
        "App store optimization",
      ],
    },
    {
      icon: <BarChart2Icon className="h-8 w-8" />,
      title: "Analytics",
      description: "Actionable insights to refine your digital strategy.",
      highlights: [
        "Custom dashboards",
        "Conversion tracking",
        "ROI measurement",
      ],
    },
    {
      icon: <ZapIcon className="h-8 w-8" />,
      title: "Speed Optimization",
      description: "Lightning-fast load times that reduce bounce rates.",
      highlights: [
        "Performance audits",
        "Image optimization",
        "CDN integration",
      ],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-500 dark:text-indigo-400 mr-2">
                        ✓
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 text-lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 px-8 py-4 text-lg"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
