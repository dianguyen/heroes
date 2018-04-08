import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-detail', 
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

flowerList:object []
  title: string;
  type: string;

  constructor(private messageService: MessageService, private dataService: DataService )
  {
    this.title = "Sản phẩm bán chạy"
  }
  

  ngOnInit() {
   // this.flowerList = this.dataService.getList();
  }

}
