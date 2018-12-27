import { InjectionToken } from '@angular/core';
import { NewsApiKeyConfig } from '../interfaces/newsapi.models';

export const NewsApiConfigService = new InjectionToken<NewsApiKeyConfig>('NewsApiConfig');
