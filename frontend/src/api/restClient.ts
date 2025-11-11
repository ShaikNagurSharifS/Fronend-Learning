/**
 * REST API Client
 * Configure and export REST API utilities
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:7777/api';

interface RequestOptions extends RequestInit {
    params?: Record<string, string | number | boolean>;
}

/**
 * Generic REST client for making HTTP requests
 */
class RestClient {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    private async request<T>(
        endpoint: string,
        options: RequestOptions = {}
    ): Promise<T> {
        const { params, ...fetchOptions } = options;

        // Build URL with query parameters
        let url = `${this.baseURL}${endpoint}`;
        if (params) {
            const queryString = new URLSearchParams(
                Object.entries(params).map(([key, value]) => [key, String(value)])
            ).toString();
            url += `?${queryString}`;
        }

        // Default headers
        const headers = {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        };

        try {
            const response = await fetch(url, {
                ...fetchOptions,
                headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('REST API Error:', error);
            throw error;
        }
    }

    async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'GET' });
    }

    async post<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async put<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    async patch<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'DELETE' });
    }
}

// Export singleton instance
export const restClient = new RestClient(API_BASE_URL);

// Export class for custom instances
export default RestClient;
