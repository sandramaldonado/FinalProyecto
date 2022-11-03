import { Injectable } from '@angular/core';
import {Reserva} from '../models/reserva';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {
 /*  private dbPath = '/reservas';
  reservasRef: AngularFirestoreCollection<Reserva>;

  constructor(private db: AngularFirestore) { 
    this.reservasRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Reserva>{
    return this.reservasRef;
  }

  create(reserva:Reserva):any{
    return this.reservasRef.add({...reserva});
  }
 
  update(id:string, data:any):Promise<void>{
    return this.reservasRef.doc(id).update(data);
  }

  delete(id:string):Promise<void>{
    return this.reservasRef.doc(id).delete();
  } */
}
