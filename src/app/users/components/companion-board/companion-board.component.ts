import { Component, OnInit } from '@angular/core';
import { Companion } from '../../models/companion';

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
  
  editCompanion(companion: Companion) {
    
  }
  
  deleteCompanion(id: number) {

  }

}
