import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss'],
})
export class PageSignUpComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  public action(user: User): void {
    this.userService.register(user).subscribe(() => {
      this.router.navigate(['/sign-in']);
    });
  }
}
