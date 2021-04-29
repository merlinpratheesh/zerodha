import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage'
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zerodha';
  profileUrl: Observable<string | null>;
  constructor(private storage: AngularFireStorage) {
     const ref = this.storage.ref('/images0.27331376713415567');
     this.profileUrl = ref.getDownloadURL();
  }


}

