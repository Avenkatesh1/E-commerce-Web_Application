import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    userName:"",
    passwored:""
  }

  constructor(private route:Router){}

  onLogin(){
    if(this.loginObj.userName == "venkat" && this.loginObj.passwored == "143143"){
      this.route.navigateByUrl("/products")
      alert("User Login Successfully")
    }else{
      alert("In Valid Credentials")
    }
  }
}
