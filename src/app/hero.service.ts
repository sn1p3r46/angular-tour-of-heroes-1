import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { MessageService } from "./message.service";
import { element } from 'protractor';

@Injectable()
export class HeroService {

  getHeroes():Observable<Hero[]>{
    this.messageService.add("Hero Service: HeroesFetched!");
    return of(HEROES);
  }

  getHero(id:string):Observable<Hero>{
    this.messageService.add("Hero Service: Hero!");
    var hero = HEROES.find((el)=>el.id === id)
    return of(hero);
  }

  putHero(hero:Hero):void{
    HEROES.forEach((el) => {
      if (el.id == hero.id){
        el=hero;
      }
    });
  }

  constructor(private messageService:MessageService) { }

}
