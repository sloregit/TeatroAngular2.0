import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  @Input() posto;
  @Output() selezionatoChange = new EventEmitter<boolean>();
  @Input() selezionato = false;
  constructor() {}
  select() {
    //se il posto è libero e viene cliccato viene selezionato
    if (this.posto === 'x') {
      this.selezionato === true
        ? (this.selezionato = false)
        : (this.selezionato = true);
    }
    this.selezionatoChange.emit(this.selezionato);
  }
  ngOnInit() {}
}
