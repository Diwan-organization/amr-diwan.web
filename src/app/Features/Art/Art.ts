import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, stagger } from 'motion';
import { Location } from '@angular/common';



class ProjectItem {
    Name!: string;
    Description!: string;
    Images!: string[];
    Location!: string;
}


@Component({
    standalone: true,
    templateUrl: './Art.html',
    styleUrls: ['Art.scss'],
    imports: [CommonModule, FormsModule],

})
export class ArtComponent implements OnInit {
    private animatedSections: Set<string> = new Set();
    SearchText: string = '';
    Projects: ProjectItem[] = [
        {
            Name: 'FIFA',
            Description: 'kmldsvfnkjclsmn jckc danlkx dsjkndwk scd',
            Location: 'Qatar',
            Images: [
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp'
            ]

        },
        {
            Name: 'HSBC',
            Description: 'description 1',
            Location: 'Egypt',
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
            Name: 'MOUSSA',
            Description: 'description 3',
            Location: 'KSA',
            Images: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp']
        },
        {
            Name: 'MERYAL',
            Description: 'description 3',
            Location: 'KSA',
            Images: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp']
        },
        {
            Name: 'ADIDAS',
            Description: 'description 3',
            Location: 'KSA',
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

    MoreProjects: ProjectItem[] = [
        {
            Name: 'Project 1',
            Description: 'description 1',
            Location: 'KSA',
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
            Location: 'Qatar',
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
            Location: 'Egypt',
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
    filteredProjects: ProjectItem[];
    project: string = '';


    constructor(private renderer: Renderer2, private el: ElementRef, private ActivatedRoute: ActivatedRoute, private location: Location) {
        this.filteredProjects = this.Projects
    }
    ngOnInit(): void {
        this.filteredProjects = this.Projects;
        this.ActivatedRoute.params.subscribe((params) => {
            this.project = params['project'];
            this.RouteToProject(this.project)
        });
    }

    private scrollTo(element: HTMLElement) {
        const offset = 50;
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
        threshold: 0.1,
    };
    private checkElementsVisibility() {
        const elements = this.el.nativeElement.querySelectorAll('.category');
        elements.forEach((element: HTMLElement) => {
            const category = element.getAttribute('id');
            const categoryAnchor = this.el.nativeElement.querySelector(`a[data-category="${category}"]`);
            const rect = element.getBoundingClientRect();
            if (rect.top <= 400 && rect.bottom > 400) {
                this.renderer.addClass(categoryAnchor, 'active');
                if (category != null && !this.animatedSections.has(category)) {
                    const observerprojects = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                const imgFluidElements = element.querySelectorAll('.img');
                                animate(
                                    imgFluidElements,
                                    {
                                        opacity: [0, 0.5, 1],
                                        y: [15, 0],
                                    },
                                    {
                                        delay: stagger(0.05),
                                        duration: 0.6,
                                        easing: ['ease-in-out'],
                                    }
                                );

                                observerprojects.disconnect();
                                this.animatedSections.add(category);
                            }
                        });
                    }, this.observerOptions);

                    observerprojects.observe(element);
                }
            } else {
                this.renderer.removeClass(categoryAnchor, 'active');
            }
        });
    }

    Search() {
        this.animatedSections.clear();
        if (this.SearchText.trim() === '') {
            this.filteredProjects = this.Projects;

        } else {
            this.filteredProjects = this.Projects.filter(category =>
                category.Name.toLowerCase().includes(this.SearchText.trim().toLowerCase()) ||
                category.Description.toLowerCase().includes(this.SearchText.trim().toLowerCase())
            );

        }

    }

    RouteToProject(project: string) {
        const menuLinks = this.el.nativeElement.querySelectorAll('#categories');
        menuLinks.forEach((link: Element) => {
            link.classList.remove('active');
        })
        if (project) {
            const link = this.el.nativeElement.querySelector('.' + project.toLocaleUpperCase()) || this.el.nativeElement.querySelector('.' + project)
            if (link) {
                link.classList.add('active');
                const targetElement = this.el.nativeElement.querySelector(`#${project.toLocaleUpperCase()}`);
                if (targetElement) {
                    this.scrollTo(targetElement);
                }
            }
        }
        else {
            menuLinks[0].classList.add('active');

        }
    }
    attachClickEventListeners(project: string) {
        this.location.go('/artworks/' + project.toLocaleLowerCase());
        this.RouteToProject(project.toLocaleLowerCase());
        // const menuLinks = this.el.nativeElement.querySelectorAll('#categories');
        // menuLinks.forEach((link: Element) => {
        //     link.classList.remove('active');
        // })
        // menuLinks.forEach((link: Element) => {
        //     link.addEventListener('click', (event: { preventDefault: () => void; }) => {
        // const targetId = link.getAttribute('data-category');
        // if (targetId) {

        // }
        //             });
        //         });
        //     }
    }



    // const link = this.el.nativeElement.querySelector('.' + project.toLocaleLowerCase())
    // if (link) {
    //     link.classList.add('active');
    //     const targetElement = this.el.nativeElement.querySelector(`#${project}`);
    //     if (targetElement) {
    //         this.scrollTo(targetElement);
    //     }
    // }
    // else {
    //     const menuLinks = this.el.nativeElement.querySelectorAll('#categories').first().classList.add('active');
}
