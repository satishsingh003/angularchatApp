import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
    private router: Router) { }
  loginApp(phno) {
    //console.log("messagebox",phno);
    this.router.navigate(['main', { id: phno }]);
  }
  ngOnInit() {
  }

}
