import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanionFormComponent } from './users/components/companion-form/companion-form.component';
import { HeaderComponent } from './users/components/header/header.component';
import { FormHeaderComponent } from './users/components/form-header/form-header.component';
import { FormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { BodyComponent } from './users/components/body/body.component';
import { CompanionBoardComponent } from './users/components/companion-board/companion-board.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsersModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
