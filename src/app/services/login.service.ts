import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Token } from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string = "";
  private user!: User;

  constructor(private http: HttpClient) {}

  public login(username:string, password:string, action: () => void) {
    this.user = {
      username: username,
      password: password
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    this.http.post<Token>('/login', this.user, httpOptions)
              .subscribe(response => {
                this.token = response.token
                action();
              });
  }

  get Token(): string {
    return this.token;
  }

}
