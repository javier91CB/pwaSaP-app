import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToasterService } from '../../service/index';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private toasterService: ToasterService) {
  }

  Success() {
    debugger;
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

  ngOnInit() {
  }

}
