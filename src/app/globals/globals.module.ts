import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, NavBarComponent, HomeComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [HeaderComponent, NavBarComponent, HomeComponent, NotFoundComponent]
})
export class GlobalsModule { }
