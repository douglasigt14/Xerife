import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/schedule/schedule.component';
import { ClientsComponent } from './pages/clients/clients.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'schedule', component: HomeComponent },
  { path: 'clients', component: ClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
