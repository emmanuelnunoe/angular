import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Note } from '../models/note';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NotesServicesService {
  constructor(private httpClient: HttpClient) {}

  private url = 'http://localhost:3000/notes/';

  getNotes(): Observable<Note[]> {
    let notes: Observable<Note[]>;
    notes = this.httpClient
      .get<Note[]>(this.url)
      .pipe(catchError(this.handleError));
    return notes;
  }

  addNote(note: Note): Observable<Note> {
    // se utiliza observable;
    return this.httpClient
      .post<Note>(this.url, note, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateNote(note: Note): Observable<Note> {
    return this.httpClient
      .put<Note>(this.url + note.id, note, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteNote(id: string): Observable<unknown> {
    let deleteUrl = this.url + id;
    console.log(deleteUrl);
    return this.httpClient
      .delete(deleteUrl, httpOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    // funcion basica para manejo de errores
    // se sugiere investigar sobre el tema de Interceptor
    let mensaje = 'Error desconocido';
    // los errores pueden ser  client side http 400 o server side 500
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      mensaje = `Error: ${error.error.message}`;
    } else {
      mensaje = `Error ${error.status} ${error.message}`;
    }
    console.log(mensaje);
    return throwError(mensaje);
  }
}
