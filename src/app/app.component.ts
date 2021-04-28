import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zerodha';
  
  imgsrc = 'https://lh3.googleusercontent.com/a-/AOh14GjNt4hNEB71uqRWBO1t0wf2JdxZjQTA51f9lSTtqA=s96-c';

  constructor(
    public _d: DomSanitizer
  ) { }

  fileChange(e) {
    if(e.srcElement.files[0]!=undefined){
    const file = e.srcElement.files[0]; 
    this.imgsrc = window.URL.createObjectURL(file); 
    }
  }
}

