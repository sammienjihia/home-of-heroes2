import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  constructor(private heroService: HeroService) { }

  heroes: Hero[];

  getheroes(): void{
    
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  selectedHero: Hero; // This means a variable by the name selectedHero with the type Hero
  onSelect(hero: Hero): void{
    this.selectedHero = hero;// this means this method refers to a variable within this class by the
    // name selectedHero (this.selectedHero) and is assigned the value of the the methods arg
    // which is by the name hero with the type Hero
  }

  ngOnInit() {
    this.getheroes();
  }

}
