import { Injectable } from '@angular/core';
import {}
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

public login: string;

  constructor( private http: Http) {}
this.login = 'Annstella';

getUserInfo(); {
  return this.http.get( 'https://api.github.com/users/this.login', );
}
