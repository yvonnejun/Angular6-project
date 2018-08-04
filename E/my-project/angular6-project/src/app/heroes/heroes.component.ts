import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',   // --这个组件标签<app-heroes></app-heroes>要写在app.component.html根组件里面才有效
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  hero: Hero = {
    id : 1,
    name: 'foo'
  };
  constructor() { }

  ngOnInit() {
  }

}
