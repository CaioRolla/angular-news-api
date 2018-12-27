import { Injectable, Inject } from '@angular/core';
import NewsAPI from 'newsapi';
import { NewsApiConfigService } from './news-api-config.service';
import {
  TopHeadlinesConfig,
  TopHeadlinesResponse,
  EverythingResponse,
  EverythingConfig,
  SourcesConfig
} from '../interfaces/newsapi.models';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private newsApi;

  constructor(@Inject(NewsApiConfigService) private newsApiConfigService) {
    this.newsApi = new NewsAPI(this.newsApiConfigService.key);
  }

  topHeadlines(config: TopHeadlinesConfig): Observable<TopHeadlinesResponse> {
    return from(this.newsApi.v2.topHeadlines(config));
  }

  everything(config: EverythingConfig): Observable<EverythingResponse> {
    return from(this.newsApi.v2.everything(config));
  }

  sources(config: SourcesConfig): Observable<SourcesConfig> {
    return from(this.newsApi.v2.sources(config));
  }
}


