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
			Number: '15',
			Description: '',
			Link: '',
			TimeInterval: 100
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Projects',
			Number: '25',
			Description: '',
			Link: '',
			TimeInterval: 70
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Countries',
			Number: '4',
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
			ImgSrc: 'assets/Logos/4seasons.png ',
			ImgAlt: 'about the artist',
			Title: 'The Artist',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/adidas.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/amazon.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/Careem2.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/fifa.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/hsbc.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/moneyfellows.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/opel.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/oppo.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/Orange.png ',
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
		}
	]
	x = this.Partners.map(p => p.ImgSrc)

	constructor(private Router: Router) { }

	ngOnInit(): void {
		// ///3wza agrb a3ml 3l elemnt msh section
		// const sectionProjects: any = document.querySelector('.projects');
		// const observerprojects = new IntersectionObserver((entries) => {
		// 	entries.forEach((entry) => {
		// 		if (entry.isIntersecting) {
		// 			animate(
		// 				'.gallery-img',
		// 				{
		// 					opacity: [0, 1],
		// 					y: [-20, 0],

		// 				},
		// 				{
		// 					delay: stagger(0.2),
		// 					duration: 0.5,
		// 					easing: ['ease-in-out'],
		// 				}
		// 			);
		// 			animate(
		// 				'.browse-more',
		// 				{ opacity: [0, 1], y: [-40, 0] },
		// 				{
		// 					delay: stagger(0.6),
		// 					duration: 0.5,
		// 					easing: ['ease-in-out'],
		// 				}
		// 			);
		// 			observerprojects.disconnect();
		// 		}
		// 	});
		// }, this.observerOptions);
		// observerprojects.observe(sectionProjects);




		// // // Start observing the 'about' section
		// // const sectionAbout: any = document.querySelector('.about');
		// // const observerAbout = new IntersectionObserver((entries) => {
		// // 	entries.forEach((entry) => {
		// // 		if (entry.isIntersecting) {
		// // 			// The 'about' section is in view, trigger animations
		// // 			animate(
		// // 				'.browse-more',
		// // 				{ y: [-20, 0] },
		// // 				{ delay: stagger(0.1), duration: 0.2 }
		// // 			);
		// // 			animate(
		// // 				'.title',
		// // 				{ y: [-20, 0] },
		// // 				{ delay: stagger(0.1), duration: 0.2 }
		// // 			);
		// // 			animate(
		// // 				'.sub-title',
		// // 				{ y: [-20, 0] },
		// // 				{ delay: stagger(0.1), duration: 0.2 }
		// // 			);
		// // 			animate(
		// // 				'.tab-content',
		// // 				{ y: [-20, 0] },
		// // 				{ delay: stagger(0.1), duration: 0.9 }
		// // 			);

		// // 			// Disconnect the observer after triggering the animations once
		// // 			observerNews.disconnect();
		// // 		}
		// // 	});
		// // }, this.observerOptions);
		// // observerAbout.observe(sectionAbout);




		// // Start observing the 'latest-news' section
		// const sectionLatestNews: any = document.querySelector('.latest-news');
		// const observerNews = new IntersectionObserver((entries) => {
		// 	entries.forEach((entry) => {
		// 		if (entry.isIntersecting) {
		// 			// The 'about' section is in view, trigger animations
		// 			animate(
		// 				'.card',
		// 				{
		// 					opacity: [0, 1],
		// 					// x: [-20, 0],
		// 					rotateY: ['-90deg', '0deg']
		// 				},
		// 				{
		// 					delay: stagger(0.2),
		// 					duration: 0.5,
		// 					easing: ['ease-in-out'],
		// 				}
		// 			);
		// 			animate(
		// 				'.title',
		// 				{ y: [-20, 0] },
		// 			);
		// 			// Disconnect the observer after triggering the animations once
		// 			observerNews.disconnect();
		// 		}
		// 	});
		// }, this.observerOptions);
		// observerNews.observe(sectionLatestNews);
	}

	// stats animation
	ngAfterViewInit() {
		// this.StatAnimation()

		this.Animation.LandingText();
		this.Animation.About();
		this.Animation.Stat();
		this.Animation.Projects();
		this.Animation.Partners();

	}

	// hoveredIndex: number | null = null;
	// StatAnimation() {
	// 	const number = document.querySelectorAll(".number");
	// 	const title = document.querySelectorAll(".stat-title");
	// 	const description = document.querySelectorAll(".description");

	// 	const observerOptions = {
	// 		root: null,
	// 		rootMargin: '0px',
	// 		threshold: 0.2
	// 	};

	// 	const observer = new IntersectionObserver((entries) => {
	// 		entries.forEach(entry => {
	// 			if (entry.isIntersecting) {
	// 				this.startAnimation(number, title, description);
	// 				observer.disconnect();
	// 			}
	// 		});
	// 	}, observerOptions);

	// 	if (number && number[0]) {
	// 		observer.observe(number[0]);
	// 	}
	// }

	// startAnimation(number: any, title: any, description: any) {
	// 	setTimeout(() => {
	// 		number[0].setAttribute("style", "opacity:1");
	// 		animate(
	// 			(progress) => {
	// 				number[0].innerHTML = (Math.round(progress * 15)).toString();

	// 				if (progress === 1) {
	// 					number[0].innerHTML += "+";
	// 				}
	// 			},
	// 			{ duration: 0.5, easing: "ease-out" }
	// 		);
	// 		title[0].setAttribute("style", "opacity:1");
	// 		description[0].setAttribute("style", "opacity:1");
	// 		setTimeout(() => {
	// 			number[1].setAttribute("style", "opacity:1");
	// 			animate(
	// 				(progress) => {
	// 					number[1].innerHTML = (Math.round(progress * 4)).toString();
	// 				},
	// 				{ duration: 0.2, easing: "ease-out" }
	// 			);
	// 			title[1].setAttribute("style", "opacity:1");
	// 			description[1].setAttribute("style", "opacity:1");

	// 			setTimeout(() => {
	// 				number[2].setAttribute("style", "opacity:1");
	// 				animate(
	// 					(progress) => {
	// 						number[2].innerHTML = (Math.round(progress * 25)).toString();
	// 					},
	// 					{ duration: 0.5, easing: "ease-out" }
	// 				);
	// 				title[2].setAttribute("style", "opacity:1");
	// 				description[2].setAttribute("style", "opacity:1");
	// 			}, 500);
	// 		}, 700);
	// 	}, 700);
	// }

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
							if (numberElement.id == 0 || numberElement.id == 3) {
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
