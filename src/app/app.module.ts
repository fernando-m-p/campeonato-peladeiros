import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabelaComponent } from './componentes/tabela/tabela.component';
import{MatTabsModule}  from '@angular/material/tabs';
import { JogosComponent } from './componentes/jogos/jogos.component';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CabecalhoComponent,
    BrowserAnimationsModule,
    TabelaComponent,
    MatTabsModule,
    JogosComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
