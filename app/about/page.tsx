// app/about/page.tsx
import { RocketIcon, MessageCircleIcon, CpuIcon, ClockIcon, LightbulbIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Delivering exceptional digital experiences through innovation and passion.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                Why We Exist
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We transform businesses through cutting-edge design and technology.
                Our mission is to create solutions that captivate audiences and
                drive measurable results.
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Our Process
              </Button>
            </div>
            <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-2xl aspect-video flex items-center justify-center">
              <LightbulbIcon className="h-16 w-16 text-indigo-400 dark:text-indigo-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            Our Commitment
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Quality Focus */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                <RocketIcon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold mb-1">100%</p>
              <p className="text-gray-600 dark:text-gray-400">Quality Focus</p>
            </div>

            {/* Client Support */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                <MessageCircleIcon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold mb-1">24/7</p>
              <p className="text-gray-600 dark:text-gray-400">Support</p>
            </div>

            {/* Technology */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400">
                <CpuIcon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold mb-1">Modern</p>
              <p className="text-gray-600 dark:text-gray-400">Tech Stack</p>
            </div>

            {/* Delivery */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                <ClockIcon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold mb-1">On-Time</p>
              <p className="text-gray-600 dark:text-gray-400">Delivery</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
