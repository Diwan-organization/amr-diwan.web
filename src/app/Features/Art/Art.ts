import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
    standalone: true,
    templateUrl: './Art.html',
    styleUrls: ['Art.scss'],
    imports: [CommonModule],
})
export class ArtComponent {

    categories = [
        {
            name: 'Category 1',
            img: [
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp'
            ]
        },

        {
            name: 'Category 2',
            img: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp']

        },

        {
            name: 'Category 3',
            img: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp']
        }

    ];


    constructor(private renderer: Renderer2, private el: ElementRef) { }

    ngOnInit() {

        const menuLinks = this.el.nativeElement.querySelectorAll('.menu-div a');

        menuLinks.forEach((link: Element) => {
            link.addEventListener('click', (event: { preventDefault: () => void; }) => {
                event.preventDefault();
                const targetId = link.getAttribute('data-category');
                if (targetId) {
                    menuLinks.forEach((menuLink: { classList: { remove: (arg0: string) => void; }; }) => {
                        menuLink.classList.remove('active');
                    });
                    link.classList.add('active');
                    const targetElement = this.el.nativeElement.querySelector(`#${targetId}`);
                    if (targetElement) {
                        this.scrollTo(targetElement);

                    }
                }
            });
        });



    }

    private scrollTo(element: HTMLElement) {
        const offset = 75; // Adjust this value based on your layout
        const position = element.offsetTop - offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }


    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.checkElementsVisibility();
    }

    ngAfterViewInit() {
        this.checkElementsVisibility();
    }


    private checkElementsVisibility() {
        const elements = this.el.nativeElement.querySelectorAll('.row');
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        elements.forEach((element: HTMLElement) => {
            const category = element.getAttribute('id');
            const categoryAnchor = this.el.nativeElement.querySelector(`a[data-category="${category}"]`);

            const rect = element.getBoundingClientRect();

            if (rect.top <= 150 && rect.bottom > 150) {
                this.renderer.addClass(categoryAnchor, 'active');
            } else {
                this.renderer.removeClass(categoryAnchor, 'active');
            }
        });
    }


}
