import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './Art.html',
  styleUrls: ['Art.scss'],
  imports: [CommonModule],
})
export class ArtComponent {
  images: string[] = [
    'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
    'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
    'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
    'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
    'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
    'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
  ];
}
