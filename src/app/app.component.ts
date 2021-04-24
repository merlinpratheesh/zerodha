import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserdataService } from './service/userdata.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 
import { webSocket } from "rxjs/webSocket";

const subject = webSocket("wss://ws.kite.trade?api_key=909lcbtyglf6ks4o&access_token=5C8jpQYxi4qm1h8pZUMgyTlsJqPYpPPh");
subject.subscribe(
  msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
  err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
  () => console.log('complete') // Called when connection is closed (for whatever reason).
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zerodha';

  products: any[];
  clickMessage: any[];

  constructor(private formBuilder: FormBuilder,private router : Router, private dataService: UserdataService) {}



  ngOnInit() {
    console.log('hi');
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })  
  }

  onClickMe() {
    this.clickMessage = this.products;
  }
  
  }



  


