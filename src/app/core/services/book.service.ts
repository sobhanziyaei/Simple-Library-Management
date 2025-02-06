import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../types/book';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private endpoint = 'books'; // فقط مسیر API مربوط به کتاب‌ها

  constructor(private apiService: ApiService) { }

  getBooks(): Observable<Book[]> {
    return this.apiService.get<Book[]>(this.endpoint);
  }

  getBookById(id: number): Observable<Book> {
    return this.apiService.get<Book>(`${this.endpoint}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.apiService.post<Book>(this.endpoint, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.apiService.put<Book>(`${this.endpoint}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.apiService.delete<void>(`${this.endpoint}/${id}`);
  }
}
