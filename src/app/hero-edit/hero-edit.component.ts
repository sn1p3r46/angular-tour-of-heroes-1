import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  hero: Hero;
  edit: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService:MessageService

  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.handleResult(hero);
      });
  }
  
  handleResult(hero:Hero) :void {

    if (hero === undefined) {
      this.hero = new Hero();
      this.hero.thumb = "https://picsum.photos/500/500/?image=233"
      this.hero.name = "Hero Name";
      this.hero.id = ""
      this.hero.gender = "Hero Gender";
      this.hero.origin = "Origin";
      this.hero.desc = "Insert Description";
    } else {

      this.hero = hero;
    
    }
    

  }

  onPut(hero:Hero):void{

    this.heroService.putHero(hero);
    this.messageService.add("SavingHero: " + hero.name)

  }

  goBack() {
    console.log("goBakc Called");
    
    this.onPut(this.hero)
    this.location.back();
  }
}
