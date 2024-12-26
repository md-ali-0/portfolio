"use client";
import { Button } from "@/components/ui/button";
import config from "@/config";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { toast } from "sonner";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!form.current) return;

      setIsSending(true);
      emailjs
          .sendForm(
              config.email_js_service as string,
              config.email_js_template as string,
              form.current,
              config.email_js_publick_key
          )
          .then(
              () => {
                  form.current?.reset();
                  toast.success("Message sent successfully");
                  setIsSending(false);
              },
              () => {
                  toast.error("Failed to send message");
                  setIsSending(false);
              }
          );
  };

  return (
      <main className="container mx-auto px-4 py-12">
          <section className="bg-[#1C1E20] rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12">
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>
                  <div className="p-6 mr-2 sm:rounded-lg">
                      <h6
                          className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
                          data-backdrop-text="Contact Me"
                      >
                          Contact Me
                      </h6>
                      <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">
                          Get in touch
                      </h2>
                      <p className="text-pColor dark:text-white/70">
                          Fill in the form to start a conversation
                      </p>
                      <div className="flex items-center mt-8 text-gray-400">
                          <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                              className="w-5 h-5 text-gray-400"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                          </svg>
                          <div className="ml-4 text-md tracking-wide w-40">
                              Jhenaidah - 7300, Bangladesh
                          </div>
                      </div>
                      <div className="flex items-center mt-4 text-gray-400">
                          <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                              className="w-5 h-5 text-gray-400"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                          </svg>
                          <div className="ml-4 text-md tracking-wide w-40">
                              +880 1916498482
                          </div>
                      </div>
                      <div className="flex items-center mt-2 text-gray-400">
                          <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                              className="w-5 h-5 text-gray-400"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                          </svg>
                          <div className="ml-4 text-md tracking-wide w-40">
                              mohammad.98482@gmail.com
                          </div>
                      </div>
                      <div className="flex mt-8">
                          {/* Social media links */}
                          <Link href="https://www.facebook.com/md.ali.oo" target="_blank" className="mr-4 text-gray-400 hover:text-gray-600">
                              <FaFacebook size={24} />
                          </Link>
                          <Link href="https://twitter.com/Mohammad_7060" target="_blank" className="mr-4 text-gray-400 hover:text-gray-600">
                              <FaTwitter size={24} />
                          </Link>
                          <Link href="https://www.linkedin.com/in/md-ali77" target="_blank" className="mr-4 text-gray-400 hover:text-gray-600">
                              <FaLinkedin size={24} />
                          </Link>
                          <Link href="https://github.com/md-ali-0" target="_blank" className="mr-4 text-gray-400 hover:text-gray-600">
                              <FaGithub size={24} />
                          </Link>
                      </div>
                  </div>
                  <form
                      ref={form}
                      className="p-6 flex flex-col justify-center"
                      onSubmit={sendEmail}
                  >
                      <div className="flex flex-col">
                          <input
                              type="text"
                              id="user_name"
                              name="user_name"
                              required
                              className="w-full bg-[rgba(255,255,255,.05)] rounded border border-gray-700/60 text-sm outline-none text-gray-300 py-2 px-3.5 resize-none leading-6 transition-colors duration-200 ease-in-out"
                              placeholder="Enter Full Name"
                          />
                      </div>
                      <div className="flex flex-col mt-2">
                          <input
                              type="email"
                              id="user_email"
                              name="user_email"
                              required
                              className="w-full bg-[rgba(255,255,255,.05)] rounded border border-gray-700/60 text-sm outline-none text-gray-300 py-2 px-3.5 resize-none leading-6 transition-colors duration-200 ease-in-out"
                              placeholder="Enter Email Address"
                          />
                      </div>
                      <div className="flex flex-col mt-2">
                          <textarea
                              id="message"
                              name="message"
                              required
                              className="w-full bg-[rgba(255,255,255,.05)] rounded border border-gray-700/60 h-32 text-sm outline-none text-gray-300 py-2 px-3.5 resize-none leading-6 transition-colors duration-200 ease-in-out"
                              placeholder="Enter Message"
                          />
                      </div>
                      <div className="mt-2">
                          <Button type="submit" disabled={isSending} size={'lg'} className="w-full">
                              {isSending ? "Sending..." : "Send"}
                              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                      </div>
                  </form>
              </motion.div>
          </section>
      </main>
  );
}