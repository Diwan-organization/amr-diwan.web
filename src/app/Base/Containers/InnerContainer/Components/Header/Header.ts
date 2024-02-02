import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

export class Language {
  Name!: string;
  Key!: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './Header.html',
  styleUrls: ['./Header.scss'],
})
export class HeaderComponent {
  @ViewChild('NavbarCollapse') NavbarCollapse!: ElementRef;

  constructor(private Router: Router) {}
}
