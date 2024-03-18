import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// componentes
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterCardListComponent } from './components/character-card-list/character-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    CharacterCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
