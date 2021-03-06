import { Injectable } from '@angular/core';
import { Hero } from './hero'; // 表也叫数据类型Hero[]
import { HEROES } from './mock-heroes'; // 表数据

import { HttpClient, HttpHeaders } from '@angular/common/http'; // 导入http
import { Observable, of } from 'rxjs';
/**
 * @Injectable() 装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样
 * HeroService 可以从任何地方获取数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源。
 * 
 */

@Injectable({  // 默认情况下，Angular CLI 命令 ng generate service 会通过给 @Injectable 装饰器添加元数据的形式，为该服务把提供商注册到根注入器上。
  providedIn: 'root' // 这句表示当前服务是root里面的顶级服务(也就是全局服务，任何组件类中可直接调用)，将服务HeroService默认注册到根注入器root上，注册的服务才能依赖注入使用导入到组件中
})
export class HeroService {
  configUrl = '/src/app/mock-heroes.ts';
  // 依赖注入HttpClient模块给私有变量http使用
  constructor(private http: HttpClient) { }
  getHeroes(): Hero[] {
    return HEROES;  // 返回英雄列表数据HEROES
  };
  getHeroItems(): Observable<Hero[]> {
    // return of(HEROES);  // 返回英雄列表数据HEROES
    return this.http.get<Hero[]>(this.configUrl);
  };
  getHero(id: number): Hero { // ts中带返回值的方法应该怎么写？建议：看了ts类型编译的章节发现，ts会自动识别函数和变量的类型，也就是默认情况下完全可以不用写函数或变量的类型，让它自己识别去吧(识别出来的反而是对的)
    let item:Hero;
    // id == element.id的元素被返回,还要考虑到调用这个方法的变量的类型设置必须保持一致，否则也报错
    HEROES.forEach((ele, index) => {
      // console.log(ele)
      if (ele.id == id) {
        item = ele;
      }
    })
    return item;
    // eturn HEROES[0] // 这是可以的，上面就是要往HEROES里面传索引值即可
  }
  // 利用httpClient直接获取json数据，而不是通过HEROES模块获取的写法如下
  // getHeroItems():Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.configUrl);
  // }
}
