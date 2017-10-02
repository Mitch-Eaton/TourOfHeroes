import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
  template: `
    <div class="navbar navbar-inverse bg-inverse">
      <h1 class="navbar-brand">{{title}}</h1>
    </div>
    <h2 class="bg-success p-a-1">My Heroes</h2>
    <ul style="list-style-type:none" class="heroes">
      <li class="row" *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
        <div class="col-xs-2 p-b-1 col-pull"><button class="btn ptn-outline-primary btn-block">{{hero.id}} {{hero.name}} </button></div>
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `
})

export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes : Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}




