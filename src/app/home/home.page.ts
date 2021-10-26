import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cursosCiclo: string[] = ["DAM", "DAW", "ASIR"];
  tipoCurso: string;
  cursoESO: string;
  repiteESO: boolean;
  cursoCiclo: string;

  constructor() {}

  aceptar(){
    if (this.tipoCurso == "ESO"){
      if (this.repiteESO)
        console.log(this.tipoCurso + " - " + this.cursoESO + " - Repite");
      else
      console.log(this.tipoCurso + " - " + this.cursoESO + " - No repite");
      }
    else
    console.log(this.tipoCurso + " - " + this.cursoCiclo);
  }
}
