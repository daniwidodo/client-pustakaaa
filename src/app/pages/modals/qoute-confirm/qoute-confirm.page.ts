import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-qoute-confirm',
  templateUrl: './qoute-confirm.page.html',
  styleUrls: ['./qoute-confirm.page.scss'],
})
export class QouteConfirmPage implements OnInit {
  inputData: string;
  constructor(
    private navParams: NavParams,
    private router: Router,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.inputData = this.navParams.get('inputValue');
  }

  async yesButton() {
    await console.log(this.inputData);
    // POST to server

    // navigate to book page
    await this.router.navigate(['/books']);
    this.modalCtrl.dismiss();
  }

  noButton() {
    this.modalCtrl.dismiss();
  }
}
