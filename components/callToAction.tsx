import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <>
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
              <Button
                size={"lg"}
                className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 text-lg"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size={"lg"}
                className="border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 px-8 py-4 text-lg"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
