import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginModel } from 'src/app/models/login.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService,
    private messageService: MessageService,
    private router:Router) { }

  model: LoginModel = {
    mail: 'salih@sldyazilim.com'
  };

  loginForm: FormGroup = new FormGroup({
    mail: new FormControl('salih@sldyazilim.com', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });


  login(frm: NgForm) {
    console.log(this.model.mail, '->', this.model.password);
    console.log(frm);
  }

  login2() {
    console.log(this.loginForm.value);
    console.log(this.loginForm);

    this.userService.login({
      mail: this.loginForm.value.mail,
      password: this.loginForm.value.password
    }).subscribe(token => {
      console.log('token',token);
      if (!token)
        this.messageService.add({ severity: 'error', summary: 'Hata Oluştu', detail: 'Kullanıcı adı veya şifre hatalı' });
        else
        this.router.navigateByUrl('/dashboard');
    });
  }


  public get password(): any {
    return this.loginForm.controls['password'];
  }

}
