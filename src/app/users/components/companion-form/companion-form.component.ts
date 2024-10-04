/* import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Companion } from '../../models/companion';

@Component({
  selector: 'app-companion-form',
  templateUrl: './companion-form.component.html',
  styleUrl: './companion-form.component.css'
})
export class CompanionFormComponent {
  @Input() companion: Companion | null = null
  @Output() companionUpdated = new EventEmitter<Companion[]>();

  acomp: Companion [] = []
  isEdit: boolean = false;  // se agrega esto
  editIndex: number | null = null; // yesto

 constructor() {
    this.companion = {
      nombre: '',
      sexo: '',
      edad: 0,
      ciudad: '',
      estatura: '',
      peso: '',
      complexion: '',
      piel: '',
      cabello: '',
      orientacion: '',   
      } 

    const companionsData = localStorage.getItem('companion');
    if (companionsData) {
      this.acomp = JSON.parse(companionsData);
    }
  }

  ngOnChanges(): void {
    if (this.companion) {
      this.isEdit = true;
    }
  }
  
  onSubmit(): void {
    if (this.isEdit && this.editIndex !== null) {
      this.acomp[this.editIndex] = { ...this.companion } as Companion;
    } else {
      this.acomp.push({ ...this.companion } as Companion);
    }
    localStorage.setItem('companion', JSON.stringify(this.acomp));
    this.companionUpdated.emit(this.acomp); 
    this.resetForm();
  }

  resetForm(): void {
    this.companion = {
      nombre: '',
      sexo: '',
      edad: 0,
      ciudad: '',
      estatura: '',
      peso: '',
      complexion: '',
      piel: '',
      cabello: '',
      orientacion: '',
    };
    this.isEdit = false;
    this.editIndex = null;
  }
 
  editCompanion(index: number): void {
    this.companion = { ...this.acomp[index] };
    this.isEdit = true;
    this.editIndex = index;
  }
}
 */

import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Companion } from '../../models/companion';

@Component({
  selector: 'app-companion-form',
  templateUrl: './companion-form.component.html',
  styleUrls: ['./companion-form.component.css']
})
export class CompanionFormComponent implements OnChanges {
  @Input() companion: Companion | null = null;
  @Output() companionUpdated = new EventEmitter<Companion>();

  currentCompanion: Companion = this.createEmptyCompanion();

  // Cada vez que el @Input 'companion' cambia, sincronizamos el formulario
  ngOnChanges(): void {
    if (this.companion) {
      this.currentCompanion = { ...this.companion };
    } else {
      this.resetForm();
    }
  }

  // Crear un acompañante vacío
  createEmptyCompanion(): Companion {
    return {
      nombre: '',
      sexo: '',
      edad: 0,
      ciudad: '',
      estatura: '',
      peso: '',
      complexion: '',
      piel: '',
      cabello: '',
      orientacion: ''
    };
  }

  onSubmit(): void {
    this.companionUpdated.emit({ ...this.currentCompanion });
    this.resetForm();
  }

  resetForm(): void {
    this.currentCompanion = this.createEmptyCompanion();
  }
}