import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AbstractErrorHandler } from '../abstract/abstract-error-handler';
import { StateOrder } from '../enums/state-order';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends AbstractErrorHandler {
  private collection$: Subject<Order[]> = new Subject<Order[]>();
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    super();
  }

  public refreshCollection(): void {
    this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(catchError(this.handleError))
      .subscribe((data) => this.collection$.next(data));
  }

  // get collection
  get collection(): Subject<Order[]> {
    return this.collection$;
  }

  // set collection
  set collection(col: Subject<Order[]>) {
    this.collection$ = col;
  }

  // change state item
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item).pipe(
      tap(() => this.refreshCollection()),
      catchError(this.handleError)
    );
  }

  // add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item).pipe(
      tap(() => this.refreshCollection()),
      catchError(this.handleError)
    );
  }

  // get item by id
  public getItemById(id: number): Observable<Order> {
    return this.http
      .get<Order>(`${this.urlApi}/orders/${id}`)
      .pipe(catchError(this.handleError));
  }

  // delete item
  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/orders/${id}`).pipe(
      tap(() => this.refreshCollection()),
      catchError(this.handleError)
    );
  }
}
