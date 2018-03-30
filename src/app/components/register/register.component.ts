import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserDataService } from '../../service/index';


@Component({
  moduleId: module.id,
  // selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {};
  loading = false;

  imageSrc: any = './images/img-01-png';
  constructor( private router: Router,
        private userService: UserDataService,
        private alertService: AlertService) { }

        register() {
          debugger;
          this.loading = true;
          this.userService.create(this.model)
              .subscribe(
                  data => {
                      this.alertService.success('Registration successful', true);
                      this.router.navigate(['/login']);
                  },
                  error => {
                      this.alertService.error(error);
                      this.loading = false;
                  });
      }
}
