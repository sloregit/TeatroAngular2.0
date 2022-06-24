import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  @Input() posto;
  selezionato = false;
  constructor() {}
  select() {
    this.selezionato === true
      ? (this.selezionato = false)
      : (this.selezionato = true);
  }
  /**
 * else {
      this.selezionato === true
        ? (this.selezionato = false)
        : (this.selezionato = true);
      console.log(this.selezionato);
    }
 */
  ngOnInit() {}
}
