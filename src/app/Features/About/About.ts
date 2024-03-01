import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
	standalone: true,
	templateUrl: './About.html',
	styleUrls: ['About.scss'],
	imports: [FormsModule, CommonModule]
})
export class AboutComponent implements OnInit {
	constructor(
		private router: Router,
		private route: ActivatedRoute,
	) { }

	ngOnInit() { this.LandingText() }
	LandingText() {
		const landingText = document.querySelector('.landing-text')!;
		landingText.classList.remove('landing-text-transition');
		const landingTextObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					landingText.classList.add('landing-text-transition');
					return;
				}

				landingText.classList.remove('landing-text-transition');
			});
		});
		landingTextObserver.observe(landingText);
	}
}
