import { RoutePaths } from '@App/Common/Settings/RoutePaths';
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
	RoutePaths = RoutePaths

	AvailableLanguages: Language[] = [{ Name: 'English', Key: 'en' }, { Name: 'German', Key: 'de' }]

	constructor(
		private Router: Router,
	) {
	}

	goToProfile() {
	}

	goToSettings() {
	}

}
