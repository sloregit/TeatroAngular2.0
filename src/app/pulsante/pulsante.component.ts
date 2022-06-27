import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})

//Se il posto non è prenotato lo seleziona, altrimenti restituisce il nome della prenotazione
export class PulsanteComponent implements OnInit {
  @Input() posto: string;
  @Input() nome: string;
  @Input() etichetta: string;
  @Input() prenotabile: boolean;
  @Input() prenotato: boolean;
  @Output() prenotabileChange = new EventEmitter<boolean>();
  @Output() selezionatoEmitter = new EventEmitter<boolean>();
  @Output() nomePostoEmitter = new EventEmitter<string>();
  selezionato: boolean = false;
  constructor() {}
  select() {
    if (this.posto === null) {
      this.selezionato === true
        ? (this.selezionato = false)
        : (this.selezionato = true);
    } else {
      this.nomePostoEmitter.emit(this.posto);
    }
    this.selezionatoEmitter.emit(this.selezionato);

    //se il posto è libero e viene cliccato viene selezionato
  }

  ngOnInit() {}
}
