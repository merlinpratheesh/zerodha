import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage'
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zerodha';
  profileUrl: any;
  angularFireStorage: any;

  constructor(private Storage: AngularFireStorage) { }
  upload(event) {
    const file = event.target.files[0];
    const filePath = '/images' + Math.random();
    const task = this.Storage.upload(filePath, file);
    




  }
}

