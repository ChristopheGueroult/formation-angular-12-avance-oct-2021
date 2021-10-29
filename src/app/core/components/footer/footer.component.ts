import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';
import * as dayjs from 'dayjs';
import * as moment from 'moment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  public version!: number;
  public date = moment().format('dd/mm/YYYY');
  public date2 = dayjs().format('dd/mm/YYYY');
  constructor(private versionServ: VersionService) {
    this.versionServ.numVersion.subscribe((data) => {
      this.version = data;
    });
  }

  ngOnInit(): void {}
}
