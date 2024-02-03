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
			ImgSrc: 'assets/Images/tayiaki-banner.jpg',
			ImgAlt: '',
			Caption: {
				Title: 'Third slide label',
				Description: 'Some representative placeholder content for the third slide.',
			}
		}
	]

	images: string[] = [
		'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
		'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
		'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
		'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
		'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
		'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
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
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
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
		{
			ImgSrc: 'assets/Images/founder.jpeg',
			ImgAlt: '',
			Caption: {
				Title: 'Second slide label',
				Description: 'Some representative placeholder content for the second slide.',
			}
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
						{ y: 40 },
						{
							delay: stagger(0.6),
							duration: 0.1,
							easing: [0.22, 0.03, 0.26, 1],
						}
					);
					observerprojects.disconnect();
				}
			});
		}, this.observerOptions);

		// Start observing the 'about' section
		observerprojects.observe(sectionProjects);

		const sectionAbout: any = document.querySelector('.about');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// The 'about' section is in view, trigger animations
					animate(
						'.left-about',
						{ y: [-1000, 310] },
						{ delay: stagger(0.1), duration: 0.2 }
					);
					animate(
						'.right-about',
						{ y: [-1000, 80] },
						{ delay: stagger(0.1), duration: 0.9 }
					);

					// Disconnect the observer after triggering the animations once
					observer.disconnect();
				}
			});
		}, this.observerOptions);

		// Start observing the 'about' section
		observer.observe(sectionAbout);
	}

	showVisibleDiv(index: number): void {
		this.hoveredIndex = index;
	}

	hideVisibleDiv(index: number): void {
		this.hoveredIndex = null;
	}
}
