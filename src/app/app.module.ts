import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { VillainsListComponent } from './components/villains-list/villains-list.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesListComponent,
    VillainsListComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
