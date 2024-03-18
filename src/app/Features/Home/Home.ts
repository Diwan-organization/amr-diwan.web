import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { Router, RouterModule } from '@angular/router';
import { CarouselComponent } from '@App/Common/Widgets/Carousel/Carousel';
import { PartnerItem, Partners } from './Data/Partners';
import { Stats, StatsItem } from './Data/Stats';
import { ProjectItem, Projects } from './Data/Projects';


@Component({
	standalone: true,
	templateUrl: './Home.html',
	styleUrls: ['Home.scss'],
	imports: [FormsModule, CommonModule, RouterModule, CarouselComponent],
})
export class HomeComponent implements OnInit {
	RoutePaths = RoutePaths;

	Stats: StatsItem[] = Stats;
	Projects: ProjectItem[] = Projects;
	Partners: PartnerItem[] = Partners;
	PartnersImages: string[] = Partners.map(p => p.ImgSrc);

	constructor(private Router: Router) { }

	ngOnInit(): void { }

	// stats animation
	ngAfterViewInit() {
		this.Animation.LandingText();
		this.Animation.About();
		this.Animation.Stat();
		this.Animation.Projects();
		this.Animation.Partners();

	}

	Animation = {
		LandingText: () => {
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
		},

		About: () => {
			const about = document.querySelector('.about')!;
			about.classList.remove('about-transition');
			const aboutObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						about.classList.add('about-transition');
						return;
					}

					about.classList.remove('about-transition');
				});
			});
			aboutObserver.observe(about);
		},

		Stat: () => {
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						animateNumber(entry.target);
						// remove if you want it to repeat it on scroll again
						observer.unobserve(entry.target);
					}
				});
			});
			const stats = document.querySelectorAll('.stat');
			stats.forEach(stat => observer.observe(stat));

			function animateNumber(element: any) {
				return new Promise<void>(resolve => {
					const numberElement = element.querySelector('.number');
					const targetNumber = parseInt(numberElement.getAttribute('number'));
					const targetTimeInterval = parseInt(numberElement.getAttribute('timeinterval'));
					console.log(targetNumber);

					let currentNumber = 0;
					const interval = setInterval(() => {
						if (!targetNumber) {
							numberElement.innerText = numberElement.getAttribute('number');
							clearInterval(interval);
							resolve();
							return
						}
						if (numberElement.id == 3) {
							currentNumber = currentNumber + 100;
						} else {
							currentNumber++;
						}
						numberElement.innerText = currentNumber;
						if (currentNumber >= targetNumber) {
							if (numberElement.id != 4) {
								numberElement.innerText += '+'
							}
							clearInterval(interval);
							resolve();
						}
					}, targetTimeInterval);
				});
			}
		},


		Projects: () => {
			const projects = document.querySelectorAll('.project')!;
			projects.forEach(project => {
				// console.log(project);
				project.classList.remove('project-transition');

				const observer = new IntersectionObserver(entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							project.classList.add('project-transition');
							return;
						}
						project.classList.remove('project-transition');
					});
				});

				observer.observe(project);
			})
		},

		Partners: () => {
			const partners = document.querySelector('.partners')!;
			partners.classList.remove('partners-transition');
			const partnersObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						partners.classList.add('partners-transition');
						return;
					}

					partners.classList.remove('partners-transition');
				});
			});
			partnersObserver.observe(partners);
		}
	}

	GotoStat(link: string) {
		if (!link) return
		this.Router.navigateByUrl(link)
	}


	// shadow overlay landing section on scroll
	BaseOpacity: number = 0.7;
	opacity: number = 0.7;
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		const scrollPosition: number = window.scrollY || document.documentElement.scrollTop;
		const viewportHeight: number = window.innerHeight;

		let ratio: number = scrollPosition / viewportHeight;
		this.opacity = Math.min(this.BaseOpacity + (ratio / 2.5), 1);
	}


	CardCheckedIndex!: number;
	FlipCard = {
		onCheckboxChange: (index: number): void => {
			this.CardCheckedIndex = this.CardCheckedIndex === index ? 0 : index;
		},

		isChecked: (index: number): boolean => {
			return this.CardCheckedIndex === index;
		},

		onCardHover: (index: number): void => {
			this.CardCheckedIndex = index;
		},

		onCardLeave: (index: number): void => {
			if (this.CardCheckedIndex !== 0 && this.CardCheckedIndex === index) {
				this.CardCheckedIndex = 0;
			}
		},

		onCardClick: (index: number): void => {
			console.log('index', index);
			console.log('CardCheckedIndex', this.CardCheckedIndex);

			if (this.CardCheckedIndex == index) {
				this.FlipCard.onCardLeave(index)
			} else {
				this.FlipCard.onCardHover(index)
			}
		}

	}
}
