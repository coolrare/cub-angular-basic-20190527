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


## 熱鍵表

- 下載 PDF 檔
    - [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
    - [Mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
    - [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

- 全部儲存：
    - [Win] ctrl + k, s
    - [Mac] cmd + option + s

- 切換關聯檔案
    - [Win] alt + o
    - [Mac] option + shift + o

- 快速開啟檔案
    - [Win] ctrl + p
    - [Mac] cmd + p

- 開啟/關閉左邊的 siderbar
    - [Win] ctrl + b
    - [Mac] cmd + b

- 開啟/關閉檔案總管
    - [Win] ctrl + shift + e
    - [Mac] cmd + shift + e

- 開啟/關閉搜尋視窗
    - [Win] ctrl + shift + f
    - [Mac] cmd + shift + f

- 開啟/關閉原始檔控制(git)
    - [Win/Mac] ctrl + shift + g

- 自動排版
    - [Win/Mac] alt + shift + f (記得設定 prettier.singleQuote)

- 註解
    - [Win] ctrl + k + c
    - [Mac] cmd + k + c

- 取消註解
    - [Win] ctrl + k + u
    - [Mac] cmd + k + u

- 單行註解
    - [Win] ctrl + /
    - [Mac] cmd + /

## Emmet

https://docs.emmet.io/abbreviations/syntax/