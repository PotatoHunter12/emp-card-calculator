import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TarotComponent } from './tarot/tarot.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TarotComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
