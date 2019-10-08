import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:  './profile.component.html',
    styles:[`
        em {float:right; color: #E05C65; padding-left: 10px;}
        .error input {background-color: #E05C65;}
        `
    ]
})
export class ProfileComponent implements OnInit{
    
    profileForm: FormGroup
    private firstName:FormControl
    private lastName:FormControl

    constructor(private authService : AuthService, private route: Router){}

    ngOnInit(): void {
      
        this.firstName = new FormControl(this.authService.currentUser.firstName,[Validators.required, Validators.pattern("[a-zA-z].*")]);
        this.lastName = new FormControl(this.authService.currentUser.lastName,Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName

        })
     
        }
        validateLastName(): boolean
        {
            return(this.lastName.valid || this.lastName.untouched );
        }
        validateFirstName(): boolean
        {
            return (this.firstName.valid || this.firstName.untouched );
            
        
        }
    cancel()
    {
        this.route.navigate(['events']);
    }
    saveProfile(formdata)
    {
        if(this.profileForm.valid)
        {
        this.authService.updateCurrentUser(formdata.firstName, formdata.lastName);
        this.route.navigate(['events']);
    }
}
}
