import { Component, VERSION } from '@angular/core';
import { AppDBService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private Appservice: AppDBService) {}
  mostraPrenotazioni() {
    this.Appservice.getPrenotazioni$().subscribe({
      next: (res: string) => {
        console.log(res);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
