import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppConfig } from '@App/Base/AppConfig';
import { ArtProjectItem, ArtProjects, MoreArtProjects } from './Data/Arts';


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

    Projects: ArtProjectItem[] = ArtProjects;
    MoreProjects: ArtProjectItem[] = MoreArtProjects;
    filteredProjects: ArtProjectItem[];

    currentProject: string = '';


    constructor(
        private renderer: Renderer2,
        private el: ElementRef,
        private ActivatedRoute: ActivatedRoute,
        private location: Location,
        protected AppConfig: AppConfig
    ) {
        this.filteredProjects = this.Projects
    }

    ngOnInit(): void { }

    private scrollTo(element: HTMLElement) {
        debugger
        const offset = 50;
        const position = element.offsetTop - offset;
        const id = element.getAttribute('id');
        const categoryAnchor = this.el.nativeElement.querySelector(`a[data-category="${id}"]`);
        this.activetab(categoryAnchor)
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }

    ngAfterViewInit() {
        this.filteredProjects = this.Projects;
        this.ActivatedRoute.params.subscribe((params) => {
            this.currentProject = params['project'];
            if (!this.currentProject) return
            const element = this.el.nativeElement.querySelector(`#${this.currentProject.replace(' ', '').trim().toLocaleUpperCase()}`)
            setTimeout(() => {
                this.scrollTo(element);
            }, 100);
        });
        this.Animation.Arts();
    }

    Animation = {
        Arts: () => {
            debugger;
            const arts = document.querySelectorAll('.hoverable-img-item')!;
            arts.forEach(art => {


                art.classList.remove('art-transition');

                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const categoryAnchor = this.el.nativeElement.querySelector(`a[data-category="${art.parentElement?.parentElement?.getAttribute('id')}"]`);
                            this.activetab(categoryAnchor)
                            art.classList.add('art-transition');
                            return;
                        }
                        art.classList.remove('art-transition');
                    });
                });

                observer.observe(art);
            })

            const videos = document.querySelectorAll('.div-video')!;
            videos.forEach(art => {
                // console.log(project);
                art.classList.remove('art-transition');

                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            art.classList.add('art-transition');
                            return;
                        }
                        art.classList.remove('art-transition');
                    });
                });

                observer.observe(art);
            })
        },
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
