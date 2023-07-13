import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model:LoginModel={
    mail:'salihdemirog@gmail.com'
  };


  login(frm:NgForm){
    console.log(this.model.mail,'->',this.model.password);
    console.log(frm);
  }
}
