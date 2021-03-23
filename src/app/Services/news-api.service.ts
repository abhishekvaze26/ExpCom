import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  constructor(private http: HttpClient) { }

  getAllNews() {
      return this.http.get(
        'https://newsapi.org/v2/everything?q=bitcoin&from=2021-02-25&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98'
      );
    }

}
