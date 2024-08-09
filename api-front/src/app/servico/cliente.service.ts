import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  selecionar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url).pipe(
      catchError((error) => {
        console.error('Error fetching clients:', error);
        return throwError(() => new Error('Error fetching clients'));
      })
    );
  }
}
