/* import { Component, OnInit } from '@angular/core';
import { Companion } from '../../models/companion';
import { CompanionFormComponent } from '../companion-form/companion-form.component';

@Component({
  selector: 'app-companion-board',
  templateUrl: './companion-board.component.html',
  styleUrl: './companion-board.component.css'
})
export class CompanionBoardComponent implements OnInit{
  companions: Companion[] = [];

  ngOnInit(): void {
    const companionsData = localStorage.getItem('companion');
    console.log("data:",companionsData)
    if (companionsData) {
      this.companions = JSON.parse(companionsData);
    }
  }
  
  editCompanion(index:number) {
    if (companionForm) {
      companionForm.editCompanion(index); // Llamar al método editCompanion del formulario
    }
  }
  
  deleteCompanion(index:number): void {
    this.companions.splice(index,1)
    console.log("nuevo arrar: ",this.companions)
    localStorage.setItem('companion',JSON.stringify(this.companions))
  }

}

 */
import { Component, OnInit } from '@angular/core';
import { Companion } from '../../models/companion';

@Component({
  selector: 'app-companion-board',
  templateUrl: './companion-board.component.html',
  styleUrls: ['./companion-board.component.css']
})
export class CompanionBoardComponent implements OnInit {
  companions: Companion[] = [];
  selectedCompanion: Companion | null = null; // Almacena el companion seleccionado
  editIndex: number | null = null //LAST

  ngOnInit(): void {
    const companionsData = localStorage.getItem('companion');
    if (companionsData) {
      this.companions = JSON.parse(companionsData);
    }
  }

  // Método para seleccionar un acompañante y editarlo
  editCompanion(index: number): void {
    this.selectedCompanion = { ...this.companions[index] }; // Cargar el acompañante al formulario
    this.editIndex = index;
  }

  // Método para eliminar un acompañante
  deleteCompanion(index: number): void {
    this.companions.splice(index, 1); // Eliminar el acompañante del array
    localStorage.setItem('companion', JSON.stringify(this.companions)); // Actualizar localStorage
  }

  // Método que se ejecuta cuando se actualiza la lista de acompañantes desde el formulario
  onCompanionUpdated(companion: Companion): void {
    if (this.editIndex !== null) {
      this.companions[this.editIndex] = companion; // Actualizar el acompañante editado
    } else {
      this.companions.push(companion); // Si es nuevo, agregarlo
    }
    localStorage.setItem('companion', JSON.stringify(this.companions)); // Guardar cambios en localStorage
    this.selectedCompanion = null; // Resetear el formulario
    this.editIndex = null; // Resetear el índice
  
  }
}