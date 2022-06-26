import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})

//Se il posto non è prenotato lo seleziona, altrimenti restituisce il nome della prenotazione
export class PulsanteComponent implements OnInit {
  @Input() posto;
  @Output() selezionatoEmitter = new EventEmitter<boolean>();
  selezionato: boolean = false;
  constructor() {}
  select() {
    //se il posto è libero e viene cliccato viene selezionato
    if (this.posto === 'x') {
      this.selezionato === true
        ? (this.selezionato = false)
        : (this.selezionato = true);
    } else {
      this.selezionatoEmitter.emit(this.posto);
    }
    this.selezionatoEmitter.emit(this.selezionato);
  }
  ngOnInit() {}
}
