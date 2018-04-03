import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get('/api/book/'+id).subscribe(data => {
      this.book = data;
    });
  }

  updateBook(id) {
    this.http.put('/api/book/'+id, this.book)
      .subscribe(res => {
          let id = res['_id'];
          // this.router.navigate(['/book-details', id]);
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
