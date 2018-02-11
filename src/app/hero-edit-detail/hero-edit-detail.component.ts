import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-edit-detail',
  templateUrl: './hero-edit-detail.component.html',
  styleUrls: ['./hero-edit-detail.component.css']
})
export class HeroEditDetailComponent implements OnInit {

  @Input() hero:Hero;

  constructor() { }

  ngOnInit() {
  }

}
