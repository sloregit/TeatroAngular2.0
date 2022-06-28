import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selezione',
  templateUrl: './selezione.component.html',
  styleUrls: ['./selezione.component.css'],
})
export class ConfiguraZonaComponent implements OnInit {
  @Input() nomeElem: string;
  @Input() elementi: number[];
  @Input() selezionato;
  @Output() selezionatoChange = new EventEmitter<number>();

  constructor() {}
  valoreSelezionato($event) {
    this.selezionatoChange.emit($event.target.value);
  }
  ngOnInit() {}
}
