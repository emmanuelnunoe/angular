import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../models/post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {
    // por injeccion de dependencias agrego el objeto HttpClient
  }
  private url = 'http://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<Post[]> {
    let posts: Observable<Post[]>;
    posts = this.httpClient
      .get<Post[]>(this.url)
      .pipe(catchError(this.handleError));
    return posts;
  }

  addPost(post: Post): Observable<Post> {
    // se utiliza observable;
    return this.httpClient
      .post<Post>(this.url, post, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deletePost(id: number): Observable<unknown> {
    let deleteUrl = this.url + id;
    return this.httpClient
      .delete(deleteUrl, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updatePost(post: Post): Observable<Post> {
    return this.httpClient
      .post<Post>(this.url, post, httpOptions)
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
