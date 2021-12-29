import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerData: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService, public navCtrl: NavController) {
    this.registerData = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  ngOnInit() {}

  register(){
    console.log(this.registerData);
    this.authService
      .register(this.registerData.value)
      .then(

        () => this.redirectToHome()
      )
      .catch((e) => console.log('login error', e));
  }

  redirectToHome() {
    this.navCtrl.navigateForward('login');
    // this.menuCtrl.enable(true);
  }
}
