import { Component, OnInit, ViewChild } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import {MatDialog} from '@angular/material/dialog';
import {ReservarDialogComponent} from '../../reservar-dialog/reservar-dialog.component'
import {Reserva} from './reservas';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class DemoSearchBar {
  search : String ="";
  }

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Sandra', weight: 70742991, symbol: '20/08/22'},
  {position: 2, name: 'Pepe', weight: 8830623, symbol: '20/08/22'},
  {position: 3, name: 'Carlos', weight: 99987, symbol: '20/08/22'},
];

@Component({
  selector: 'app-colors-dashboard',
  templateUrl: './colors-dashboard.component.html',
  styleUrls: ['./colors-dashboard.component.css']
})
export class ColorsDashboardComponent implements OnInit {

  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

  datos: Reserva[] = [new Reserva(1, 'papas', 55, 'detalle'),
  new Reserva(2, 'manzanas', 53, 'detalle'),
  new Reserva(3, 'naranjas', 25, 'detalle'),
  ];

  search : string;

  displayedColumns = [
    'name',
    'position',
    'weight',
    'symbol',
    'position',
    'weight',
    'symbol',
    'detalle',
    'star',
  ];
  dataSource = ELEMENT_DATA;

  

  
  colors:Color[] = [];
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 4, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  dataLoaded = false;

  ds = new MatTableDataSource<Reserva>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Reserva>;
  constructor(
    private colorService:ColorService, public dialog:MatDialog
  
    ) { 
    }

  ngOnInit(): void {
    this.getColors()
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data,
      this.dataLoaded = true;
    })
  }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(ReservarDialogComponent, {
      data: new Reserva(0, '', 0, '')
    });

    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
        this.agregar(art);
    });
  }

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar(art: Reserva) {
    this.datos.push(new Reserva(art.codigo, art.descripcion, art.fecha, art.detalle, ));
    this.tabla1.renderRows();
  }
 
  

}


