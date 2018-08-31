import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    public nameControl: FormControl;
    public emailControl: FormControl;
    public pointControl: FormControl;
    public users: Array<any> = [];
    public points: number = 0;
    public submit: boolean = true;

    generateUser(): void {
        if(this.submit === true){
            this.users.push({
                name: this.nameControl.value,
                email: this.emailControl.value,
                points: this.points
            });
        }else{
            console.log("You have to fill 'name' input");
        }
    }

    incrimentPoints (index){
          this.users[index].points++ ;
    }

    decrementPoints  (index){
        this.users[index].points-- ;
    }

    ngOnInit() {
        this.nameControl = new FormControl('', [Validators.required]);
        this.emailControl = new FormControl('',[Validators.minLength(5)]);

        this.nameControl.statusChanges.subscribe((status) => {
            if (this.nameControl.value.length < 1 ) {
                console.log("You have to fill 'name' input");
                this.submit = false;
            }else{
                this.submit = true;
            }
        });
    }
}
