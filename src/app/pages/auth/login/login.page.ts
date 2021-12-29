import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from './../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginData: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public navCtrl: NavController


  ) {
    this.loginData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  ngOnInit() {}

  login() {
    //use this.loginData.value to authenticate the user
    this.authService
      .login(this.loginData.value)
      .then(

        () => this.redirectToHome()
      )
      .catch((e) => console.log('login error', e));
  }

  redirectToHome() {
    this.navCtrl.navigateForward('home');
    // this.menuCtrl.enable(true);
  }

  redirectToRegister() {
    this.navCtrl.navigateForward('register');
    // this.menuCtrl.enable(true);
  }


}
