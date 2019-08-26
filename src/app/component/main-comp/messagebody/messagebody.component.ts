import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MessageServiceService } from '../../../services/message-service.service';
import { Message } from '../../../../../src/app/models/message.model';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
@Component({
  selector: 'app-messagebody',
  templateUrl: './messagebody.component.html',
  styleUrls: ['./messagebody.component.css']
})
export class MessagebodyComponent implements OnInit {

  messageArray: Message[];
  ngOnInit() {
    //this.scrollToBottom();
    this.route.params.subscribe(params => {
      // this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("params", params['id']);
      // In a real app: dispatch action to load the details here.
    });
    this.MessageServiceService.getMessages().subscribe(data => {
      this.messageArray = data.map(e => {
        return {
          ...e.payload.doc.data()
        } as Message;
      })
    });
  }


  constructor(private MessageServiceService: MessageServiceService, private route: ActivatedRoute,
    private router: Router) {
    // this.messageArray=this.MessageServiceService.getMessages();
  }


}
