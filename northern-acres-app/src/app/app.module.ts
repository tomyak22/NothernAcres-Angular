import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeatureCarouselComponent } from './feature-carousel/feature-carousel.component';
import { HomeTextComponent } from './home-text/home-text.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeatureCarouselComponent,
    HomeTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
