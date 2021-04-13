  
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserdataService } from './service/userdata.service';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, Observer } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';


const CHAT_URL = 'ws://echo.websocket.org/';

export interface message{
  author:string;
  message:string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

	public messages: Subject<message>;

	constructor(wsService: UserdataService) {
		this.messages = <Subject<message>>wsService
			.connect(CHAT_URL)
			.pipe(map((response: MessageEvent): message => {
				let data = JSON.parse(response.data);
				return {
					author: data.author,
					message: data.message
				}
			}));
	}
}