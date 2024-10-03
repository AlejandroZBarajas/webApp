import { Component } from '@angular/core';
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
    this.companion = new Companion('', '', 0, '', '', '', '', '', '', ''); 
  }
  
  
  onSubmit() {
    this.acomp.push({
      ...this.companion,
      getAccompanied: function (): string {
        throw new Error('Function not implemented.');
      },
      getUser: function (): string {
        throw new Error('Function not implemented.');
      }
    })
    localStorage.setItem('companion', JSON.stringify(this.acomp));
    console.log("array a guardar: ",this.acomp)
  }

}
