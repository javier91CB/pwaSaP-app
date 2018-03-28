import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { debug } from 'util';
import { Router } from '@angular/router';
import { UserDataService } from './service/user/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstImages: any = './app/img-01.png';
  title = 'Home';
  constructor(private router: Router, private user: UserDataService) {}

  ngOnInit() {
  }

  loginUser(e) {
    debugger;
    e.preventDefault();
    console.log(e);
    const username =  e.target.elements[0].value;
    const password = e.target.elements[1].value;

    if (username === 'admin@admin.com' && password === 'admin') {
        //  this.user.setUserLoggenIn();
         this.router.navigate(['home']);
    }
     console.log(username, password);
  }

}
