import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // 방법1
    // this.bookId = this.route.snapshot.paramMap.get('id');

    // 방법2
    this.route.paramMap.subscribe(data => {
      console.log(data);
      console.log(data.get('id'));
      this.bookId = data.get('id');
    })
  }

}
