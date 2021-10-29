import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AbstractErrorHandler } from '../abstract/abstract-error-handler';
import { StateOrder } from '../enums/state-order';
import { Order } from '../models/order';
/**
 * @description
 * this service manage collection orders
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService extends AbstractErrorHandler {
  /**
   * Observable collection$ to return collection orders
   */
  private collection$!: Observable<Order[]>;
  /**
   * variable to get urlApi from environment
   */
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    super();
    this.collection = this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(catchError(this.handleError));
  }

  /**
   * getter to return collection orders
   */
  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  /**
   * setter to initialize collection orders
   */
  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  /**
   *
   * @param item get the order on witch we want to change state
   * @param state new state choose by user for an order
   * @returns return method to update order in collection
   */
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http
      .put<Order>(`${this.urlApi}/orders/${item.id}`, item)
      .pipe(catchError(this.handleError));
  }

  // add item in collection
  public add(item: Order): Observable<Order> {
    return this.http
      .post<Order>(`${this.urlApi}/orders`, item)
      .pipe(catchError(this.handleError));
  }

  // get item by id
  public getItemById(id: number): Observable<Order> {
    return this.http
      .get<Order>(`${this.urlApi}/orders/${id}`)
      .pipe(catchError(this.handleError));
  }

  // delete item
  public delete(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.urlApi}/orders/${id}`)
      .pipe(catchError(this.handleError));
  }
}
