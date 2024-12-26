// app/about/section.tsx

import MyPhoto from "@/assets/ali/2.png";
import config from "@/config";
import { Calendar, Mail, Navigation, PhoneCall } from "lucide-react";
import Image from "next/image";

export default async function AboutSection() {
    const response = await fetch(`${config.host}/api/about`, {
        cache: "no-store",
    });
    const userData = await response.json();

    return (
        <div className="border rounded-2xl bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="py-12">
                {/* Section Title */}
                <h6
                    className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
                    data-backdrop-text="About Me"
                >
                    About Me
                </h6>

                <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                    {/* Profile Image */}
                    <div className="col-span-12 md:col-span-5 animate-fadeUp">
                        <Image
                            alt="Ali"
                            src={MyPhoto.src}
                            width={300}
                            height={400}
                            decoding="async"
                            data-nimg={1}
                            className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                            loading="lazy"
                            style={{ color: "transparent" }}
                        />
                    </div>

                    {/* Personal Info Section */}
                    <div className="col-span-12 md:col-span-7 space-y-2.5 animate-fadeUp">
                        <div className="md:mr-12 xl:mr-16">
                            <h3 className="text-4xl font-medium dark:text-white mb-2.5">
                                Who am I?
                            </h3>
                            <p className="text-gray-lite dark:text-color-910 leading-7">
                                {userData.data.aboutMe}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-medium my-5 dark:text-white">
                                Personal Info
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Phone */}
                                <div className="flex animate-fadeUp">
                                    <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12">
                                        <PhoneCall />
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-lite dark:text-color-910">
                                            Phone
                                        </p>
                                        <h6 className="font-medium dark:text-white">
                                            <a
                                                className="hover:text-gray-500 duration-300 transition"
                                                href="tel:+8801916498482"
                                            >
                                                +8801916 498482
                                            </a>
                                        </h6>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex animate-fadeUp">
                                    <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12">
                                        <Navigation />
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-lite dark:text-color-910">
                                            Location
                                        </p>
                                        <h6 className="font-medium dark:text-white">
                                            Jhenaidah - 7300, Bangladesh
                                        </h6>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex animate-fadeUp">
                                    <span className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12">
                                        <Mail />
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-lite dark:text-color-910">
                                            Email
                                        </p>
                                        <h6 className="font-medium dark:text-white">
                                            <a
                                                className="hover:text-gray-500 duration-300 transition"
                                                href="mailto:mohammad.98482@gmail.com"
                                            >
                                                mohammad.98482@gmail.com
                                            </a>
                                        </h6>
                                    </div>
                                </div>

                                {/* Birthday */}
                                <div className="flex animate-fadeUp">
                                    <span className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12">
                                        <Calendar />
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-lite dark:text-color-910">
                                            Birthday
                                        </p>
                                        <h6 className="font-medium dark:text-white">
                                            May 27, 1990
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
