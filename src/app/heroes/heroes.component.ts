import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";
import { HEROES } from "../mock-heroes";
import { Hero } from "../hero";
import { stringBox } from '../stringBox';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero:Hero;
  editingHero:Hero;
  expandingHero:Hero;
  edit:Boolean = true;
  search:stringBox = {value:""};

  onSelect(hero:Hero):void{

    if (this.selectedHero === hero){
      this.selectedHero = null;
      console
        .log("DE-Selected: " + hero.name);
        this.messageService.add(hero.name + " Deselected!");

    } else {
      this.selectedHero = hero;
      console
        .log("Selected: " + hero.name);
        this.messageService.add(hero.name + " Selected!");
    }
  }

  getHeroes():void{
    this.heroSerivce
          .getHeroes()
              .subscribe(heroes => this.heroes = heroes);
  }

  constructor(
    private heroSerivce:HeroService,
    private messageService:MessageService
    ) { }

  ngOnInit() {
    this.getHeroes();
  }

}
