import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { VillainsListComponent } from './components/villains-list/villains-list.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';


const routes: Routes = [
  {path: '', component: DashboardComponent },
  { path: 'heroes', component: HeroesListComponent },
  { path: 'villains', component: VillainsListComponent },
  { path: 'heroprofile/:id', component: HeroProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
