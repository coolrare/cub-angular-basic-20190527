import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  keyword = 'test';

  search(event: MouseEvent) {
    console.log(event.altKey);
    this.keyword = 'search';
  }
}
