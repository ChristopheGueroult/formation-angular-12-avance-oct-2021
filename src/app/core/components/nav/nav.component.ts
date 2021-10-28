import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  public version!: number;
  constructor(
    private versionServ: VersionService,
    private navService: NavService
  ) {
    this.versionServ.numVersion.subscribe((data) => {
      this.version = data;
    });
  }

  ngOnInit(): void {}
  increment(): void {
    this.versionServ.increment();
  }
  public toggle() {
    this.navService.toggle();
  }
  check() {
    console.log('CD NAV');
  }
}
