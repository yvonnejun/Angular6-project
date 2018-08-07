import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes'; // 导入服务模块，这个直接导入数据模块的代码就注释掉
import { HeroService } from '../hero.service'; // 导入服务模块

@Component({
  selector: 'app-heroes',   // --这个组件标签<app-heroes></app-heroes>要写在app.component.html根组件里面才有效
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  // hero: Hero = {
  //   id : 1,
  //   name: 'foo'
  // };
  // heroes = HEROES;
  heroes: Hero[]; // 注意：声明一个属性heroes,并声明其数据类型为Hero[],表结构也就是数据类型的定义是冒号，而不是等号了
  selectedHero: Hero; // 初始化一个英雄对象的数据结构
  /**
   * 注入 HeroService
   * 往构造函数中添加一个私有的 heroService变量，其类型为 HeroService。
   * 这个参数同时做了两件事：
   * 1. 声明了一个私有 heroService 属性，
   * 2. 把它标记为一个 HeroService 的注入点(这就注入了)
   * 
   * 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
   * 
   * 
  */
  constructor(private heroService: HeroService) { // 这里才是依赖注入的关键，把服务注入给私有变量private heroService，在下面用this.heroService调用

  }

  /**
   * 让构造函数保持简单，只做初始化操作，比如把构造函数的参数赋值给属性。 
   * 构造函数不应该做任何事。 
   * 它肯定不能调用某个函数来向远端服务（比如真实的数据服务）发起 HTTP 请求
   * 所以初始化调用函数的工作就交给ngOnInit
   * 
  */
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;   // 实际上的赋值
  }
  getHeroes(): void {
    console.log(this.heroService.getHeroes());
    this.heroes = this.heroService.getHeroes(); // 这句就是得到服务中数据的关键了，把服务中返回的数据值赋给了this.heroes属性
  }
}
