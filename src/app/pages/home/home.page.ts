import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { QouteNewPage } from '../modals/qoute-new/qoute-new.page';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  adaData = true;
  tidakAdaData = false;

  userName: any;

  private _storage: Storage | null = null;
  constructor(private http: HttpClient, private storage: Storage, public data: DataService, private modalctrl: ModalController) {


    this.init();


    this.storage.get('user').then( (res: any) => {
      this.userName = res.name;
      console.log(res);
    });

    this.getDataQuotes();

   }

  ngOnInit() {
  }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  getDataQuotes(){
    this.data.getQuote().subscribe( (q: any) => {
      console.log(q.length);
      // if ( )
    });
  }

  async showModal(){
    const modal =  await this.modalctrl.create({
      component: QouteNewPage
    });

    return await modal.present();
  }

}
