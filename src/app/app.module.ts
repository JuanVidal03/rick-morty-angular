import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// componentes
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterCardListComponent } from './components/character-card-list/character-card-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCharacterComponent } from './pages/single-character/single-character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    CharacterCardListComponent,
    HomeComponent,
    SingleCharacterComponent
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
