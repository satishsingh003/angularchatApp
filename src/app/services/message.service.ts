import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from 'src/app/models/message.model';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore: AngularFirestore) { }
  getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
}
}
