import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
// import { BookEditComponent } from '../book-edit/book-edit.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;
  book : {};
  isEdit : boolean;
  constructor(
    private router: Router, private route: ActivatedRoute,
    // private http: HttpClient, private EditBook : BookEditComponent
    private http: HttpClient
  ) { this.isEdit = false;}

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    this.http.get('/api/book').subscribe(data => {
      this.books = data;
    });
  }

  editBook(data){
    this.isEdit = true;
    console.log(data);return;
  }

  deleteBook(id) {
    this.http.delete('/api/book/'+id)
      .subscribe(res => {
          this.getAllBooks();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
