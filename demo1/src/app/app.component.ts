import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Atricle } from './atricle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  keyword = 'test';
  displayArticle = true;

  // originalArticles = [];
  // articles = this.originalArticles;
  // articles = this.dataService.articles;
  // get articles() {
  //   return this.dataService.articles;
  // }

  articles: Atricle[];

  /**
   *
   */
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getArticles().subscribe((data: any) => {
      console.log(data);
      this.articles = data.articles;
    });
  }

  search(event: MouseEvent, input: HTMLInputElement) {
    console.dir(input.value);
    this.keyword = 'search';
  }

  doSearch(keyword: string) {
    // console.log(keyword);
    // this.articles[0].title = 'test';
    // if (keyword) {
    //   this.articles = this.originalArticles.filter(article => article.title.indexOf(keyword) >= 0);
    // } else {
    //   this.articles = this.originalArticles;
    // }
    // console.log(this.articles);
    this.dataService.doSearch(keyword);
  }

  toggle() {
    this.displayArticle = !this.displayArticle;
  }
}
