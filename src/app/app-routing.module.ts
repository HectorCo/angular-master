import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './globals/home/home.component';
import { MemeberManagerComponent} from './form-manager/memeber-manager/memeber-manager.component';
import {NotFoundComponent} from './globals/not-found/not-found.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'members', component: MemeberManagerComponent},
  {path:'**', component:NotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
