import { Component, Input, OnInit } from '@angular/core';
import html2canvas from "html2canvas";

@Component({
  selector: 'app-generar-carnet',
  templateUrl: './generar-carnet.component.html',
  styleUrls: ['./generar-carnet.component.css']
})
export class GenerarCarnetComponent implements OnInit {
  name: string;
  imgCreada = false;
  imagenCreada:any;
  ci : string;
  cif :string;
  porcentaje: string;
  fecha :string;
  vence :string;
  constructor() { }

  ngOnInit(): void {

  }

  crearImagen(){



    html2canvas(document.querySelector("#contenido"),{
      allowTaint:true,
      useCORS:true
    }).then(canvas =>{
      this.imagenCreada = canvas.toDataURL();

    });

    this.imgCreada = true;
  }

  subirDatos(){
    
  }

}
