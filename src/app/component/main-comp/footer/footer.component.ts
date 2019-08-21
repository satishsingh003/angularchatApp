import { Component, OnInit } from '@angular/core';
import  { MessageServiceService } from '../../../services/message-service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  messagebox:any;
  constructor(private MessageServiceService: MessageServiceService) { }
  sendMessage(messagebox){
    console.log("messagebox",messagebox)
    this.MessageServiceService.sendMessage(this.messagebox);
  }
  ngOnInit() {
  }

}
