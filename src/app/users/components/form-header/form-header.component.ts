import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrl: './form-header.component.css'
})
export class FormHeaderComponent {
  @Input() option: string ='';

}
