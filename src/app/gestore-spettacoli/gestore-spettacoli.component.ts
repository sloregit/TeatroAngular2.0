import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { spettacolo, prenotazioni } from '../app.component';

export class addSpettacolo implements spettacolo {
  nomeSpettacolo: string;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postipalco: number;
  prenotazioni;
  constructor(nomeSpettacolo, filePlatea, postiPlatea, filePalco, postipalco) {
    this.nomeSpettacolo = nomeSpettacolo;
    this.filePlatea = filePlatea;
    this.postiPlatea = postiPlatea;
    this.filePalco = filePalco;
    this.postipalco = postipalco;
  }
  genera() {
    this.prenotazioni = {
      platea: Array(this.filePlatea)
        .fill('fila')
        .map(() =>
          Array(this.postiPlatea)
            .fill('posto')
            .map((val, posto) => {
              return (val = undefined);
            })
        ),
      palco: Array(this.filePalco)
        .fill('fila')
        .map(() =>
          Array(this.postipalco)
            .fill('posto')
            .map((val, posto) => {
              return (val = undefined);
            })
        ),
    };
  }
}
@Component({
  selector: 'app-gestore-spettacoli',
  templateUrl: './gestore-spettacoli.component.html',
  styleUrls: ['./gestore-spettacoli.component.css'],
})
export class GestoreSpettacoliComponent implements OnInit {
  @Input() arrayNomeSpettacoli;
  @Output() arrayNomeSpettacoliChange = new EventEmitter();
  nomeSpettacolo = new FormControl<string>('');
  showOld: boolean = false;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
  elementiPlatea: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  elementiPalco: number[] = [1, 2, 3, 4, 5, 6];
  nuovoSpettacolo: spettacolo;
  constructor() {}
  /*confermaSpettacoli() {
    console.log(
      this.nomeSpettacolo.value,
      ['Platea', this.filePlatea, this.postiPlatea],
      ['Palco', this.filePalco, this.postiPalco]
    );
  }*/
  confermaSpettacoli() {
    this.nuovoSpettacolo = new addSpettacolo(
      this.nomeSpettacolo.value,
      this.filePlatea,
      this.postiPlatea,
      this.filePalco,
      this.postiPalco
    );
    console.log(this.nuovoSpettacolo);
  }
  nomeSpettacoloInput($event) {
    console.log($event.target.value);
  }

  NewresetPrenotazioni() {
    const prenotazioni: object = {
      platea: Array(6)
        .fill('fila')
        .map(() =>
          Array(10)
            .fill('posto')
            .map((val, posto) => {
              return (val = 'x');
            })
        ),
      palco: Array(4)
        .fill('fila')
        .map(() =>
          Array(4)
            .fill('posto')
            .map((val, posto) => {
              return (val = 'x');
            })
        ),
    };
    const sale = [
      { nomeSpettacolo: 'spettacolo 1', teatro: prenotazioni },
      { nomeSpettacolo: 'spettacolo 2', teatro: prenotazioni },
      { nomeSpettacolo: 'spettacolo 3', teatro: prenotazioni },
    ];
    console.log(sale);
    /*this.AppDBservice.SetPrenotazioni$(JSON.stringify(sale)).subscribe(
      (val) => (this.conferma = 'Teatro resettato')
    );*/
  }
  ngOnInit() {}
}
