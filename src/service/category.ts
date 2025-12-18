import config from "@/config";
import { Category } from "@/types/Category";

export const getCategories = async (): Promise<Category[]> => {
    try {
        const url = `${config.host}/api/v1/category`;
        
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
            throw new Error(`Failed to fetch categories: ${response.statusText}`);
        }

        const data = await response.json();
        return data?.data || [];
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};
