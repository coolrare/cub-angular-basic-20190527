import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  keyword = 'test';

  search(event: MouseEvent, input: HTMLInputElement) {
    console.dir(input.value);
    this.keyword = 'search';
  }
}
