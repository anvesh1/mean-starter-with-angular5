import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private router: Router, private bookCom: BookComponent) { }

  ngOnInit() {
  }

  saveBook() {
    this.http.post('/api/book', this.book)
      .subscribe(res => {
          let id = res['_id'];
          //this.router.navigate(['/book-details', id]);
        this.bookCom.getAllBooks();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
