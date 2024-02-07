import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { animate, stagger } from 'motion';


class CategoryItem {
    Name!: string;
    Description!: string;
    Images!: string[]
}


@Component({
    standalone: true,
    templateUrl: './Art.html',
    styleUrls: ['Art.scss'],
    imports: [CommonModule],

})
export class ArtComponent {
    private animatedSections: Set<string> = new Set();

    categories: CategoryItem[] = [
        {
            Name: 'Project 1',
            Description: 'description 1',
            Images: [
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
            Name: 'Project 2',
            Description: 'description 2',
            Images: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp']

        },

        {
            Name: 'Project 3',
            Description: 'description 3',
            Images: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
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
    observerOptions: {} = {
        root: null,
        rootMargin: '10px',
        threshold: 0.1, // Adjust this threshold based on your needs
    };
    private checkElementsVisibility() {
        // const elements = this.el.nativeElement.querySelectorAll('.category');
        // elements.forEach((element: HTMLElement) => {
        //     const category = element.getAttribute('id');
        //     const categoryAnchor = this.el.nativeElement.querySelector(`a[data-category="${category}"]`);
        //     const rect = element.getBoundingClientRect();

        //     if (rect.top <= 150 && rect.bottom > 150) {
        //         this.renderer.addClass(categoryAnchor, 'active');

        //         if (category != null && !this.animatedSections.has(category)) {
        //             const observerprojects = new IntersectionObserver((entries) => {
        //                 entries.forEach((entry) => {
        //                     if (entry.isIntersecting) {
        //                         const imgFluidElements = element.querySelectorAll('.img-fluid');

        //                         animate(
        //                             imgFluidElements,
        //                             {
        //                                 opacity: [0, 1],
        //                                 y: [-20, 0],
        //                             },
        //                             {
        //                                 delay: stagger(0.2),
        //                                 duration: 0.5,
        //                                 easing: ['ease-in-out'],
        //                             }
        //                         );

        //                         observerprojects.disconnect();
        //                         this.animatedSections.add(category);
        //                     }
        //                 });
        //             }, this.observerOptions);

        //             observerprojects.observe(element);
        //         }
        //     } else {
        //         this.renderer.removeClass(categoryAnchor, 'active');
        //     }
        // });
    }


}
