import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../../service/index';

@Component({
  moduleId: module.id,
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {
    this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnInit() {
    this.subscription.unsubscribe();
  }

}
