import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService<T> {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    protected readonly http: HttpClient
  ) { }

  public getAll(uri: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${uri}`, this.httpOptions);
  }

  public get(uri: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${uri}`, this.httpOptions);
  }

  public post(uri: string, body: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/${uri}`, body, this.httpOptions);
  }

  public put(uri: string, body: any): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${uri}`, body, this.httpOptions);
  }

  public delete(uri: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${uri}`, this.httpOptions);
  }

  private get httpOptions() {
    return {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
}
