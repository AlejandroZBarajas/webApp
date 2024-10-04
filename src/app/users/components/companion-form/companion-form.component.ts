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

  ngOnChanges(): void {
    if (this.companion) {
      
      this.currentCompanion = { ...this.companion };
    } else {
      this.resetForm(); 
    }
  }

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