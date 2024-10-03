import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompanionFormComponent } from './components/companion-form/companion-form.component';
import { AccompaniedFormComponent } from './components/accompanied-form/accompanied-form.component';
import { AccompaniedBoardComponent } from './components/accompanied-board/accompanied-board.component';
import { CompanionBoardComponent } from './components/companion-board/companion-board.component';
import { HeaderComponent } from './components/header/header.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { BodyComponent } from './components/body/body.component';



@NgModule({
  declarations: [


    AccompaniedFormComponent,
    AccompaniedBoardComponent,
    CompanionBoardComponent,  

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ 

/*     FormHeaderComponent,
    HeaderComponent, */
  ]
})
export class UsersModule { }
