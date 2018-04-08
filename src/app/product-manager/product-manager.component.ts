import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor(private dataService: DataService) { }

  title = "Quản Lý Sản Phẩm";

  public dataList: Product [];

  ngOnInit() {
 this.getList();
  }

  getList() {
    this.dataService.getList().subscribe(res => {
      this.dataList = <Product []> res;
    })
  }

}



interface Product {
  name: string,
  type:string,
  price: number,
  img:string,
  description: string,
}

