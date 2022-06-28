import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gestore-spettacoli',
  templateUrl: './gestore-spettacoli.component.html',
  styleUrls: ['./gestore-spettacoli.component.css'],
})
export class GestoreSpettacoliComponent implements OnInit {
  @Input() arrayNomeSpettacoli;
  @Output() arrayNomeSpettacoliChange = new EventEmitter();
  showOld: boolean = false;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
  elementiPlatea: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //postiPlatea: number[] = this.filePlatea;
  elementiPalco: number[] = [1, 2, 3, 4, 5, 6];
  //postiPalco: number[] = this.filePalco;
  constructor() {}
  confermaSpettacoli() {
    console.log(this.filePlatea);
  }
  ngOnInit() {}
}
