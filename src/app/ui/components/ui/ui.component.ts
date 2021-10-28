import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/core/services/nav.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponent implements OnInit {
  public open$ = this.navService.open$;
  constructor(private navService: NavService) {}

  ngOnInit(): void {}

  public toggle(): void {
    this.navService.toggle();
  }
  check() {
    console.log('CD UI');
  }
}
