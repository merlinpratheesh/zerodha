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
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  profileUrl: Observable<string | null>;
  constructor(private storage: AngularFireStorage) {

    const ref = this.storage.ref('/users');
    this.profileUrl = ref.getDownloadURL();

  }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'users';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }
}

