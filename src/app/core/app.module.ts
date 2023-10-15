import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './component/main/app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './component/navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import {FooterComponent} from './component/footer/footer.component';
import {RouterLink} from "@angular/router";
import {ContactComponent} from './component/contact/contact.component';
import {HomeComponent} from './component/home-section/home.component';
import {HeroComponent} from "./component/home-section/hero/hero.component";
import {ServiceBlockComponent} from './component/home-section/service-block/service-block.component';
import {WebsiteCreationComponent} from './component/service-section/website-creation/website-creation.component';
import {HttpClientModule} from "@angular/common/http";
import {ReviewsComponent} from './component/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    HeroComponent,
    ServiceBlockComponent,
    WebsiteCreationComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    RouterLink,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
