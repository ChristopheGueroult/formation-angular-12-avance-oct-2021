import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  constructor(private cltService: ClientsService) {
    this.cltService.collection.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
