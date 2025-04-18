import {
  RocketIcon,
  PaletteIcon,
  SearchIcon,
  LucideArrowRight,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
export default function Features() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          We combine innovative solutions with proven strategies to deliver
          exceptional results for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Web Design Card */}
        <Card className="group p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-2">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-indigo-50 dark:bg-indigo-900/50 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/70 transition-colors">
            <RocketIcon className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            Web Design
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Modern, responsive websites tailored to your brand with cutting-edge
            design and seamless user experiences.
          </p>
          <div className="mt-6">
            <Button
              variant="link"
              className="px-0 text-indigo-600 dark:text-indigo-400 hover:no-underline group-hover:underline"
            >
              Learn more{" "}
              <LucideArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Card>

        {/* Branding Card */}
        <Card className="group p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-2">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-purple-50 dark:bg-purple-900/50 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/70 transition-colors">
            <PaletteIcon className="h-7 w-7 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            Branding
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Create a memorable brand identity that resonates with your audience
            and stands out in the market.
          </p>
          <div className="mt-6">
            <Button
              variant="link"
              className="px-0 text-purple-600 dark:text-purple-400 hover:no-underline group-hover:underline"
            >
              Learn more{" "}
              <LucideArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Card>

        {/* SEO Card */}
        <Card className="group p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-2">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-pink-50 dark:bg-pink-900/50 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/70 transition-colors">
            <SearchIcon className="h-7 w-7 text-pink-600 dark:text-pink-400" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            SEO
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Data-driven strategies to boost your visibility and drive qualified
            traffic to your business.
          </p>
          <div className="mt-6">
            <Button
              variant="link"
              className="px-0 text-pink-600 dark:text-pink-400 hover:no-underline group-hover:underline"
            >
              Learn more{" "}
              <LucideArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
