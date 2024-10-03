import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';



@NgModule({
  declarations: [
    FormComponent,
    DasboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
