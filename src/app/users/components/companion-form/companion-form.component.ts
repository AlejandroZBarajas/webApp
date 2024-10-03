import { Component } from '@angular/core';
import { FormHeaderComponent } from '../form-header/form-header.component';
import { Companion } from '../../models/companion';

@Component({
  selector: 'app-companion-form',
  templateUrl: './companion-form.component.html',
  styleUrl: './companion-form.component.css'
})
export class CompanionFormComponent {

  companion: Companion;

  constructor() {
    // Inicializa el objeto Companion
    this.companion = new Companion(1, '', '', 0, '', '', '', '', '', '', '');
  }


  onSubmit() {
    localStorage.setItem('companion', JSON.stringify(this.companion));
    alert('Datos guardados correctamente en localStorage');
  }

}
