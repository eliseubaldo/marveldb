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
import { HeroEditorComponent } from './components/hero-profile/hero-editor/hero-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesListComponent,
    VillainsListComponent,
    HeroProfileComponent,
    HeroEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
