/**
 * GraphQL API Client
 * Configure and export GraphQL API utilities
 */

const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:7777/graphql';

interface GraphQLResponse<T> {
    data?: T;
    errors?: Array<{
        message: string;
        locations?: Array<{ line: number; column: number }>;
        path?: string[];
    }>;
}

interface GraphQLRequestOptions {
    headers?: Record<string, string>;
    variables?: Record<string, unknown>;
}

/**
 * Generic GraphQL client for making GraphQL requests
 */
class GraphQLClient {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    /**
     * Execute a GraphQL query or mutation
     */
    async request<T>(
        query: string,
        options: GraphQLRequestOptions = {}
    ): Promise<T> {
        const { headers, variables } = options;

        try {
            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                body: JSON.stringify({
                    query,
                    variables,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result: GraphQLResponse<T> = await response.json();

            if (result.errors) {
                console.error('GraphQL Errors:', result.errors);
                throw new Error(result.errors[0]?.message || 'GraphQL request failed');
            }

            if (!result.data) {
                throw new Error('No data returned from GraphQL query');
            }

            return result.data;
        } catch (error) {
            console.error('GraphQL API Error:', error);
            throw error;
        }
    }

    /**
     * Execute a GraphQL query
     */
    async query<T>(
        query: string,
        variables?: Record<string, unknown>,
        headers?: Record<string, string>
    ): Promise<T> {
        return this.request<T>(query, { variables, headers });
    }

    /**
     * Execute a GraphQL mutation
     */
    async mutate<T>(
        mutation: string,
        variables?: Record<string, unknown>,
        headers?: Record<string, string>
    ): Promise<T> {
        return this.request<T>(mutation, { variables, headers });
    }
}

// Export singleton instance
export const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT);

// Export class for custom instances
export default GraphQLClient;
