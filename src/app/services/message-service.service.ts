import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { Message } from './src/app/models/message.model';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private messageArray: any = [];
  private messageTxt: any;
  private today: number;
  private PhoneNo:any;
  constructor(private firestore: AngularFirestore,private route: ActivatedRoute,
    private router: Router) { }
  // sendMessage(message: string) {
  //   this.today=Date.now();
  //   this.messageArray.push( {message:message,currtime:this.today});
  //   console.log("this.messageArray", this.messageArray);

  // }
  getMessages() {
    // this.route.params.subscribe(params => {
    //   // this.id = +params['id']; // (+) converts string 'id' to a number
    //   console.log("params", params['id']);
    //   this.PhoneNo = params['id'];

    //   // In a real app: dispatch action to load the details here.
    // });
    return this.firestore.collection('messages',ref => 
    ref.orderBy('currtime','asc')).snapshotChanges();
  }
  sendMessage(message: any,phoneNo: number ){
    this.today=Date.now();
    this.firestore.collection('messages').add({message:message,currtime:this.today, messagePhoneNo:phoneNo});
  }
  updatePolicy(message: any){
    delete message.id;
    this.firestore.doc('messages/' + message.id).update(message);
}
}
