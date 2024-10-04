import { Component, OnInit } from '@angular/core';
import { Accompanied } from '../../models/accompanied';

@Component({
  selector: 'app-accompanied-board',
  templateUrl: './accompanied-board.component.html',
  styleUrl: './accompanied-board.component.css'
})
export class AccompaniedBoardComponent {
  accompanieds: Accompanied[] = []
  selectedAccompanied: Accompanied | null = null
  editIndex: number | null = null

  ngOnInit():void{
    const accompaniedData = localStorage.getItem('accompanied')
    if(accompaniedData){
      this.accompanieds = JSON.parse(accompaniedData)
    }
  }

  editAccompanied(index:number):void{
    this.selectedAccompanied= {...this.accompanieds[index]}
    this.editIndex=index
  }

  deleteAccompanied(index: number ):void{
    this.accompanieds.splice(index,1)
    localStorage.setItem('accompanied',JSON.stringify(this.accompanieds))
  }

  onAccompaniedUpdated(accompanied: Accompanied):void{
    if(this.editIndex !== null){
      this.accompanieds[this.editIndex]=accompanied
    }else{
      this.accompanieds.push(accompanied)
    }
    localStorage.setItem('accompanied', JSON.stringify(this.accompanieds))
    this.selectedAccompanied = null
    this.editIndex = null
  }
}
