import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-five-screen',
  templateUrl: './five-screen.component.html',
  styleUrls: ['./five-screen.component.scss']
})
export class FiveScreenComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public exit() {
    this.authService.clear();
    this.router.navigateByUrl('invest-feature/main');
  }
}
