import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password:string;
  mouseOver:boolean;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  login(formData){
    this.authService.loginUser(formData.userName, formData.password);
    // console.log(formData);
    this.route.navigate(['/events']);

  
  }
}
