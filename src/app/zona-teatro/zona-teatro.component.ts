import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prenotazione, PrenotazioneMultipla } from '../teatro/teatro.component';
import { spettacolo, prenotazioni } from '../app.component';

@Component({
  selector: 'app-zona-teatro',
  templateUrl: './zona-teatro.component.html',
  styleUrls: ['./zona-teatro.component.css'],
})
export class ZonaTeatroComponent implements OnInit {
  @Input() prenotazioni;
  @Input() zona;
  @Input() nome: string;
  @Input() rapido: boolean;
  @Input() selezionati: PrenotazioneMultipla;
  @Output() prenotazioniChange = new EventEmitter<Array<string>>();
  @Output() selezionatiChange = new EventEmitter<PrenotazioneMultipla>();
  @Output() mostraNomeEmitter = new EventEmitter<string>();
  selezionato: boolean;
  nuovaPrenotazione: Prenotazione;
  prenotabile: boolean = true;
  @Input() prenotato: boolean;
  constructor() {}
  isSelezionato($event: boolean) {
    this.selezionato = $event;
  }
  mostraNome_TeatroComponent($event) {
    this.mostraNomeEmitter.emit($event);
  }

  //Se rapida, prenota il posto
  prenotaRapido(fila: number, posto: number) {
    if (this.prenotabile) {
      this.prenotazioni[fila][posto] = this.nome;
      this.prenotazioniChange.emit(this.prenotazioni);
      this.prenotato = true;
      this.prenotabile = false;
    }
  }

  //Se non rapida, crea e aggiunge la prenotazione ad una prenotazione multipla
  selezionaPrenotazioni(fila: number, posto: number) {
    if (this.prenotabile) {
      //crea una prenotazione multipla se non esiste e aggiunge la prima prenotazione
      if (this.selezionati === undefined) {
        this.selezionati = new PrenotazioneMultipla();
        this.nuovaPrenotazione = new Prenotazione(
          this.zona,
          this.nome,
          fila,
          posto
        );
        this.selezionati.aggiungi(this.nuovaPrenotazione);
      } else {
        if (!this.selezionato) {
          this.selezionati.rimuovi(fila, posto);
        } else {
          this.nuovaPrenotazione = new Prenotazione(
            this.zona,
            this.nome,
            fila,
            posto
          );
          this.selezionati.aggiungi(this.nuovaPrenotazione);
        }
      }
      this.selezionatiChange.emit(this.selezionati);
    }
  }

  ngOnInit() {}
}
