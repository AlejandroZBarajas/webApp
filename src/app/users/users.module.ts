import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { CompanionFormComponent } from './components/companion-form/companion-form.component';
import { AccompaniedFormComponent } from './components/accompanied-form/accompanied-form.component';
import { AccompaniedBoardComponent } from './components/accompanied-board/accompanied-board.component';
import { CompanionBoardComponent } from './components/companion-board/companion-board.component';
import { HeaderComponent } from './components/header/header.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';



@NgModule({
  declarations: [
    FormComponent,
    DasboardComponent,
    CompanionFormComponent,
    AccompaniedFormComponent,
    AccompaniedBoardComponent,
    CompanionBoardComponent,
    HeaderComponent,
    FormHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
