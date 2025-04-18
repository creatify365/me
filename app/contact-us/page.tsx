// app/contact/page.tsx
import {
  MessageCircle,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  SendIcon,
  ClockIcon,
  TwitterIcon,
  Linkedin,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main>
      {/* ... Hero section ... */}

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-600">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Have questions or ready to start your project? Reach out through
                any channel below.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <MailIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:creatify365@gmail.com"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    creatify365@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    +256759311117
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Office
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Kampala, Uganda
                    <br />
                    EA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instant Contact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Quick Connect</h2>

            <Button
              asChild
              size="lg"
              className="w-full gap-2 bg-green-600 hover:bg-green-700"
            >
              <a href="https://wa.me/256759311117" target="_blank">
                <MessageCircle className="h-5 w-5" /> WhatsApp Chat
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full gap-2"
            >
              <a href="tel:+1234567890">
                <PhoneIcon className="h-5 w-5" /> +1 (234) 567-890
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full gap-2"
            >
              <a href="mailto:hello@example.com">
                <MailIcon className="h-5 w-5" /> hello@example.com
              </a>
            </Button>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: <TwitterIcon className="h-5 w-5" />,
                    label: "Twitter",
                  },
                  {
                    icon: <Linkedin className="h-5 w-5" />,
                    label: "LinkedIn",
                  },
                  {
                    icon: <InstagramIcon className="h-5 w-5" />,
                    label: "Instagram",
                  },
                  {
                    icon: <GithubIcon className="h-5 w-5" />,
                    label: "GitHub",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
