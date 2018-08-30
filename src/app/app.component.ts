import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nameControl:FormControl;
  public emailControl:FormControl;
// OnInIt chi ashxati   chem haskna inchic e
   constructor(){
     this.nameControl = new FormControl('Mike');
     this.emailControl = new FormControl();
     this.nameControl.valueChanges.subscribe((value) => console.log(value));
       this.emailControl.valueChanges.subscribe((value) => console.log(value));
   }


}
