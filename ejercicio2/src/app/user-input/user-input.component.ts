import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  name:string="";
  price:string="";
  productsList=[];

  constructor() { }

  addProduct( ){
    console.log('New product was added')
    let newProduct ={
      "name": this.name,
      "price": this.price
    }
this.productsList.push(newProduct);
  }


  limpiaCajasEjecutado()
{
console.log("Limpiacajas ejecutado")
}

  ngOnInit(): void {
  }

}
