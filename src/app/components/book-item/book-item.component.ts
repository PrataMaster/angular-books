import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book!: Book;
  @Output() onDeleteBook: EventEmitter<Book> = new EventEmitter();
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(book: Book) {
   this.onDeleteBook.emit(book);
  }

}
