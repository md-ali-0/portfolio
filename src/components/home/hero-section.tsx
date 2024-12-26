import config from "@/config";
import HeroBanner from "./hero-banner";

export default async function HeroSection() {
    const response = await fetch(`${config.host}/api/about`, {
        cache: "no-store"
    });
    const userData = await response.json();

    return (
        <div className="container mx-auto px-4 py-8 lg:py-16">
            <div className="flex flex-col-reverse md:flex-row justify-center sm:justify-between items-center gap-12 lg:min-h-[75vh]">
                <HeroBanner userData={userData.data} />
            </div>
        </div>
    );
}
