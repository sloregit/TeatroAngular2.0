import { Component, OnInit, Input, Output } from '@angular/core';
import { prenotazioni } from '../app.component';

@Component({
  selector: 'app-zona-teatro',
  templateUrl: './zona-teatro.component.html',
  styleUrls: ['./zona-teatro.component.css'],
})
export class ZonaTeatroComponent implements OnInit {
  @Input() prenotazioni;
  constructor() {}
  mostraNome() {}
  ngOnInit() {}
}
