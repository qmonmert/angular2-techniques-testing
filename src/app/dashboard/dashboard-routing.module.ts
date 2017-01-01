import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SubdashboardComponent } from './subdashboard/subdashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: {title: 'Top Speakers'} },
  { path: 'sub', component: SubdashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routedComponents = [ DashboardComponent, SubdashboardComponent ];