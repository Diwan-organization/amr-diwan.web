import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate, stagger } from 'motion';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { Router, RouterModule } from '@angular/router';
import { CarouselComponent } from '@App/Common/Widgets/Carousel/Carousel';


class ProjectItem {
	ImgSrc!: string;
	ImgAlt!: string;
	Title!: string;
	Description!: string;
	Link!: string;
}

class NewsItem {
	ImgSrc!: string;
	ImgAlt!: string;
	Title!: string;
	Date!: Date;
	Description!: string;
	Link!: string;
}


class AboutItem {
	ImgSrc!: string;
	ImgAlt!: string;
	Title!: string;
	Description!: string;
	Link!: string;
}

class StatsItem {
	ImgSrc!: string;
	ImgAlt!: string;
	Title!: string;
	Number!: string;
	Description!: string;
	Link!: string;
	TimeInterval!: number;
}


@Component({
	standalone: true,
	templateUrl: './Home.html',
	styleUrls: ['Home.scss'],
	imports: [FormsModule, CommonModule, RouterModule, CarouselComponent],
})
export class HomeComponent implements OnInit {
	RoutePaths = RoutePaths;
	observerOptions: {} = {
		root: null,
		rootMargin: '10px',
		threshold: 0.1, // Adjust this threshold based on your needs
	};

	Stats: StatsItem[] = [
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Years Of Experience',
			Number: '19+',
			Description: '',
			Link: '',
			TimeInterval: 100
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Projects',
			Number: '17+',
			Description: '',
			Link: '',
			TimeInterval: 70
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Countries',
			Number: '5+',
			Description: '',
			Link: '',
			TimeInterval: 500
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Meters',
			Number: '7000+',
			Description: '',
			Link: '',
			TimeInterval: 25
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Learn more',
			Number: '>',
			Description: '',
			Link: '/' + RoutePaths.About,
			TimeInterval: 0
		},
	]

	Projects: ProjectItem[] = [
		{
			ImgSrc: 'assets/Images/Home-Projects/ALIF.jpg',
			ImgAlt: '',
			Title: 'ALIF STORES',
			Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
			Link: 'alif',
		},
		{
			ImgSrc: 'assets/Images/Home-Projects/FIFA.jpg',
			ImgAlt: '',
			Title: 'Fifa World Cup',
			Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
			Link: 'fifa',
		},
		{
			ImgSrc: 'assets/Images/Home-Projects/adidas.JPG',
			ImgAlt: '',
			Title: 'Adidas',
			Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
			Link: 'adidas',
		},
		{
			ImgSrc: 'assets/Images/Home-Projects/hsbc.jpg',
			ImgAlt: '',
			Title: 'HSBC',
			Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
			Link: 'hsbc',
		},
		{
			ImgSrc: 'assets/Images/Home-Projects/money-fellows.JPG',
			ImgAlt: '',
			Title: 'Money Fellows',
			Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
			Link: 'moussa',
		},
		{
			ImgSrc: 'assets/Images/Home-Projects/AL-rayyan.jpg',
			ImgAlt: '',
			Title: 'Al Rayyan SC',
			Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
			Link: 'meryal',
		}

	];

	News: NewsItem[] = [
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
			ImgAlt: 'news image 1',
			Title: 'News 1 title',
			Date: new Date('28/6/1996'),
			Description: 'Some representative placeholder content for the first slide.',
			Link: '',
		},
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
			ImgAlt: 'news image 2',
			Title: 'News 2 title',
			Date: new Date('28/6/1996'),
			Description: 'Some representative placeholder content for the first slide.',
			Link: '',
		},
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
			ImgAlt: 'news image 3',
			Title: 'News 3 title',
			Date: new Date('28/6/1996'),
			Description: 'Some representative placeholder content for the first slide.',
			Link: '',
		}
	]

	Partners: AboutItem[] = [
		{
			ImgSrc: 'assets/Logos/2.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/3.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/4.jpg ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/5.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/6.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/8.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/10.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/11.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		}
		,
		{
			ImgSrc: 'assets/Logos/12.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/13.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/14.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/15.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/16.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/17.jpeg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/18.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/19.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/20.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/21.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/22.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/23.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/24.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/25.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		}
		,
		{
			ImgSrc: 'assets/Logos/26.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/27.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		// {
		// 	ImgSrc: 'assets/Logos/28.jpg',
		// 	ImgAlt: 'about the company',
		// 	Title: 'The Company',
		// 	Description: '',
		// 	Link: '',
		// },
		{
			ImgSrc: 'assets/Logos/29.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/30.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/31.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		// {
		// 	ImgSrc: 'assets/Logos/32.png',
		// 	ImgAlt: 'about the company',
		// 	Title: 'The Company',
		// 	Description: '',
		// 	Link: '',
		// },
		{
			ImgSrc: 'assets/Logos/33.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/34.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/35.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/36.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/37.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/38.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/pubg.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/40.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/41.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/42.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		// {
		// 	ImgSrc: 'assets/Logos/43.png',
		// 	ImgAlt: 'about the company',
		// 	Title: 'The Company',
		// 	Description: '',
		// 	Link: '',
		// },
		{
			ImgSrc: 'assets/Logos/44.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/45.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/46.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/47.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/48.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		}
	]
	x = this.Partners.map(p => p.ImgSrc)

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

	BaseOpacity: number = 0.7;
	opacity: number = 0.7;
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		const scrollPosition: number = window.scrollY || document.documentElement.scrollTop;
		const viewportHeight: number = window.innerHeight;

		let ratio: number = scrollPosition / viewportHeight;
		this.opacity = Math.min(this.BaseOpacity + (ratio / 2.5), 1);
	}

	MinIndex = 8;
	loadMore() {
		this.MinIndex = Math.min(this.MinIndex + 5, this.Partners.length);
	}

	checkedIndex!: number;

	onCheckboxChange(index: number): void {
		this.checkedIndex = this.checkedIndex === index ? 0 : index;
	}

	isChecked(index: number): boolean {
		return this.checkedIndex === index;
	}

	onCardHover(index: number): void {
		this.checkedIndex = index;
	}

	onCardLeave(index: number): void {
		if (this.checkedIndex !== 0 && this.checkedIndex === index) {
			this.checkedIndex = 0;
		}
	}

	onCardClick(index: number): void {
		console.log('index', index);
		console.log('checkedIndex', this.checkedIndex);

		if (this.checkedIndex == index) {
			this.onCardLeave(index)
		} else {
			this.onCardHover(index)
		}
	}

}
