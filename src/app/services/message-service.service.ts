import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private messageArray: any = [];
  private messageTxt: any;
  private today: number;
  constructor() { }
  sendMessage(message: string) {
    this.today=Date.now();
    this.messageArray.push( {message:message,currtime:this.today});
    console.log("this.messageArray", this.messageArray);

  }
  getMessages() {
    return this.messageArray;
  }
}
