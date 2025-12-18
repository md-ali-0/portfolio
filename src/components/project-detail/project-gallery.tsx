"use client";

import { ProjectImage } from "@/types/Project";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectGalleryProps {
    images: ProjectImage[];
    projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!images || images.length === 0) {
        return null;
    }

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;

            if (e.key === "Escape") {
                setSelectedImageIndex(null);
            } else if (e.key === "ArrowLeft") {
                setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
            } else if (e.key === "ArrowRight") {
                setSelectedImageIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImageIndex, images.length]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedImageIndex]);

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
    };

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImageIndex(null);
    };

    const lightboxModal = selectedImageIndex !== null && mounted ? (
        <AnimatePresence>
            <div className="fixed inset-0 z-[9999]">
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/95"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                />

                {/* Controls Container */}
                <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                    {/* Close Button */}
                    <button
                        className="fixed top-4 right-4 z-[10001] p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 backdrop-blur-sm border border-white/20"
                        onClick={handleClose}
                        aria-label="Close"
                    >
                        <X className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[10001] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 text-white text-xs sm:text-sm backdrop-blur-sm border border-white/20">
                        {selectedImageIndex + 1} / {images.length}
                    </div>

                    {/* Previous Button */}
                    {images.length > 1 && (
                        <button
                            className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-[10001] p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 backdrop-blur-sm border border-white/20"
                            onClick={handlePrevious}
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                        </button>
                    )}

                    {/* Next Button */}
                    {images.length > 1 && (
                        <button
                            className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-[10001] p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 backdrop-blur-sm border border-white/20"
                            onClick={handleNext}
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                        </button>
                    )}

                    {/* Image Container */}
                    <motion.div
                        className="relative w-full h-full max-w-7xl max-h-[90vh] z-[10000]"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image
                            src={images[selectedImageIndex].url || "/placeholder.svg"}
                            alt={`${projectTitle} - Screenshot ${selectedImageIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </motion.div>

                    {/* Image Caption */}
                    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[10001] px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 text-white text-xs sm:text-sm max-w-[90%] sm:max-w-2xl text-center backdrop-blur-sm border border-white/20">
                        {projectTitle} - Screenshot {selectedImageIndex + 1}
                    </div>
                </div>
            </div>
        </AnimatePresence>
    ) : null;

    return (
        <>
            <div className="mt-12 pt-8 border-t border-zinc-800">
                <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="rounded-lg overflow-hidden bg-zinc-800/50 border border-zinc-700/50 cursor-pointer group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            <div className="relative aspect-video w-full">
                                <Image
                                    src={image.url || "/placeholder.svg"}
                                    alt={`${projectTitle} - Screenshot ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                                        Click to view
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Render lightbox modal in portal (outside of page content) */}
            {mounted && lightboxModal && createPortal(lightboxModal, document.body)}
        </>
    );
}
