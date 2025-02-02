import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }


  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }
}
