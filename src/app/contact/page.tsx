import Breadcrumb from "@/components/breadcrumb";
import ContactSection from "@/components/main-page/contact-section";
import { baseMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
    ...baseMetadata,
    title: "Contact | Ali - Full Stack Developer",
    description:
        "Get in touch with Ali, a Full-Stack Developer available for collaborations and projects.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
            <Breadcrumb
                title="Contact Me"
                description="Have a project in mind or want to discuss potential opportunities? Reach out to me!"
            />
            <ContactSection />
        </div>
    );
}
