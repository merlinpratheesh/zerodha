import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {AngularFireStorage} from '@angular/fire/storage'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zerodha';
  
  filePath:String
  constructor(private afStorage: AngularFireStorage) { }
  upload(event) {    
    this.filePath = event.target.files[0]
  }
  uploadImage(){
    console.log(this.filePath)
    this.afStorage.upload('/images'+Math.random()+this.filePath, this.filePath);
    
      
  }
}

