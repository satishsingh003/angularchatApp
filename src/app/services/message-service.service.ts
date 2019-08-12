import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private messageArray: any = [];
  private messageTxt: any;

  constructor() { }
  sendMessage(message: string) {
    this.messageArray.push(message);
    console.log("this.messageArray", this.messageArray);

  }
  getMessages() {
    return this.messageArray;
  }
}
