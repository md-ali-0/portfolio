import config from "@/config";
import { Project } from "@/types";
import { Cpu, Eye, FileChartColumn, Globe } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> => {
    const slug = params.slug;

    const response = await fetch(`${config.host}/api/project/${slug}`, {
        cache: "no-store",
    });
    if (!response.ok) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    const result = await response.json();
    const project: Project = await result.data;

    return {
        title: project.metaTitle || project.title,
        description: project.metaDesc || project.content.slice(0, 150),
        keywords: project.metaKey ? project.metaKey.split(",") : [],
        openGraph: {
            title: project.metaTitle || project.title,
            description: project.metaDesc || project.content.slice(0, 150),
            url: `${config.host}/project/${project.slug}`,
            images: project.images
                ? project.images.map((img) => ({
                      url: img.url,
                      width: 800,
                      height: 600,
                      alt: project.title,
                  }))
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title: project.metaTitle || project.title,
            description: project.metaDesc || project.content.slice(0, 150),
            images:
                project.images && project.images.length > 0
                    ? project.images[0].url
                    : project.thumbnail || undefined,
        },
    };
};

export default async function ProjectDetails({
    params,
}: {
    params: { slug: string };
}) {
    const slug = params.slug;

    const response = await fetch(`${config.host}/api/project/${slug}`, {
        cache: "no-store",
    });
    if (!response.ok) {
        notFound();
    }

    const result = await response.json();
    const project: Project = await result.data;

    return (
        <div className="container py-8 sm:py-12 md:py-16">
            <div className="border rounded-2xl bg-[#111111] px-4 sm:px-5 md:px-10 py-8">
                <h2 className="text-gray-300 text-4xl text-center font-bold">
                    {project.title}
                </h2>
                <div className="space-y-2 my-6">
                    <p className="dark:text-white flex items-center text-[15px] sm:text-lg space-x-2">
                        <FileChartColumn className="text-lg mr-2" size={20} />
                        Project :<span className="font-medium">Website</span>
                    </p>
                    <p className="dark:text-white flex items-center text-[15px] sm:text-lg space-x-2">
                        <Globe className="text-lg mr-2 " size={20} />
                        Languages :
                        {project.languages.map((item, idx) => (
                            <span key={idx} className="font-medium ">
                                {item},
                            </span>
                        ))}
                    </p>
                    {project.liveUrl && (
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg space-x-2">
                            <Eye className="text-lg mr-2 " size={20} />
                            Preview :
                            <span className="font-medium transition-all duration-300 ease-in-out hover:text-gray-500 hover:underline hover:underline-offset-2">
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Url
                                </Link>
                            </span>
                        </p>
                    )}
                    {project.SourceFront && (
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg space-x-2">
                            <Eye className="text-lg mr-2 " size={20} />
                            Frontend :
                            <span className="font-medium transition-all duration-300 ease-in-out hover:text-gray-500 hover:underline hover:underline-offset-2">
                                <Link
                                    href={project.SourceFront}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Frontend Source Code
                                </Link>
                            </span>
                        </p>
                    )}
                    {project.SourceBack && (
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg space-x-2">
                            <Eye className="text-lg mr-2 " size={20} />
                            Backend :
                            <span className="font-medium transition-all duration-300 ease-in-out hover:text-gray-500 hover:underline hover:underline-offset-2">
                                <Link
                                    href={project.SourceBack}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Backend Source Code
                                </Link>
                            </span>
                        </p>
                    )}
                    <p className=" text-white flex flex-wrap items-center text-[15px] sm:text-lg space-x-2">
                        <Cpu className="text-lg mr-2 " size={20} />
                        Technologies :
                        {project.technologies.map((item, idx) => (
                            <span key={idx} className="font-medium text-nowrap">
                                {item},{" "}
                            </span>
                        ))}
                    </p>
                </div>

                <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm ">
                    {project.content}
                </p>
                {project.images && project.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                        <Image
                            alt={`Project image`}
                            src={project.thumbnail || "/default-thumbnail.jpg"}
                            width={620}
                            height={420}
                            decoding="async"
                            data-nimg={1}
                            className="w-full h-full object-cover rounded-xl"
                            loading="lazy"
                            style={{ color: "transparent" }}
                        />
                        {project.images.map((img, idx) => (
                            <div key={idx} className="w-full h-auto">
                                <Image
                                    alt={`Project image ${idx + 1}`}
                                    src={img.url}
                                    width={620}
                                    height={420}
                                    decoding="async"
                                    data-nimg={1}
                                    className="w-full h-full object-cover rounded-xl"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
