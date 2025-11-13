// Utility functions for API operations

// Generic API request function
export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`API request failed: ${error}`);
  }
}

// GET request
export async function get<T>(url: string): Promise<T> {
  return apiRequest<T>(url, { method: "GET" });
}

// POST request
export async function post<T>(
  url: string,
  data: any
): Promise<T> {
  return apiRequest<T>(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// PUT request
export async function put<T>(
  url: string,
  data: any
): Promise<T> {
  return apiRequest<T>(url, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

// DELETE request
export async function del<T>(url: string): Promise<T> {
  return apiRequest<T>(url, { method: "DELETE" });
}

// Check if API is online
export async function isApiOnline(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
}