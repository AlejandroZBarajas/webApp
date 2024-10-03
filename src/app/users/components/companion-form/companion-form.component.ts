import { Component } from '@angular/core';
import { FormHeaderComponent } from '../form-header/form-header.component';
import { Companion } from '../../models/companion';

@Component({
  selector: 'app-companion-form',
  templateUrl: './companion-form.component.html',
  styleUrl: './companion-form.component.css'
})
export class CompanionFormComponent {
  acomp: Companion [] = []
  companion: Companion;

  constructor() {
    this.companion = new Companion(1, '', '', 0, '', '', '', '', '', '', ''); 
  }
  
  
  onSubmit() {
    this.acomp.push(this.companion)
    localStorage.setItem('companion', JSON.stringify(this.acomp));
    console.log("array a guardar: ",this.acomp)
  }

}
