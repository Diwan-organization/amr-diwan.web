import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
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
    @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef>;

    private animatedSections: Set<string> = new Set();
    SearchText: string = '';
    regex = /['\s]/g;


    Projects: ArtProjectItem[] = ArtProjects;
    MoreProjects: ArtProjectItem[] = MoreArtProjects;
    filteredProjects: ArtProjectItem[];

    currentProject: string = '';

    @ViewChildren('projectElement') projectElements!: QueryList<ElementRef>;
    activeProjectId: number | null = null;
    observer: IntersectionObserver | null = null;

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
        const offset = 50;
        const position = element.offsetTop - offset;
        const id = element.getAttribute('id');
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }

    ngAfterViewInit() {
        this.filteredProjects = this.Projects;
        this.ActivatedRoute.params.subscribe((params) => {
            this.currentProject = params['project'];
            if (!this.currentProject) return;
            const elementid = `.${this.currentProject.replace(this.regex, '').trim().toLowerCase()}`;
            const element = this.el.nativeElement.querySelector(elementid);
            setTimeout(() => {
                this.scrollTo(element);
            }, 100);
        });
        // this.Animation.Arts();
        this.playPauseVideo();

        if (window.innerWidth > 768) {
            const options = { root: null, threshold: 0.3 };
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const projectId = +entry.target.id.split('-')[1];
                        this.activeProjectId = projectId;
                    }
                });
            }, options);

            this.projectElements.forEach(project => this.observer!.observe(project.nativeElement));
        }
    }

    Animation = {
        Arts: () => {
            const arts = document.querySelectorAll('.hoverable-img-item')!;
            arts.forEach(art => {
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

            const videos = document.querySelectorAll('.div-video')!;
            videos.forEach(art => {
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

        } else {
            this.filteredProjects = this.Projects.filter(category =>
                category.Name.toLowerCase().includes(this.SearchText.trim().toLowerCase())
                || category.Description.toLowerCase().includes(this.SearchText.trim().toLowerCase())
            );
            const menulink = this.el.nativeElement.querySelector('.' + this.filteredProjects[0].Name)
        }

    }

    GoToProject(project: string) {
        this.location.go('/artworks/' + project.toLocaleLowerCase());
        const element = this.el.nativeElement.querySelector(`.${project.replace(' ', '').trim().toLowerCase()}`)
        this.scrollTo(element);
    }

    playPauseVideo() {
        this.videoPlayers.forEach((videoPlayer, index) => {
            setTimeout(() => {
                const videoElement: HTMLVideoElement = videoPlayer.nativeElement;
                if (videoElement.paused) {
                    videoElement.muted = true;
                    videoElement.play();
                }

            }, 500);
        });
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }
}
