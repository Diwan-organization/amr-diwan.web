import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate, stagger } from 'motion';
import { RoutePaths } from 'src/app/Common/Settings/RoutePaths';
import { RouterModule } from '@angular/router';

class CarouselItem {
	ImgSrc!: string;
	ImgAlt!: string;
	Caption!: {
		Title: string;
		Description: string;
	};
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


@Component({
	standalone: true,
	templateUrl: './Home.html',
	styleUrls: ['Home.scss'],
	imports: [FormsModule, CommonModule, RouterModule],
})
export class HomeComponent implements OnInit {
	RoutePaths = RoutePaths;
	observerOptions: {} = {
		root: null,
		rootMargin: '10px',
		threshold: 0.1, // Adjust this threshold based on your needs
	};

	LandingCarousel: CarouselItem[] = [
		{
			ImgSrc: 'assets/Images/kansas-wall-2.jpg',
			ImgAlt: 'news image :',
			Caption: {
				Title: 'First slide label',
				Description: 'Some representative placeholder content for the first slide.',
			}
		},
		{
			ImgSrc: 'assets/Images/dog-wall.jpg',
			ImgAlt: '',
			Caption: {
				Title: 'Second slide label',
				Description: 'Some representative placeholder content for the second slide.',
			}
		},
		{
			ImgSrc: 'assets/Images/girl-wall.jpg',
			ImgAlt: '',
			Caption: {
				Title: 'Third slide label',
				Description: 'Some representative placeholder content for the third slide.',
			}
		}
	]

	images: string[] = [
		'assets/Images/girl-wall.jpg',
		'assets/Images/dog-wall-2.jpg',
		'assets/Images/girl-wall-2.jpg',
		'assets/Images/girl-wall-3.jpg',
		'assets/Images/girl-wall-4.jpg',
		'assets/Images/girl-wall-5.jpg',
	]; // Add your image file names

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

	About: AboutItem[] = [
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
			ImgAlt: 'about the artist',
			Title: 'The Artist',
			Description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
			Link: '',
		},
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
			Link: '',
		}
	]

	ReviewsCarousel: CarouselItem[] = [
		{
			ImgSrc: 'assets/Images/founder.jpeg',
			ImgAlt: 'news image :',
			Caption: {
				Title: 'First slide label',
				Description: 'Some representative placeholder content for the first slide.',
			}
		},
		// {
		// 	ImgSrc: 'assets/Images/founder.jpeg',
		// 	ImgAlt: '',
		// 	Caption: {
		// 		Title: 'Second slide label',
		// 		Description: 'Some representative placeholder content for the second slide.',
		// 	}
		// }
	]

	Partners: AboutItem[] = [
		{
			ImgSrc: 'assets/Images/logo1.png',
			ImgAlt: 'about the artist',
			Title: 'The Artist',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Images/logo2.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Images/logo3.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		}
	]
	hoveredIndex: number | null = null;

	ngOnInit(): void {
		///3wza agrb a3ml 3l elemnt msh section
		const sectionProjects: any = document.querySelector('.projects');
		const observerprojects = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animate(
						'.gallery-img',
						{
							opacity: [0, 1],
							y: [-20, 0],

						},
						{
							delay: stagger(0.2),
							duration: 0.5,
							easing: ['ease-in-out'],
						}
					);
					animate(
						'.browse-more',
						{ opacity: [0, 1], y: [-40, 0] },
						{
							delay: stagger(0.6),
							duration: 0.5,
							easing: ['ease-in-out'],
						}
					);
					observerprojects.disconnect();
				}
			});
		}, this.observerOptions);
		observerprojects.observe(sectionProjects);





		// // Start observing the 'about' section
		// const sectionAbout: any = document.querySelector('.about');
		// const observerAbout = new IntersectionObserver((entries) => {
		// 	entries.forEach((entry) => {
		// 		if (entry.isIntersecting) {
		// 			// The 'about' section is in view, trigger animations
		// 			animate(
		// 				'.browse-more',
		// 				{ y: [-20, 0] },
		// 				{ delay: stagger(0.1), duration: 0.2 }
		// 			);
		// 			animate(
		// 				'.title',
		// 				{ y: [-20, 0] },
		// 				{ delay: stagger(0.1), duration: 0.2 }
		// 			);
		// 			animate(
		// 				'.sub-title',
		// 				{ y: [-20, 0] },
		// 				{ delay: stagger(0.1), duration: 0.2 }
		// 			);
		// 			animate(
		// 				'.tab-content',
		// 				{ y: [-20, 0] },
		// 				{ delay: stagger(0.1), duration: 0.9 }
		// 			);

		// 			// Disconnect the observer after triggering the animations once
		// 			observerNews.disconnect();
		// 		}
		// 	});
		// }, this.observerOptions);
		// observerAbout.observe(sectionAbout);




		// Start observing the 'latest-news' section
		const sectionLatestNews: any = document.querySelector('.latest-news');
		const observerNews = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// The 'about' section is in view, trigger animations
					animate(
						'.card',
						{
							opacity: [0, 1],
							// x: [-20, 0],
							rotateY: ['-90deg', '0deg']
						},
						{
							delay: stagger(0.2),
							duration: 0.5,
							easing: ['ease-in-out'],
						}
					);
					animate(
						'.title',
						{ y: [-20, 0] },
					);
					// Disconnect the observer after triggering the animations once
					observerNews.disconnect();
				}
			});
		}, this.observerOptions);
		observerNews.observe(sectionLatestNews);
	}

	showVisibleDiv(index: number): void {
		this.hoveredIndex = index;
	}

	hideVisibleDiv(index: number): void {
		this.hoveredIndex = null;
	}
}
