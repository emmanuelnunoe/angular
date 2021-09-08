import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-matematico-result',
  templateUrl: './matematico-result.component.html',
  styleUrls: ['./matematico-result.component.css']
})
export class MatematicoResultComponent implements OnInit {

  constructor() { }
  // recibe un valor numerico de un componente externo
  @Input() resultadoAmostrar: number;
  @Output() limpiaCajas = new EventEmitter();
  ngOnInit(): void {
  }

}
