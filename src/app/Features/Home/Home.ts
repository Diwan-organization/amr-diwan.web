import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate, scroll, stagger } from 'motion';
import { delay } from 'rxjs';

@Component({
  standalone: true,
  templateUrl: './Home.html',
  styleUrls: ['Home.scss'],
  imports: [FormsModule, CommonModule],
})
export class HomeComponent implements OnInit {
  observerOptions: {} = {
    root: null,
    rootMargin: '10px',
    threshold: 0.1, // Adjust this threshold based on your needs
  };
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

  images: string[] = [
    'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
    'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
    'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
    'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
    'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
    'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
  ]; // Add your image file names
  hoveredIndex: number | null = null;

  showVisibleDiv(index: number): void {
    this.hoveredIndex = index;
  }

  hideVisibleDiv(index: number): void {
    this.hoveredIndex = null;
  }
}
