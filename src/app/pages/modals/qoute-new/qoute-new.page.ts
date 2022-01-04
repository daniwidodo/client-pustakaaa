import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { QouteConfirmPage } from './../qoute-confirm/qoute-confirm.page';

@Component({
  selector: 'app-qoute-new',
  templateUrl: './qoute-new.page.html',
  styleUrls: ['./qoute-new.page.scss'],
})
export class QouteNewPage implements OnInit {
  public inputData: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private alert: AlertController,
    private router: Router
  ) {
    this.inputData = this.formBuilder.group({
      quote: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
    });
  }

  ngOnInit() {
    console.log(this.inputData.value.quote);
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async confirmModal() {
    await this.alert
      .create({
        header: 'Confirm Alert',
        subHeader: 'konfirmasi',
        message: 'Are you sure?',
        buttons: [
          {
            text: 'Not Sure',
            handler: () => {
              console.log('Let me think');
            },
          },
          {
            text: 'Yes!',
            handler: () => {
              this.modalCtrl.dismiss();

              // POST to server
              // init loading

              // go to books page
              this.router.navigate(['/books']);
              console.log(this.inputData.value);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });

    // const modal = await this.modalCtrl.create({
    //   component: QouteConfirmPage,
    //   componentProps: {
    //     inputValue: this.inputData.value
    //   },
    // });
    // return await modal.present();
  }
}
