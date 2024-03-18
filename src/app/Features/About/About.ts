import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppConfig } from '@App/Base/AppConfig';


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
		protected AppConfig: AppConfig
	) { }

	ngOnInit() { }

	ngAfterViewInit() {
		this.Animation.Content();
	}

	Animation = {
		Content: () => {
			const contents = document.querySelectorAll('.content')!;
			contents.forEach(content => {
				// console.log(content);
				content.classList.remove('content-transition');

				const observer = new IntersectionObserver(entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							content.classList.add('content-transition');
							return;
						}
						content.classList.remove('content-transition');
					});
				});

				observer.observe(content);
			})
		},
	}

}
