import { Component } from '@angular/core';

import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css'],
  imports:[MatToolbarModule, MatButtonModule, MatIconModule],
  standalone:true
})
export class JogosComponent {

}
