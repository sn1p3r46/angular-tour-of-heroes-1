import { Component, OnInit, Input} from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;
  @Input() selectedHero:Hero;
  @Input() edit:boolean;

  editingHero:Hero;
  expandingHero:Hero;

  onEdit(hero:Hero):void{
    this.selectedHero = null;
    this.editingHero = hero;
    console.log("Editing: " + hero.name);
  }

  onExpand(hero:Hero):void{
    this.expandingHero = hero;
    console.log("Expanding: " + hero.name);
  }

  constructor(
    private heroSerivce:HeroService,
    private messageService:MessageService
    ) { }

  ngOnInit() { }

}
