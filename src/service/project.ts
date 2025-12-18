import config from "@/config";
import { Project } from "@/types/Project";

interface GetProjectsParams {
    page?: number;
    limit?: number;
    searchTerm?: string;
}

export const getProjects = async (params?: GetProjectsParams): Promise<Project[]> => {
    const queryParams = new URLSearchParams();
    
    if (params?.page) {
        queryParams.append('page', params.page.toString());
    }
    
    if (params?.limit) {
        queryParams.append('limit', params.limit.toString());
    }
    
    if (params?.searchTerm) {
        queryParams.append('searchTerm', params.searchTerm);
    }
    
    const queryString = queryParams.toString();
    const url = `${config.host}/api/v1/project${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url);
    const data = await response.json();
    return data?.data;
};

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
    try {
        const response = await fetch(`${config.host}/api/v1/project/${slug}`);
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return data?.data;
    } catch (error) {
        console.error('Error fetching project:', error);
        return null;
    }
};
