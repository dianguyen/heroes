import { Component, OnInit, Input, Output } from '@angular/core';

interface FlowerData {
  name: string,
  img: string,
  description: string,
  price: number
}

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  @Input() flower: FlowerData
  
  constructor() { }

  ngOnInit() {
  }

}
