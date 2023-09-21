import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { JogosComponent } from '../jogos/jogos.component';


import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

export interface TabelaCampeonatoType{
  posicao: number;
  nome: string;
  pontos: number;
  jogos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  golsPro: number;
  golsCon: number;
  cartAmarelo: number;
  cartAzul:number;
  cartVermelho: number;
  porcentagem: number;
}

const ELEMENT_DATA:TabelaCampeonatoType[] = [
  {
    nome:'Inter de Milão',
    posicao:1,
    pontos:0,
    jogos:0,
    vitorias:0,
    cartAmarelo:0,
    cartAzul:0,
    cartVermelho:0,
    derrotas:0,
    empates:0,
    golsCon:0,
    golsPro:0,
    porcentagem:0
  }
];


export interface TabelaCampeonatoType1{
  posicao: number;
  nome: string;
}

const ELEMENT_DATA1:TabelaCampeonatoType1[] = [
  {
    nome:'Inter de Milão',
    posicao:1,
  }
];


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  imports: [MatTableModule,MatSidenavModule, JogosComponent,
    MatToolbarModule, MatButtonModule, MatIconModule],
  standalone:true
})
export class TabelaComponent {
  displayedColumns:string[] = ['posicao','nome'];
  dataSource = ELEMENT_DATA1;
}
