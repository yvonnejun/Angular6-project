import { Component } from '@angular/core';

@Component({       // app-root 的根组件的三个元参数
  selector: 'app-root',  // 就是主入口文件index.html里面的<app-root></app-root>组件
  templateUrl: './app.component.html',   // 组件用到的模板文件
  styleUrls: ['./app.component.css']     // 组件用到的样式文件
})
export class AppComponent {       // 这才是真正组件编写代码的地方，title是标题变量绑定在组件模板html文件里面{{ title }}
  title = 'Tour of Heroes';
}
