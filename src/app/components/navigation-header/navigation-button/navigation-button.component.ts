import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.css'
})
export class NavigationButtonComponent {
  @Input() value: String = '';
  @Input() link: String = '';

  constructor(private router: Router) {}

  isActive(): boolean {
    return this.router.url === this.link;
  }
}
