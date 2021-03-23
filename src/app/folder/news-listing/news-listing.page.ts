import { News, NewsRsponse } from './../../../Models/News';
import { NewsApiService } from './../../Services/news-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.page.html',
  styleUrls: ['./news-listing.page.scss'],
})
export class NewsListingPage implements OnInit {
  public listOfNews: News[] = new Array();
  public newsResponse: NewsRsponse
  constructor(private newsService:NewsApiService) {}

  ngOnInit() {
    this.newsService.getAllNews().subscribe((data)=>{
      this.newsResponse = JSON.parse(JSON.stringify(data));
      for (const news of this.newsResponse.articles) {
        this.listOfNews.push(news);
      }
    });
    console.log('news==>',this.listOfNews);
  }
}
