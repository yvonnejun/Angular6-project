import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // declare 声明，自定义的意思。表示这个数组里面都是自定义的组件(注意：这里放组件不能放module模块),
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [ // imports 导入，表示这个数组里面都是导入的模块(内置和自定义的模块--比如路由模块)
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
