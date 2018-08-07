import { Component, OnInit, Input } from '@angular/core'; // 导入 Input 符号, 因为hero 属性必须是一个带有 @Input() 装饰器的输入属性，因为外部的 HeroesComponent 组件将会绑定到它
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HeroService }  from '../hero.service';
import { Hero } from '../hero';

/**
 * @这就是你要对 HeroDetailComponent 类做的唯一一项修改。 
 * 没有其它属性，也没有展示逻辑。
 * 这个组件所做的只是通过 hero 属性接收一个英雄对象，并显示它。
 * 
 * 
*/
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero: Hero;
  hero: Hero;
  constructor( // 依赖注入写在构造函数的参数里面
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // 获取路径中的id
    this.hero = this.heroService.getHero(id);
  }
  goBack(): void { //location 是一个 Angular 的服务，用来与浏览器打交道。 稍后，你就会使用它来导航回上一个视图。
    this.location.back();
  }
}
