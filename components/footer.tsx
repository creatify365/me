import {
  RocketIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <RocketIcon className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold">Creatify365</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming ideas into digital excellence with modern solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-500/20 transition-colors group"
              >
                <TwitterIcon className="h-5 w-5 text-gray-300 group-hover:text-indigo-400 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-500/20 transition-colors group"
              >
                <LinkedinIcon className="h-5 w-5 text-gray-300 group-hover:text-indigo-400 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-pink-500/20 transition-colors group"
              >
                <InstagramIcon className="h-5 w-5 text-gray-300 group-hover:text-pink-400 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-purple-500/20 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-gray-300 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Strategy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BrandName. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-pink-400 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
