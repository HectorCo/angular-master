import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormRoutingModule } from './my-form-routing.module';
import { MemeberFormComponent } from './memeber-form/memeber-form.component';

@NgModule({
  declarations: [MemeberFormComponent],
  imports: [
    CommonModule,
    MyFormRoutingModule
  ],
  exports: [MemeberFormComponent]
})
export class MyFormModule { }
