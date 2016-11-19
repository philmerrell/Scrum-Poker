import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PokerComponent } from './poker/poker.component';
import { CardComponent } from './card/card.component';
import { PokerService } from './poker.service';

@NgModule({
  declarations: [
    AppComponent,
    PokerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: PokerComponent
      },
      {
        path: 'card',
        component: CardComponent
      }
    ])
  ],
  providers: [
    PokerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
