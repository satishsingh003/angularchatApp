import { Component, OnInit } from '@angular/core';
import  { MessageServiceService } from '../../../services/message-service.service';

@Component({
  selector: 'app-messagebody',
  templateUrl: './messagebody.component.html',
  styleUrls: ['./messagebody.component.css']
})
export class MessagebodyComponent implements OnInit {
  private messageArray: any = [];

  constructor(private MessageServiceService: MessageServiceService) { 
     this.messageArray=this.MessageServiceService.getMessages();
  }
  ngOnInit() {
    
  }

}
