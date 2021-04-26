import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service';
import {webSocket} from 'rxjs/webSocket'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ UserdataService ]

})
export class AppComponent {

title="client";
message='hello';
subject=webSocket('wss://ws.kite.trade?api_key=909lcbtyglf6ks4o&access_token=5C8jpQYxi4qm1h8pZUMgyTlsJqPYpPPh');

sendToServer($event){
	this.subject.subscribe();
	this.subject.next(this.message);
	this.subject.complete();
}




}