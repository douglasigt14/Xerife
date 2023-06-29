import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; // URL da API do backend
  public isAuth = new BehaviorSubject<any>(false);

  constructor(private http: HttpClient) { }

  setIsAuth(value:boolean){
    this.isAuth.next(value)
  }

  getIsAuth(){
    return this.isAuth
  }

  login(email: string, password: string): Observable<any> {
    this.setIsAuth(true);
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password });
  }

  logout(): void {
    this.setIsAuth(false);
    localStorage.removeItem('token');
  }
}
