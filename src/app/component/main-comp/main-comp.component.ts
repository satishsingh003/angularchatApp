import { Component,  AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HeaderComponent }      from './header/header.component'
import { FooterComponent }      from './footer/footer.component'
import { MessagebodyComponent }      from './messagebody/messagebody.component'
@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit,AfterViewChecked {

  @ViewChild('scrollMe',{read:ElementRef,static:false}) 
   myScrollContainer: ElementRef;
  constructor() { }

  ngOnInit() { 
    this.scrollToBottom();
}

ngAfterViewChecked() {        
    this.scrollToBottom();        
} 

scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}


}
