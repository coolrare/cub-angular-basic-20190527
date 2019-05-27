import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Atricle } from '../atricle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {
  @Input() item: Atricle;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

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
