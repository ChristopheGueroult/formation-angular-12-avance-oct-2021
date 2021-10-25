import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() route!: string;
  @Input() text!: string;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}
  check() {
    console.log('CD BTN');
  }
  ngAfterViewInit() {
    this.cd.detach();
  }
}
