import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeComponent } from './chucknorris/joke/joke.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'joke' },
  { path: 'joke', component: JokeComponent },
  { path: 'page', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }