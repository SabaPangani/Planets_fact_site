import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetComponent } from './pages/planet/planet.component';

const routes: Routes = [
  { path:'' , redirectTo: 'planet/Mercury', pathMatch: 'full'},
  {path:'planet/:name', component:PlanetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
