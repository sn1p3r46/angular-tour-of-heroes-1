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

  getNewHID():string {
    var max = "0"
    HEROES.forEach(
      function(el){
        if (+max < +el.id) {
          max = el.id;
        }
      }
    )
    return String(+max+1) 
  }

  putHero(hero:Hero):void{
    var found : boolean = false
    HEROES.forEach((el) => {
      if (el.id === hero.id){

        el=hero;
        found = true

      }
    });
    console.log("DioCAne");
    
    if (found===false) {
      hero.id = this.getNewHID();
      HEROES.push(hero)
      console.log("Pushing", hero);
      
    } else {
      console.log("Found");
      
    }
  }

  constructor(private messageService:MessageService) { }

}
