import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) {}

  home() {
    this.router.navigate(['home']);
  }

  search() {
    this.router.navigate(['search']);
  }
}
