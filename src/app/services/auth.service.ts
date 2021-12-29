import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endPoint } from './../../environments/environment';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
// import { Storage } from '@capacitor/storage';
// import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root',
})
export class AuthService {


  tokenId: string;
  userId: any;
  userName: any;

  private _storage: Storage | null = null;

  constructor(private http: HttpClient, private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  login(credentials: any) {
    return this.http
      .post(endPoint + 'api/login', credentials)
      .toPromise()
      .then((data: any) => {
        console.log(data);

        this.tokenId = data.token;
        this.userId = data.user;

        this.storage.set('token', this.tokenId);
        this.storage.set('user', this.userId);
        console.log(this.tokenId, this.userId);

      })
      .catch((e) => console.log('login error', e));
  }

  register(credentials: any){
    return this.http
    .post(endPoint + 'api/register', credentials)
    .toPromise()
    .then((data: any) => {
      console.log(data);
    })
    .catch((e) => console.log('login error', e));
  }

  user(){

  }
}
