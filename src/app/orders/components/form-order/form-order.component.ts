import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() init!: Order;
  @Output() submited: EventEmitter<Order> = new EventEmitter<Order>();
  public form!: FormGroup;
  public states = Object.values(StateOrder);
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.init = new Order();
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      taux_tva: [this.init.taux_tva],
      nb_days: [this.init.nb_days],
      tjm_ht: [this.init.tjm_ht],
      state: [this.init.state],
      id: [this.init.id],
      type: [this.init.type, Validators.required],
      client: [
        this.init.client,
        [Validators.required, Validators.minLength(2)],
      ],
      comment: [this.init.comment],
    });
  }

  ngAfterViewInit() {
    // this.cd.detach();
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }
  public check(): void {
    console.log('CD FORM ORDER');
  }
}
