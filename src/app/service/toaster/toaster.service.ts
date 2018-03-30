import { Injectable } from '@angular/core';
declare var  toaster: any;

@Injectable()
export class ToasterService {

  constructor() { }

Success(title: string, menssage: string) {
  toaster.success(title, menssage);
}

Warning(title: string, menssage: string) {
  toaster.success(title, menssage);
}

Error(title: string, menssage: string) {
  toaster.success(title, menssage);
}

Info(title: string, menssage: string) {
  toaster.success(title, menssage);
}


}
