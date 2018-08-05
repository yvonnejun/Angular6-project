import { Injectable } from '@angular/core';
import { Hero } from './hero'; // 表也叫数据类型Hero[]
import { HEROES } from './mock-heroes'; // 表数据
/**
 * @Injectable() 装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样
 * HeroService 可以从任何地方获取数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源。
 * 
 */

@Injectable({  // 默认情况下，Angular CLI 命令 ng generate service 会通过给 @Injectable 装饰器添加元数据的形式，为该服务把提供商注册到根注入器上。
  providedIn: 'root' // 这句表示当前服务是root里面的顶级服务(也就是全局服务，任何组件类中可直接调用)，将服务HeroService默认注册到根注入器root上，注册的服务才能依赖注入使用导入到组件中
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROES;  // 返回英雄列表数据HEROES
  }
}
