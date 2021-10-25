import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-gabarit-full-width',
  templateUrl: './gabarit-full-width.component.html',
  styleUrls: ['./gabarit-full-width.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GabaritFullWidthComponent implements OnInit {
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
  check() {
    console.log('CD GABARIT FULL WIDTH');
  }
}
