import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() item;

  constructor() {}

  ngOnInit() {}

  outputTitle(title: string) {
    switch (title) {
      case '':
        return '(no title)';
        break;

      default:
        return title;
        break;
    }
  }
}
