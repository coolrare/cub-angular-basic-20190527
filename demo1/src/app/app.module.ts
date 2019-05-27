import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DemoPipe } from './demo.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SocialIconsComponent,
    ArticleComponent,
    SearchBoxComponent,
    DemoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
