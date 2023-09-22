import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { JogosComponent } from '../jogos/jogos.component';


import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

import {getTimes} from '@/app/infra/firebase/firebase';
import { LinhaTabelaType } from '@/app/model/linha-tabela';



const ELEMENT_DATA:LinhaTabelaType[] = [
 
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
  constructor(){
    getTimes().then(
      times =>{
        this.dataSource = times?.map( (a,index) =>{
          a.posicao= index+1;
          return a;
        });
      }
    );
    
  }

  
  displayedColumns:string[] = ['posicao','escudo','nome'];
  
  dataSource = ELEMENT_DATA;
  
  
}

