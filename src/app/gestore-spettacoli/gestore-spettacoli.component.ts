import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { spettacolo, prenotazioni } from '../app.component';

export class nuovoSpettacolo implements spettacolo {
  nomeSpettacolo: string;
  prenotazioni;
  constructor(nomeSpettacolo) {
    this.nomeSpettacolo = nomeSpettacolo;
  }
  //{ nomeSpettacolo: 'spettacolo 1', teatro: prenotazioni }
  genera(
    filePlatea: number,
    postiPlatea: number,
    filePalco: number,
    postipalco: number
  ) {
    console.log(typeof filePlatea, postiPlatea, filePalco, postipalco);
    return {
      nomeSpettacolo: <string>this.nomeSpettacolo,
      teatro: { platea: Array(filePlatea).fill('ciao') },
    };
  }
}
/**
 * platea: Array(filePlatea)
          .fill('fila')
          .map(() =>
            Array(postiPlatea)
              .fill('posto')
              .map((val, posto) => {
                return undefined;
              })
          ),
        palco: Array(filePalco)
          .fill('fila')
          .map(() =>
            Array(postipalco)
              .fill('posto')
              .map((val, posto) => {
                return undefined;
              })
          ),
 */
@Component({
  selector: 'app-gestore-spettacoli',
  templateUrl: './gestore-spettacoli.component.html',
  styleUrls: ['./gestore-spettacoli.component.css'],
})
export class GestoreSpettacoliComponent implements OnInit {
  @Input() arrayNomeSpettacoli;
  @Output() arrayNomeSpettacoliChange = new EventEmitter();
  @Output() nuovoSpettacoloEmitter = new EventEmitter();
  nomeSpettacolo = new FormControl<string>('');
  showOld: boolean = false;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
  elementiPlatea: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  elementiPalco: number[] = [1, 2, 3, 4, 5, 6];
  nuovoSpettacolo;
  constructor() {}
  confermaSpettacoli() {
    this.nuovoSpettacolo = new nuovoSpettacolo(
      this.nomeSpettacolo.value
    ).genera(
      this.filePlatea,
      this.postiPlatea,
      this.filePalco,
      this.postiPalco
    );
    console.log(this.nuovoSpettacolo);
    this.arrayNomeSpettacoli.push(this.nuovoSpettacolo.nomeSpettacolo);
    this.arrayNomeSpettacoliChange.emit(this.arrayNomeSpettacoli);
    this.nuovoSpettacoloEmitter.emit(this.nuovoSpettacolo);
  }
  nomeSpettacoloInput($event) {
    console.log($event.target.value);
  }

  NewresetPrenotazioni() {
    const prenotazioni: object = {
      platea: new Array(this.filePlatea).fill('fila').map(() =>
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
