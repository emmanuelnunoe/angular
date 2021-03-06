import { Component,  EventEmitter, OnInit, Input,Output } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor() { }
  @Input() productsToShow;
  @Output() limpiaCajas = new EventEmitter();
  showProducts(){
    console.log(this.productsToShow)
  }
  ngOnInit(): void {
  }

}
