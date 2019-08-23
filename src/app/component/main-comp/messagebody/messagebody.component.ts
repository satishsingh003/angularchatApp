import { Component,  AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import  { MessageServiceService } from '../../../services/message-service.service';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-messagebody',
  templateUrl: './messagebody.component.html',
  styleUrls: ['./messagebody.component.css']
})
export class MessagebodyComponent implements OnInit  {

  messageArray: Message[];
  ngOnInit() { 
      //this.scrollToBottom();
      this.MessageServiceService.getMessages().subscribe(data => {
        this.messageArray = data.map(e => {
          return {
            ...e.payload.doc.data()
          } as Message;
        })
      });
  }

  
  constructor(private MessageServiceService: MessageServiceService) { 
    // this.messageArray=this.MessageServiceService.getMessages();
  }
 

}
