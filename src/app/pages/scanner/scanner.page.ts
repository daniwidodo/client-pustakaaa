import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';


import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  public bookData: FormGroup;

  constructor(public formBuilder: FormBuilder, private alertCtrl: AlertController) {

   }

  ngOnInit() {
  }



}
