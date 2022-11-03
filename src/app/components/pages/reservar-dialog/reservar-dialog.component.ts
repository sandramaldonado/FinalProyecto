import { Component, OnInit , Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Reserva} from '../admin-dashboard/colors-dashboard/reservas'

@Component({
  selector: 'app-reservar-dialog',
  templateUrl: './reservar-dialog.component.html',
  styleUrls: ['./reservar-dialog.component.css']
})
export class ReservarDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReservarDialogComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Reserva) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
