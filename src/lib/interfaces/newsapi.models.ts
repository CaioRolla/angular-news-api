export interface NewsApiKeyConfig {
 key: string;
}

export interface TopHeadlinesResponse {
 status: string;
 totalResults: number;
 articles: Article[];
}

export interface EverythingResponse {
 status: string;
 totalResults: number;
 articles: Article[];
}

export interface SourcesResponse {
 status: string;
 sources: Source[];
}

export interface Article {
 source: Source;
 author?: string;
 title: string;
 description: string;
 url: string;
 urlToImage: string;
 publishedAt: string;
 content?: string;
}

export interface Source {
 id: string;
 name: string;
 description: string;
 url: string;
 category: string;
 language: string;
 country: string;
}

/* Config interfaces */
export interface TopHeadlinesConfig {
 sources?: string;
 q?: string;
 category?: string;
 language?: string;
 country?: string;
}

export interface EverythingConfig {
 q?: string;
 sources?: string;
 domains?: string;
 from?: string;
 to?: string;
 language?: string;
 sortBy?: string;
 page?: number;
}

export interface SourcesConfig {
 category?: string;
 language?: string;
 country?: string;
}
