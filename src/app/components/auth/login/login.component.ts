import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from"@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  dataLoaded=false
  constructor(
    private  formBuilder:FormBuilder,
    private authService:AuthService,
    private toasterService:ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  this.createLoginForm();
}
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }


  login(){
    let isSessionActive=localStorage.getItem("token")
    let loginModel =this.loginForm.value
      if(loginModel.email = "queso"){
        this.toasterService.error("Welcome","Success!")
        this.router.navigate(['admin'])
      }
      else {
        this.toasterService.error("Wrong username or password","Attention!")
      }
   
  }}
