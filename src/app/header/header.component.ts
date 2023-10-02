import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public start: Date | undefined;
  public end: Date | undefined;

  constructor() { }

  ngOnInit() {
  }

  clic() {
    console.log(this.start);
    console.log(this.end);
  }

}
