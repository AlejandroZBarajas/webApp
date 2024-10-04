import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Accompanied } from '../../models/accompanied';

@Component({
  selector: 'app-accompanied-form',
  templateUrl: './accompanied-form.component.html',
  styleUrl: './accompanied-form.component.css'
})
export class AccompaniedFormComponent  implements OnChanges{
  @Input() accompanied: Accompanied | null = null
  @Output() accompaniedUpdated = new EventEmitter<Accompanied>()

  currentAccompanied: Accompanied = this.createEmptyAccompanied()

  ngOnChanges():void{
    if(this.accompanied){
      this.currentAccompanied = {...this.accompanied}
    }else{
      this.resetForm()
    }
  }

  createEmptyAccompanied(): Accompanied{
    return{
      nombre: '',
      sexo: '',
      edad: 0,
      ciudad: '',
      orientacion: '',
      curp:''
    }
  }

  onSubmit():void{
    this.accompaniedUpdated.emit({...this.currentAccompanied})
    this.resetForm()
  }

  resetForm():void{
    this.currentAccompanied = this.createEmptyAccompanied()
  }
}
