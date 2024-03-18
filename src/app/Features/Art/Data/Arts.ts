export class ArtProjectItem {
    Name!: string;
    Description!: string;
    Videos?: string[]
    Images!: string[];
    Location!: string;
    Link?: string;
}


export const ArtProjects: ArtProjectItem[] = [
    {
        Name: 'FIFA',
        Description: 'Exclusive artistry in Qatar World Cup 2022 Where passion meets art through our Graffiti at Al-thomama and Al-Janub Stadiums.\nNumber of walls: 2 walls at Al-thomama stadium 3 walls at Al-Jandub stadium.',
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
        Description: 'This is from the "Vision of Our City" campaign.\nThe idea of representing each location of the bank in\nthis project we worked on the headquarters in Cairo.\nIn the piece we include pixels and personalities that\ndepict the role of technology and a new female-led\ngeneration of entrepreneurs. This generation is putting\nsustainable initiatives first, represented by plants and the\nshape of the lotus; a symbol of rebirth.',
        Location: 'EGYPT',
        Images: [
            '../../../assets/Images/Projects/Hsbc/hsbc1.webp',
            '../../../assets/Images/Projects/Hsbc/hsbc-lion.png',
        ]
    },
    {
        Name: 'AL RAYYAN',
        Description: 'Graffiti work at the athlete gym of AlRayyanSC (The Lions) in Qatar and the release of the football team\'s new kitwith Nike football.',
        Location: 'QATAR',
        Videos: [
            '../../../assets/Images/Projects/alrayyan/alrayyan5-1.mp4'
        ],
        Images: [
            // '../../../assets/Images/Projects/alrayyan/alrayyan1.webp',
            '../../../assets/Images/Projects/alrayyan/alrayyan2.webp',
            '../../../assets/Images/Projects/alrayyan/alrayyan3.webp',
            '../../../assets/Images/Projects/alrayyan/alrayyan4.webp'
        ]
    },
    {
        Name: 'ADIDAS',
        Location: 'EGYPT',
        Description: 'The design incorporates the finest aspects of modern and ancient Egyptian art and architecture into a spectacular masterpiece in the center lays two main elements instantly grabing on attention diwan studios graffiti artwork and adidas trefoil centered in a perfect combination fading away the boundary between art and the everyday world.',
        Images: [
            '../../../assets/Images/Projects/Adidas/adidas1.webp',
            '../../../assets/Images/Projects/Adidas/adidas2.webp',
            '../../../assets/Images/Projects/Adidas/adidas3.webp'
        ]

    },
    {
        Name: 'ALIF',
        Description: 'Creating a mural featuring Lionel Messi, Diego Maradon and Pelé as champions to celebrate iconic figures in football history.\nMatching the World Cup Vibes in Qatar.',
        Location: 'QATAR',
        Images: [
            '../../../assets/Images/Projects/Alif/alf1.webp',
            '../../../assets/Images/Projects/Alif/alf2.webp',
            '../../../assets/Images/Projects/Alif/alf3.webp',
        ]
    },
    {
        Name: 'EAA',
        Description: 'EAA envisions bringing new life chances, real hope and opportunities to improve the lives of poor and marginalised children, youth and women especially in the developing world.',
        Location: 'QATAR',
        Videos: [
            '../../../assets/Images/Projects/EAA/EAA5-1.mp4'
        ],
        Images: [
            // '../../../assets/Images/Projects/EAA/EAA1.webp',
            '../../../assets/Images/Projects/EAA/EAA4.webp',
            '../../../assets/Images/Projects/EAA/EAA2.webp',
            '../../../assets/Images/Projects/EAA/EAA3.webp',
        ]
    },
    {
        Name: 'LANE9',
        Description: 'Fluorescent interactive art concept around 500 meter square.',
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
            // '../../../assets/Images/Projects/Lane9/lane12.webp',
        ]
    }
    ,
    {
        Name: 'MONDELEZ',
        Description: `The point here was to story-tell the employees' health, safety and enviroment through typography.\naccentuating the brand names of Mondelez through applying the popping colors for a lively atmosphere`,
        Location: 'EGYPT',
        Images: [
            '../../../assets/Images/Projects/mondelez/mondelez1.webp',
            '../../../assets/Images/Projects/mondelez/mondelez2.webp',
            '../../../assets/Images/Projects/mondelez/mondelez3.webp',
            '../../../assets/Images/Projects/mondelez/mondelez4.webp',
            '../../../assets/Images/Projects/mondelez/mondelez5.webp',
            // '../../../assets/Images/Projects/mondelez/mondelez6.webp',
        ]
    },
    {
        Name: 'PUBG',
        Description: `In celebration of Vikendi Reborn we couldn't miss the chance to add our touches onto PS5 with an illustraion for PubG game.`,
        Location: 'EGYPT',
        Videos: [
            '../../../assets/Images/Projects/PUBG/pubg5-1.mp4',
        ],
        Images: [
            '../../../assets/Images/Projects/PUBG/pubg1.png',
            '../../../assets/Images/Projects/PUBG/pubg2.webp',
            '../../../assets/Images/Projects/PUBG/pubg3.webp',
            '../../../assets/Images/Projects/PUBG/pubg4.webp',
        ]
    }
];

export const MoreArtProjects: ArtProjectItem[] = [
    {
        Name: 'Project 1',
        Description: 'description 1',
        Location: 'KSA',
        Images: [
            'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
        ],
        Link: 'artworks/commercial/fifa'
    },
    {
        Name: 'Project 2',
        Description: 'description 2',
        Location: 'Qatar',
        Images: [
            'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp'
        ],
        Link: 'artworks/restaurants/hsbc'
    },
];
