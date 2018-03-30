import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../service/index';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  debugger;

  constructor(private toasterService: ToasterService) {
  }

  Success() {
    this.toasterService.Success('You are awesome!', 'Success!');
  }

  Error() {
    this.toasterService.Error('This is not good!', 'Oops!');
  }

  Warning() {
    this.toasterService.Warning('You are being warned.', 'Alert!');
  }

  Info() {
    this.toasterService.Info('Just some information for you.', 'Information!');
  }

  Custom() {
    this.toasterService.Success('Order delivery correctly', 'Success');
  }

}
