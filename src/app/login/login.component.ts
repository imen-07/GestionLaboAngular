import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';
import {NgZone} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService:AuthService, private router:Router, private ngzone:NgZone) { }

  ngOnInit(): void {
  }

  GOOGLE(): void {
this.AuthService.doGoogleLogin().then(()=>this.successRedirect()).catch(error=>{console.log("404 not found")});

  }

  successRedirect():void{
    this.ngzone.run(()=>{this.router.navigate(['/members'])})
  }

}
