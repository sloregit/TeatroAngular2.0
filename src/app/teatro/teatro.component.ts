import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Teatro } from '../app.component';

export class Prenotazione {
  zona: string;
  nome: string;
  fila: number;
  posto: number;
  constructor(zona: string, nome: string, fila: number, posto: number) {
    this.zona = zona;
    this.nome = nome;
    this.fila = fila;
    this.posto = posto;
  }
}

export class PrenotazioneMultipla {
  selezionati;
  constructor() {
    this.selezionati = [];
  }
  aggiungi(prenotazione) {
    this.selezionati.push(prenotazione);
  }
  rimuovi(fila: number, posto: number) {
    this.selezionati.map((old, i) => {
      if (old.fila === fila && old.posto === posto) {
        this.selezionati.splice(i, 1);
      }
    });
  }
}

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  @Input() teatro: Teatro;
  @Input() prenotazioneMultipla: PrenotazioneMultipla;
  @Input() nomeInserito: string;
  @Output() nomeInseritoChange = new EventEmitter<string>();
  @Output() teatroChange = new EventEmitter<undefined>();
  nomePrenotato: string;
  constructor() {}
  // riceve il nome della prenotazione da zona-component
  mostraNome($event) {
    this.nomePrenotato = $event;
  }
  //torna alla selezione degli spettacoli
  indietro() {
    this.nomeInserito = undefined;
    this.teatro = undefined;
    this.teatroChange.emit(undefined);
    this.nomeInseritoChange.emit(undefined);
  }
  ///////////////////////////////////////////////////////SONO QUI
  confermaPrenotazioni() {
    ///rimappare le prenotazioni e invio al DB la richiesta
    // this.prenotazioni[fila][posto] = this.nome;
    this.prenotazioneMultipla.selezionati.map((prenotazione) => {
      this.teatro.prenotazioni[prenotazione.zona][prenotazione.fila][
        prenotazione.posto
      ] = prenotazione.nome;
    });
    this.nomeInserito = undefined;
    this.nomeInseritoChange.emit(undefined);

    //this.teatro = undefined;
  }
  ngOnInit() {}
}
