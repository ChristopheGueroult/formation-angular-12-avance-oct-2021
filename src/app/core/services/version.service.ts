import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  numVersion = new BehaviorSubject<number>(1);
  constructor() {}
  increment(): void {
    this.numVersion.next(this.numVersion.value + 1);
  }
}
