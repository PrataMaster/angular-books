import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Book } from './../../Book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();
  title: string |undefined;
  author: string |undefined;
  showAddBook: boolean|undefined = false;
  subscription: Subscription|undefined;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddBook = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title || !this.author){
      alert("Informe o titulo");
      return;
    }

    const newBook = {
      title: this.title,
      author: this.author
    }

    this.onAddBook.emit(newBook);

    this.clearFields();

  }

  clearFields(){
    this.title = "";
    this.author = "";
  }

}
