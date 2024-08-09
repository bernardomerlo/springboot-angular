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

  cadastra(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente).pipe(
      catchError((error) => {
        console.error('Error creating client:', error);
        return throwError(() => new Error('Error creating client'));
      })
    );
  }

  editar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url, cliente).pipe(
      catchError((error) => {
        console.error('Error updating client:', error);
        return throwError(() => new Error('Error updating client'));
      })
    );
  }

  remover(codigo: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + codigo);
  }
}
