import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEditComponent implements OnInit {
  public myIcon = faEdit;
  constructor() {}

  ngOnInit(): void {}
  check() {
    console.log('CD ICON EDIT');
  }
}
