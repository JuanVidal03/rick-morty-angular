import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { HomeComponent } from './pages/home/home.component';
import { SingleCharacterComponent } from './pages/single-character/single-character.component';

export const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'detail/:id', component: SingleCharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
