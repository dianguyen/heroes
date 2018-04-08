import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }
flowerList: object [];

  getList(type?: string) {
   if (type! = undefined) {
     return this.httpClient.get("http://localhost:3000/products?type=" + type);
   }

   else {
     return this.httpClient.get("http://localhost:3000/products");
   }
}
}