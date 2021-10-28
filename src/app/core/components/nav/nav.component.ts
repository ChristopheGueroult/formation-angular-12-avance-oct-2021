import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
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
  public langs = ['fr', 'en'];
  public newLang = this.translateService.getDefaultLang();
  constructor(
    private versionServ: VersionService,
    private navService: NavService,
    private translateService: TranslateService
  ) {
    this.versionServ.numVersion.subscribe((data) => {
      this.version = data;
    });
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.newLang = event.lang;
    });
  }
  increment(): void {
    this.versionServ.increment();
  }
  public toggle() {
    this.navService.toggle();
  }
  check() {
    console.log('CD NAV');
  }
  public changeLang(event: any) {
    const lang = event.target.value;
    this.translateService.use(lang);
  }
}
