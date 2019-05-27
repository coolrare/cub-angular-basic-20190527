import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web';
  url = 'http://blog.miniasp.com/';
  color = 'red';
  size = 12;
  fontSize = '12px';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.color = 'green';
    }, 2000);
  }

}
