import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private collection$!: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  // get collection
  get collection(): Observable<Client[]> {
    return this.collection$;
  }

  // set collection
  set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }

  // change state item

  // update item in collection

  // add item in collection

  // delete item in collection

  // get item by id
}
