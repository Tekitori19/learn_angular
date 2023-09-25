import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('img') postURL = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor(): ', this.postURL);
  }

  ngOnInit(): void {
    console.log('ngOnInit(): ', this.postURL);
    
  }
}
