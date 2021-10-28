import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectOpenSidebar } from 'src/app/core/store/gb-store/selectors/gb.selectors';

@Component({
  selector: 'app-gabarit-full-width',
  templateUrl: './gabarit-full-width.component.html',
  styleUrls: ['./gabarit-full-width.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GabaritFullWidthComponent implements OnInit {
  @Input() title!: string;
  public open$ = this.store.select(selectOpenSidebar);
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
  check() {
    console.log('CD GABARIT FULL WIDTH');
  }
  close() {
    this.router.navigate(['.'], { relativeTo: this.route.parent });
  }
}
