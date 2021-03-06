import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth-guard.service';
import { JokeComponent } from './chucknorris/joke/joke.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'joke' },
  { path: 'joke', component: JokeComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  {
    path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    data: { preload: true }
  },
  {
    path: 'admin-auth',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-not-auth',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
