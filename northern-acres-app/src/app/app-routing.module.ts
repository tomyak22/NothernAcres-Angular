import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'termsConditions', component: TermsConditionsComponent},
  {path: 'properties', component: PropertiesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
