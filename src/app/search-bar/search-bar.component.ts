import { Component, OnInit, Input } from '@angular/core';
import { stringBox } from "../stringBox";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() search:stringBox;

  constructor() { }

  ngOnInit() {
  }

}
