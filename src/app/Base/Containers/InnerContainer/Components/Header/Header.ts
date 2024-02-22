import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

export class Link {
	Title!: string;
	Link!: string;
}

export class ArtCategory {
	Title!: string;
	ImgSrc!: string;
	ImgAlt!: string;
	Links!: Link[];
}
@Component({
	selector: 'app-header',
	templateUrl: './Header.html',
	styleUrls: ['./Header.scss'],
})
export class HeaderComponent implements OnInit {
	@ViewChild('NavbarCollapse') NavbarCollapse!: ElementRef;
	@ViewChild('navbar') navbar: any;
	RoutePaths = RoutePaths

	ArtCategories: ArtCategory[] = [
		{
			Title: 'KSA Projects',
			ImgAlt: '',
			ImgSrc: 'assets/Images/kansas-wall-2.jpg',
			Links: [
				{
					Title: 'Project 1',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 2',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 3',
					Link: `${RoutePaths.ArtWorks}`
				}
			]
		}, {
			Title: 'Qatar Projects',
			ImgAlt: '',
			ImgSrc: 'assets/Images/kansas-wall-2.jpg',
			Links: [
				{
					Title: 'FIFA',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 2',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 3',
					Link: `${RoutePaths.ArtWorks}`
				}
			]
		}, {
			Title: 'EGYPT Projects',
			ImgAlt: '',
			ImgSrc: 'assets/Images/kansas-wall-2.jpg',
			Links: [
				{
					Title: 'HSBC',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 2',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 3',
					Link: `${RoutePaths.ArtWorks}`
				}, {
					Title: 'Project 4',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 5',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 6',
					Link: `${RoutePaths.ArtWorks}`
				}
			]
		}, {
			Title: 'France Projects',
			ImgAlt: '',
			ImgSrc: 'assets/Images/kansas-wall-2.jpg',
			Links: [
				{
					Title: 'Project 1',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 2',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 3',
					Link: `${RoutePaths.ArtWorks}`
				}
			]
		}
	]
	artflag: boolean = true;

	constructor(private Router: Router) { }

	ngOnInit(): void {
		this.ScrollChanges()
	}
	goToProfile() {
	}

	goToSettings() {
	}

	ScrollChanges() {
		window.addEventListener('scroll', () => {
			this.toggleNavbarScrolled(false);
			this.toggleBackgroundScrolled();
		});
	}

	toggleNavbarScrolled(ishovered: boolean) {
		const navbar = document.querySelector('.navbar');
		if (window.scrollY > 1) {
			navbar?.classList.add('navbar-scrolled');
		} else {
			if (ishovered) {
				navbar?.classList.add('navbar-scrolled');
			} else {
				navbar?.classList.remove('navbar-scrolled');
			}
		}
	}

	toggleBackgroundScrolled() {
		const body = document.querySelector('body');
		if (window.scrollY > 1) {
			body!.style.backgroundColor = 'var(--primary-color1)';
		} else {
			body!.style.backgroundColor = '';
		}
	}

	@ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

	toggleDropdown(event: MouseEvent) {
		const dropdownMenuElement = this.dropdownMenu.nativeElement as HTMLElement;
		if (dropdownMenuElement.style.display === 'block') {
			dropdownMenuElement.style.display = 'none';
			document.getElementById('dropdownMenuLink')?.classList.remove('show');

		} else {
			dropdownMenuElement.style.display = 'block';
			document.getElementById('dropdownMenuLink')?.classList.add('show');

		}
		event.stopPropagation();
	}
	closeNavbar() {
		this.navbar.nativeElement.classList.remove('show');

	}
}
