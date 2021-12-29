import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  valueOfToken: any;
  token: any;
  tokenNotExist = true;
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public navCtrl: NavController) {
    this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;

    // eslint-disable-next-line no-underscore-dangle
    const tokenValue: any = this.storage.get('token').then((res) => {
      this.valueOfToken = res;
      this.token = this.valueOfToken;

      if (this.token === null) {
        console.log('no token exist!');
        this.tokenNotExist =true;
      } else if (this.token != null) {
        console.log('token exists!');
        this.navCtrl.navigateForward('home');
        this.tokenNotExist = false;
      }

      console.log(tokenValue);
      console.log(this.valueOfToken);
      console.log('token not Exist :',this.tokenNotExist);
    });
    // eslint-disable-next-line no-underscore-dangle

    // eslint-disable-next-line no-underscore-dangle
    // __zone_symbol__value
  }
}
