import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {



  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  goInputData(){
    this.router.navigate(['/input-book']);
  }

}
