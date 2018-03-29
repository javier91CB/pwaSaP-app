import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imageSrc: any = './images/img-01-png';

  constructor() { }

  ngOnInit() {
  }

  loginUser($event) {}
}
