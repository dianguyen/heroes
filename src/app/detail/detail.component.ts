import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

flowerList:object []
  title = "Sản phẩm bán chạy"
  constructor() { }

  ngOnInit() {
    this.flowerList =[
      {
        name: "Hoa 1",
        price: "400,000",
        img: "assets/img/hoa1.jpg",
        description: "Chúc mừng sinh nhật"
      },
      {
        name: "Hoa 2",
        price: "350,000",
        img: "assets/img/hoa2.jpg",
        description: "Giai điệu trái tim"
      },
      {
        name: "Hoa 3",
        price: "350,000",
        img: "assets/img/hoa3.jpg",
        description: "Hoa sinh nhật"
      },
      {
        name: "Hoa 4",
        price: "200,000",
        img: "assets/img/hoa4.jpg",
        description: "Hoa sự kiện"
      },
      {
        name: "Hoa 5",
        price: "200,000",
        img: "assets/img/hoa5.jpg",
        description: "Hoa sinh nhật / sự kiện"
      },
      {
        name: "Hoa 6",
        price: "600,000",
        img: "assets/img/hoa6.jpg",
        description: "Thank you!"
      },
      {
        name: "Hoa 7",
        price: "500,000",
        img: "assets/img/hoa7.jpg",
        description: "Hoa sinh nhật"
      },
      {
        name: "Hoa 8",
        price: "450,000",
        img: "assets/img/hoa8.jpg",
        description: "Hoa sự kiện"
      },
      {
        name: "Hoa 9",
        price: "350,000",
        img: "assets/img/hoa9.jpg",
        description: "Hoa trang trí"
      },
      {
        name: "Hoa 10",
        price: "200,000",
        img: "assets/img/hoa10.jpg",
        description: "Hoa trang trí"
      },
      {
        name: "Hoa 11",
        price: "300,000",
        img: "assets/img/hoa11.jpg",
        description: "Hoa hồng"
      },
      {
        name: "Hoa 12",
        price: "250,000",
        img: "assets/img/hoa12.jpg",
        description: "Hoa sinh nhật"
      }
    ]
  }

}
