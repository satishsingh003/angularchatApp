import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from 'src/app/models/message.model';
@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private messageArray: any = [];
  private messageTxt: any;
  private today: number;
  constructor(private firestore: AngularFirestore) { }
  // sendMessage(message: string) {
  //   this.today=Date.now();
  //   this.messageArray.push( {message:message,currtime:this.today});
  //   console.log("this.messageArray", this.messageArray);

  // }
  getMessages() {
    return this.firestore.collection('messages').snapshotChanges();
  }
  sendMessage(message: Message){
    this.today=Date.now();
    //this.messageArray.push( {message:message,currtime:this.today, messagePhoneNo: 8056275607});
    this.firestore.collection('messages').add({message:message,currtime:this.today, messagePhoneNo: 8056275607})
    //console.log(this.firestore.collection('messages').add({message:message,currtime:this.today, messagePhoneNo: 8056275607}));
  }
  updatePolicy(message: Message){
    delete message.id;
    this.firestore.doc('messages/' + message.id).update(message);
}
}
