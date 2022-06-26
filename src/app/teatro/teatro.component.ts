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
  constructor() {}
  mostraNome(this) {
    console.log(this.value);
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
  }
  ngOnInit() {}
}
/**
 * Prenotazione {zona: "platea", nome: "ssfd", fila: 5, posto: 5…}
fila: 5
nome: "ssfd"
posto: 5
zona: "platea"
__proto__: Prenotazione
 * 
 * 
 */
/**
 export class Teatro implements spettacolo {
  nomeSpettacolo: string;
  prenotazioni: prenotazioni;
  nomePrenotazione: string;
  rapido: boolean;
  constructor(nomePrenotazione, nomeSpettacolo, prenotazioni, rapido) {
    this.nomePrenotazione = nomePrenotazione;
    this.nomeSpettacolo = nomeSpettacolo;
    this.prenotazioni = prenotazioni;
    this.rapido = rapido;
  }
}
 */
