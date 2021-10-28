import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  public open$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  public toggle() {
    this.open$.next(!this.open$.value);
  }
}
