import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormManagerRoutingModule } from './form-manager-routing.module';
import { MemeberListComponent } from './memeber-list/memeber-list.component';
import { MemeberManagerComponent } from './memeber-manager/memeber-manager.component';

@NgModule({
  declarations: [MemeberListComponent, MemeberManagerComponent],
  imports: [
    CommonModule,
    FormManagerRoutingModule
  ],
  exports: [MemeberListComponent, MemeberManagerComponent]
})
export class FormManagerModule { }
