import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  // get all users
  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.authUrlApi}users`);
  }

  // register a new user
  public register(user: User): Observable<User> {
    return this.http.post<User>(
      `${environment.authUrlApi}users/register`,
      user
    );
  }

  // delete a user
  public delete(id: number): Observable<User> {
    return this.http.delete<User>(`${environment.authUrlApi}users/${id}`);
  }
}
