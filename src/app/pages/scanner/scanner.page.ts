import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  public bookData: FormGroup;

  constructor(public formBuilder: FormBuilder,) {
    this.bookData = this.formBuilder.group({
      judulBuku: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      nomorIsbn: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
   }

  ngOnInit() {
  }

  async startScanner(){
    const scanResult = await BarcodeScanner.startScan();
    console.log(scanResult);
  }

  async getSampulImage(){
    const sampulImage = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos

    });

    if(sampulImage){
      console.log(sampulImage);
      const fileName = new Date().getTime + '.jpeg';
      // const fileSaved = await Filesystem.writeFile({
      //   directory: Directory.Data,
      //   path:
      // });
    }
  }

  submitBook(){

  }

}
