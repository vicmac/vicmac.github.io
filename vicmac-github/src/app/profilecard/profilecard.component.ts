import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.css']
})
export class ProfilecardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openURL(url): void {
    window.open(url, '_blank');
  }

}
