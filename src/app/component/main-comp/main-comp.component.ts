import { Component, OnInit } from '@angular/core';
import { HeaderComponent }      from './header/header.component'
import { FooterComponent }      from './footer/footer.component'
import { MessagebodyComponent }      from './messagebody/messagebody.component'
@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
