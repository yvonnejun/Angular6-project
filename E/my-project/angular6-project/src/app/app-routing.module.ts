import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // 导入路由模块

import { HeroesComponent } from './heroes/heroes.component';

/**
 * 
 * 你通常不会在路由模块中声明组件，所以可以删除 @NgModule.declarations 并删除对 CommonModule 的引用。
 * 你将会使用 RouterModule 中的 Routes 类来配置路由器，所以还要从 @angular/router 库中导入这两个符号。
 *添加一个 @NgModule.exports 数组，其中放上 RouterModule 。 导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用。
 *此刻的 AppRoutingModule 是这样的：
 * 
*/

/**
   * 添加一个 @NgModule.exports 数组，其中放上 RouterModule 。 
   * 导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用。
   * 
   * */
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
