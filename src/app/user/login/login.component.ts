import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password:string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(formData){
    this.authService.loginUser(formData.userName, formData.password);
  
  }
}
