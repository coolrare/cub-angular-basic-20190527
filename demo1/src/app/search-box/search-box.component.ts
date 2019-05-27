import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  keyword = '';

  @Output() searchKeyword = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(event: MouseEvent, input: HTMLInputElement) {
    this.searchKeyword.emit(this.keyword);
  }

}
