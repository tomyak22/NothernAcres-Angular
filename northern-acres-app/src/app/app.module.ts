import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeatureCarouselComponent } from './feature-carousel/feature-carousel.component';
import { HomeTextComponent } from './home-text/home-text.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeatureCarouselComponent,
    HomeTextComponent,
    FooterSectionComponent,
    HomePageComponent,
    TermsConditionsComponent,
    PropertiesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
