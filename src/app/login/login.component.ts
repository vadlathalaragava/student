import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = {username:"",password:""};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAbout(){
    this.router.navigate(['/student']);

  }
  onLogin(){
  	if(this.data.username == this.data.password){

     // alert('username / password is correct.');
  		 this.router.navigate(['/student']);
  	}else{
  		alert('username / password is not correct.');
  	}
  }

}
