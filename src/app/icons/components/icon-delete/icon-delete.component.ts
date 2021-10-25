import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon-delete.component.html',
  styleUrls: ['./icon-delete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDeleteComponent implements OnInit {
  public myIcon = faTrash;
  constructor() {}

  ngOnInit(): void {}
  check() {
    console.log('CD ICON DELETE');
  }
}
