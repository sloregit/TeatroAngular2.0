import { Component, OnInit, Input, Output } from '@angular/core';
import { Teatro } from '../app.component';

export class Pulsante {
  etichetta: string;
  nomePosto: string;
}

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  @Input() teatro: Teatro;
  pulsante: Pulsante;
  nomeposto: string;
  constructor() {}
  mostraNome(this) {
    console.log(this.value);
  }
  ngOnInit() {}
}

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
