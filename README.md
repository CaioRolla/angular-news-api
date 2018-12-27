# NewsAPI - A Angular Interface for NewsAPI

This Library provides everything you need to use the NewsAPI from you Angular app the way it should be: using Observables, Types and Dependency Injection.


## Installing in your project

```
npm install --save angular-news-api
```

## Using in your Angular application

Import the `AppRoutingModule` into your app module and configure your API Key:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgnewsModule } from 'ng-newsapi';
import { NewsApiKeyConfig } from 'ng-newsapi';

const newsApiConfig: NewsApiKeyConfig = {
  key: 'API_KEY_FROM_NEWS_API'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgnewsModule.forRoot(newsApiConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Now you can use all the endpoints of the API:
```ts
constructor(private newsApiService: NewsApiService) {}

topHeadlines() {
 this.newsApiService.topHeadlines({
       sources: 'bbc-news,the-verge'
     }).subscribe(data => console.log(data));
}

everything() {
 this.newsApiService.everything({
       q: 'trump'
     }).subscribe(data => console.log(data));
}

sources() {
 this.newsApiService.sources({
       country: 'us'
     }).subscribe(data => console.log(data));
}

```

Check the [official documentation](https://newsapi.org/docs/endpoints) for more info about the options in each endpoint.