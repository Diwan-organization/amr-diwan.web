import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, stagger } from 'motion';
import { Location } from '@angular/common';



class ProjectItem {
    Name!: string;
    Description!: string;
    Videos?: string[]
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
    regex = /\s/g;

    Projects: ProjectItem[] = [
        {
            Name: 'ADIDAS',
            Location: 'EGYPT',
            Description: 'The design incorporates the finest aspects of modern and ancient Egyptian art and architecture into a spectacular masterpiece in the center lays two main elements instantly grabing on attention diwan studios graffiti artwork and adidas trefoil centered in a perfect combination fading away the boundary between art and the everyday world',
            Images: [
                '../../../assets/Images/Projects/Adidas/adidas1.webp',
                '../../../assets/Images/Projects/Adidas/adidas2.webp',
                '../../../assets/Images/Projects/Adidas/adidas3.webp'
            ]

        },
        {
            Name: 'AL RAYYAN',
            Description: 'Graffiti work at the athlete gym of AlRayyanSC (The Lions) in Qatar and the release of the football team\'s new kitwith Nike football',
            Location: 'QATAR',
            Videos: [
                '../../../assets/Images/Projects/alrayyan/alrayyan5.mp4'
            ],
            Images: [
                // '../../../assets/Images/Projects/alrayyan/alrayyan1.webp',
                '../../../assets/Images/Projects/alrayyan/alrayyan2.webp',
                '../../../assets/Images/Projects/alrayyan/alrayyan3.webp',
                '../../../assets/Images/Projects/alrayyan/alrayyan4.webp'
            ]
        },
        {
            Name: 'ALIF',
            Description: 'description 3',
            Location: 'QATAR',
            Images: [
                '../../../assets/Images/Projects/Alif/alf1.webp',
                '../../../assets/Images/Projects/Alif/alf2.webp',
                '../../../assets/Images/Projects/Alif/alf3.webp',
            ]
        },
        {
            Name: 'EAA',
            Description: 'description 3',
            Location: 'QATAR',
            Videos: [
                '../../../assets/Images/Projects/EAA/EAA5.mp4'
            ],
            Images: [
                '../../../assets/Images/Projects/EAA/EAA1.webp',
                '../../../assets/Images/Projects/EAA/EAA2.webp',
                '../../../assets/Images/Projects/EAA/EAA3.webp',
                '../../../assets/Images/Projects/EAA/EAA4.webp',

            ]
        },
        {
            Name: 'FIFA',
            Description: 'description 3',
            Location: 'QATAR',
            Images: [
                '../../../assets/Images/Projects/fifa/fifa1-header.webp',
                '../../../assets/Images/Projects/fifa/fifa2.webp',
                '../../../assets/Images/Projects/fifa/fifa3.webp',
                '../../../assets/Images/Projects/fifa/fifa4.webp'

            ]
        },
        {
            Name: 'HSBC',
            Description: 'description 3',
            Location: 'EGYPT',
            Images: [
                '../../../assets/Images/Projects/Hsbc/hsbc1.webp',
            ]
        },
        {
            Name: 'LANE9',
            Description: 'description 3',
            Location: 'EGYPT',
            Images: [
                '../../../assets/Images/Projects/Lane9/lane1.webp',
                '../../../assets/Images/Projects/Lane9/lane2.webp',
                '../../../assets/Images/Projects/Lane9/lane3.webp',
                '../../../assets/Images/Projects/Lane9/lane4.webp',
                '../../../assets/Images/Projects/Lane9/lane5.webp',
                '../../../assets/Images/Projects/Lane9/lane6.webp',
                '../../../assets/Images/Projects/Lane9/lane7.webp',
                '../../../assets/Images/Projects/Lane9/lane8.webp',
                '../../../assets/Images/Projects/Lane9/lane9.webp',
                '../../../assets/Images/Projects/Lane9/lane10.webp',
                '../../../assets/Images/Projects/Lane9/lane11.webp',
                '../../../assets/Images/Projects/Lane9/lane12.webp',

            ]
        }
        ,
        {
            Name: 'MONDELEZ',
            Description: 'description 3',
            Location: 'EGYPT',
            Images: [
                '../../../assets/Images/Projects/mondelez/mondelez1.webp',
                '../../../assets/Images/Projects/mondelez/mondelez2.webp',
                '../../../assets/Images/Projects/mondelez/mondelez3.webp',
                '../../../assets/Images/Projects/mondelez/mondelez4.webp',
                '../../../assets/Images/Projects/mondelez/mondelez5.webp',
                '../../../assets/Images/Projects/mondelez/mondelez6.webp',
                '../../../assets/Images/Projects/mondelez/mondelez7.webp',
                '../../../assets/Images/Projects/mondelez/mondelez8.webp',
            ]
        },
        {
            Name: 'PUBG',
            Description: 'description 3',
            Location: 'EGYPT',
            Videos: [
                '../../../assets/Images/Projects/PUBG/pubg5.mp4',
            ],
            Images: [
                '../../../assets/Images/Projects/PUBG/pubg1.webp',
                '../../../assets/Images/Projects/PUBG/pubg2.webp',
                '../../../assets/Images/Projects/PUBG/pubg3.webp',
                '../../../assets/Images/Projects/PUBG/pubg4.webp',
            ]
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
    }

    private scrollTo(element: HTMLElement) {
        // debugger
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
        this.filteredProjects = this.Projects;
        this.ActivatedRoute.params.subscribe((params) => {
            this.project = params['project'];
            if (!this.project) return
            const element = this.el.nativeElement.querySelector(`#${this.project.replace(' ', '').trim().toLocaleUpperCase()}`)
            setTimeout(() => {
                this.scrollTo(element);
            }, 100);
        });
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
            this.activetab(undefined)

        } else {
            this.filteredProjects = this.Projects.filter(category =>
                category.Name.toLowerCase().includes(this.SearchText.trim().toLowerCase())
                || category.Description.toLowerCase().includes(this.SearchText.trim().toLowerCase())
            );
            const menulink = this.el.nativeElement.querySelector('.' + this.filteredProjects[0].Name)
            this.activetab(menulink)
        }

    }
    activetab(link?: Element) {
        const menuLinks = this.el.nativeElement.querySelectorAll('#categories');
        menuLinks.forEach((link: Element) => {
            link.classList.remove('active');
        })
        if (link) {
            link.classList.add('active');

        } else {
            menuLinks[0].classList.add('active');
        }

    }

    attachClickEventListeners(project: string) {
        debugger
        this.location.go('/artworks/' + project.toLocaleLowerCase());
        const element = this.el.nativeElement.querySelector(`#${project.replace(' ', '').trim().toLocaleUpperCase()}`)
        this.scrollTo(element);
    }
}
