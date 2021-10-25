import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabarit-container',
  templateUrl: './gabarit-container.component.html',
  styleUrls: ['./gabarit-container.component.scss'],
})
export class GabaritContainerComponent implements OnInit {
  @Input() title: string;
  constructor() {
    // mock title
    this.title = 'mon titre';
  }

  ngOnInit(): void {}
}
