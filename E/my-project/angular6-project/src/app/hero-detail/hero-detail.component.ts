import { Component, OnInit, Input } from '@angular/core'; // 导入 Input 符号, 因为hero 属性必须是一个带有 @Input() 装饰器的输入属性，因为外部的 HeroesComponent 组件将会绑定到它
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

  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
