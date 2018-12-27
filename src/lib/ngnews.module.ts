import { NgModule, ModuleWithProviders } from '@angular/core';
import { NewsApiKeyConfig } from './interfaces/newsapi.models';
import { NewsApiConfigService } from './services/news-api-config.service';
import { NewsApiService } from './services/news-api.service';
@NgModule({
})
export class NgnewsModule {

  static forRoot(newsApiConfig: NewsApiKeyConfig): ModuleWithProviders {
    return {
      ngModule: NgnewsModule,
      providers: [
        NewsApiService,
        {
          provide: NewsApiConfigService, useValue: newsApiConfig
        }
      ]
    };
  }
}
