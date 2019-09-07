import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../../../services/message-service.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  messagebox: any;
  phoneNo: any;

  constructor(private MessageServiceService: MessageServiceService, private route: ActivatedRoute,
    private router: Router) { }
  sendMessage(messagebox) {
    console.log("messagebox", this.messagebox)
    if (messagebox) {
      this.MessageServiceService.sendMessage(this.messagebox, this.phoneNo);
      this.messagebox = "";
    }
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("params", params['id']);
      this.phoneNo = params['id'];

      // In a real app: dispatch action to load the details here.
    });
  }

}
