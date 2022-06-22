import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppDataService } from './appdata.service';
import { TeatroComponent } from './teatro/teatro.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, TeatroComponent],
  bootstrap: [AppComponent],
  providers: [AppDataService],
})
export class AppModule {}
