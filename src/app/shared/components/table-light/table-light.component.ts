import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableLightComponent implements OnInit {
  @Input() headers!: string[];
  constructor() {}
  ngOnInit(): void {}
  check() {
    console.log('CD TABLE LIGHT');
  }
}
