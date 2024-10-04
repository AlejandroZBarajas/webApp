
import { Component, OnInit } from '@angular/core';
import { Companion } from '../../models/companion';

@Component({
  selector: 'app-companion-board',
  templateUrl: './companion-board.component.html',
  styleUrls: ['./companion-board.component.css']
})
export class CompanionBoardComponent implements OnInit {
  companions: Companion[] = [];
  selectedCompanion: Companion | null = null; 
  editIndex: number | null = null 

  ngOnInit(): void {
    const companionsData = localStorage.getItem('companion');
    if (companionsData) {
      this.companions = JSON.parse(companionsData);
    }
  }


  editCompanion(index: number): void {
    this.selectedCompanion = { ...this.companions[index] };
    this.editIndex = index;
  }


  deleteCompanion(index: number): void {
    this.companions.splice(index, 1); 
    localStorage.setItem('companion', JSON.stringify(this.companions)); 
  }

  
  onCompanionUpdated(companion: Companion): void {
    if (this.editIndex !== null) {
      this.companions[this.editIndex] = companion; 
    } else {
      this.companions.push(companion); 
    }
    localStorage.setItem('companion', JSON.stringify(this.companions)); 
    this.selectedCompanion = null; 
    this.editIndex = null; 
  
  }
}