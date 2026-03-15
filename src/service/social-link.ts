import config from "@/config";

export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
    order: number;
    createdAt: string;
    updatedAt: string;
}

export const getSocialLinks = async (): Promise<SocialLink[]> => {
    try {
        const url = `${config.host}/api/v1/social-link`;
        
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "force-cache",
            next: {
                revalidate: 60 * 60, // Revalidate every hour
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch social links: ${response.statusText}`);
        }

        const data = await response.json();
        return data?.data || [];
    } catch (error) {
        console.error("Error fetching social links:", error);
        return [];
    }
};
