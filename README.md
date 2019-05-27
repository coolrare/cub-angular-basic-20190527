# cub-angular-basic-20190527

## 線上起始專案

https://stackblitz.com/edit/cub-angular-20190527

## 建立新專案

```bash
ng new demo1
cd demo1
code .
ng serve
```

## 使用 [(ngModel)] 時的注意事項

需要匯入 FormsModule

1. 打開 `app.module.ts`
2. 上方加入 `import { FormsModule } from '@angular/forms';`
3. 找到 `@NgModule()` 的 `imports: []` 加入 `FormsModule`

參考程式碼

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

// 加入
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SocialIconsComponent
  ],
  imports: [
    BrowserModule,
    // 加入
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```