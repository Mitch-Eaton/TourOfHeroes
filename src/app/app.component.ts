import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
    <div *ngIf="selectedHero">
      <h2 class="p-a-1">{{selectedHero.name}} details!</h2>
      <div class="p-a-1"><label>id:&nbsp; </label>{{selectedHero.id}}</div>
      <div class="p-a-1">
        <label>Name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


