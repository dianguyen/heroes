import {Injectable} from '@angular/core';

@Injectable ()

export class MessageService {
  constructor () {}
  showMessage (message:string) {
    alert ("Message: " + message);
  }
}
