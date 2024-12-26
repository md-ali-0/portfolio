import config from "@/config";
import { Experience } from "@/types";
import { BriefcaseBusiness } from "lucide-react";

export default async function ExperienceSection() {
    const response = await fetch(`${config.host}/api/experience`, {
        cache: "no-store",
    });
    const experiences = await response.json();

    return (
        <div className="border rounded-2xl bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="py-12">
                {/* Section Title */}
                <h6
                    className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
                    data-backdrop-text="Experience"
                >
                    Experience
                </h6>
                <div className="space-y-2.5">
                    {experiences?.data?.map((experience: Experience) => (
                        <div
                            key={experience?.id}
                            className="flex items-center mb-8"
                        >
                            <BriefcaseBusiness
                                className=" text-2xl mr-4"
                                size={55}
                            />
                            <div className="flex-grow border-l-2 border-gray-600 pl-4">
                                <div className="flex items-center mb-2">
                                    <span className="bg-gray-700 text-sm px-2 py-1 rounded-full">
                                        {experience.startDate
                                            ? new Date(
                                                  experience.startDate
                                              ).toLocaleDateString()
                                            : "N/A"}{" "}
                                        -{" "}
                                        {experience.endDate
                                            ? new Date(
                                                  experience.endDate
                                              ).toLocaleDateString()
                                            : "Present"}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold">
                                    {experience.position}
                                </h3>
                                <p className="text-gray-400">
                                    @{experience.companyName}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
