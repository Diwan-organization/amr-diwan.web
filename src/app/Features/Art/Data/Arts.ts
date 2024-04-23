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
        Name: 'MERYAL',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita, soluta eos harum ea vero in laboriosam omnis magnam quis deleniti ex cumque nemo nisi labore sint atque tempora commodi voluptatibus corporis molestias delectus quidem sed iusto. Velit, cumque tenetur! Exercitationem molestias vero voluptate dicta aperiam impedit excepturi laboriosam cumque!',
        Location: 'QATAR',
        Images: [
            'assets/Images/Projects/meryal/1.webp',
            'assets/Images/Projects/meryal/2.webp',
            'assets/Images/Projects/meryal/3.webp',
            'assets/Images/Projects/meryal/4.webp',
            'assets/Images/Projects/meryal/5.webp',
        ]
    },
    {
        Name: 'AL MOOSA',
        Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita, soluta eos harum ea vero in laboriosam omnis magnam quis deleniti ex cumque nemo nisi labore sint atque tempora commodi voluptatibus corporis molestias delectus quidem sed iusto. Velit, cumque tenetur! Exercitationem molestias vero voluptate dicta aperiam impedit excepturi laboriosam cumque!',
        Location: 'KSA',
        Videos: [
            'assets/Images/Projects/almoosa/6.mp4'
        ],
        Images: [
            'assets/Images/Projects/almoosa/1.webp',
            'assets/Images/Projects/almoosa/2.webp',
            'assets/Images/Projects/almoosa/3.webp',
            'assets/Images/Projects/almoosa/4.webp',
            'assets/Images/Projects/almoosa/5.webp',
        ]
    },
    {
        Name: 'FIFA',
        Description: 'Exclusive artistry in Qatar World Cup 2022 Where passion meets art through our Graffiti at Al-thomama and Al-Janub Stadiums.\nNumber of walls: 2 walls at Al-thomama stadium 3 walls at Al-Jandub stadium.',
        Location: 'QATAR',
        Images: [
            'assets/Images/Projects/fifa/fifa1-header.webp',
            'assets/Images/Projects/fifa/fifa2.webp',
            'assets/Images/Projects/fifa/fifa3.webp',
            'assets/Images/Projects/fifa/fifa4.webp'

        ]
    },
    {
        Name: 'AL RAYYAN',
        Description: 'Graffiti work at the athlete gym of AlRayyanSC (The Lions) in Qatar and the release of the football team\'s new kitwith Nike football.',
        Location: 'QATAR',
        Videos: [
            'assets/Images/Projects/alrayyan/alrayyan5-1.mp4'
        ],
        Images: [
            // 'assets/Images/Projects/alrayyan/alrayyan1.webp',
            'assets/Images/Projects/alrayyan/alrayyan2.webp',
            'assets/Images/Projects/alrayyan/alrayyan3.webp',
            'assets/Images/Projects/alrayyan/alrayyan4.webp'
        ]
    },
    {
        Name: 'ALIF',
        Description: 'Creating a mural featuring Lionel Messi, Diego Maradon and Pelé as champions to celebrate iconic figures in football history.\nMatching the World Cup Vibes in Qatar.',
        Location: 'QATAR',
        Images: [
            'assets/Images/Projects/Alif/alf1.webp',
            'assets/Images/Projects/Alif/alf2.webp',
            'assets/Images/Projects/Alif/alf3.webp',
        ]
    },
    {
        Name: 'HSBC',
        Description: 'This is from the "Vision of Our City" campaign.\nThe idea of representing each location of the bank in\nthis project we worked on the headquarters in Cairo.\nIn the piece we include pixels and personalities that\ndepict the role of technology and a new female-led\ngeneration of entrepreneurs. This generation is putting\nsustainable initiatives first, represented by plants and the\nshape of the lotus; a symbol of rebirth.',
        Location: 'EGYPT',
        Images: [
            'assets/Images/Projects/Hsbc/hsbc1.webp',
            'assets/Images/Projects/Hsbc/hsbc-lion.png',
        ]
    },
    {
        Name: 'EAA',
        Description: 'EAA envisions bringing new life chances, real hope and opportunities to improve the lives of poor and marginalised children, youth and women especially in the developing world.',
        Location: 'QATAR',
        Videos: [
            'assets/Images/Projects/EAA/EAA5-1.mp4'
        ],
        Images: [
            // 'assets/Images/Projects/EAA/EAA1.webp',
            'assets/Images/Projects/EAA/EAA4.webp',
            'assets/Images/Projects/EAA/EAA2.webp',
            'assets/Images/Projects/EAA/EAA3.webp',
        ]
    },
    {
        Name: 'PUBG',
        Description: `In celebration of Vikendi Reborn we couldn't miss the chance to add our touches onto PS5 with an illustraion for PubG game.`,
        Location: 'EGYPT',
        Videos: [
            'assets/Images/Projects/PUBG/pubg5-1.mp4',
        ],
        Images: [
            'assets/Images/Projects/PUBG/pubg1.png',
            'assets/Images/Projects/PUBG/pubg2.webp',
            'assets/Images/Projects/PUBG/pubg3.webp',
            'assets/Images/Projects/PUBG/pubg4.webp',
        ]
    },
    {
        Name: 'ADIDAS',
        Location: 'EGYPT',
        Description: 'The design incorporates the finest aspects of modern and ancient Egyptian art and architecture into a spectacular masterpiece in the center lays two main elements instantly grabing on attention diwan studios graffiti artwork and adidas trefoil centered in a perfect combination fading away the boundary between art and the everyday world.',
        Images: [
            'assets/Images/Projects/Adidas/adidas1.webp',
            'assets/Images/Projects/Adidas/adidas2.webp',
            'assets/Images/Projects/Adidas/adidas3.webp'
        ]

    },
    {
        Name: 'MONEY FELLOWS',
        Location: 'EGYPT',
        Description: 'The graffiti drawn on the walls of their head offices in cairo took the walls to another place to keep up the positive vibes in the place.',
        Images: [
            'assets/Images/Projects/money-fellows/1.jpg',
            'assets/Images/Projects/money-fellows/2.jpg',
            'assets/Images/Projects/money-fellows/3.webp'
        ]

    }
];

export const MoreArtProjects: ArtProjectItem[] =
    [
        {
            Name: 'LANE9',
            Description: 'Fluorescent interactive art concept around 500 meter square.',
            Location: 'EGYPT',
            Images: [
                'assets/Images/More-Projects/lane2.webp',
            ],
            Link: 'artworks/entertainment/lane9'
        }
        ,
        {
            Name: 'MONDELEZ',
            Description: `The point here was to story-tell the employees' health, safety and enviroment through typography.\naccentuating the brand names of Mondelez through applying the popping colors for a lively atmosphere`,
            Location: 'EGYPT',
            Images: [
                'assets/Images/More-Projects/mondelez1.webp',
            ],
            Link: 'artworks/officesandfactories/mondelez'
        },
        {
            Name: 'Orange',
            Description: 'Whole building consist of 11 floors.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/orange.webp',
            ],
            Link: 'artworks/Officesandfactories/orange'

        },
        {
            Name: 'Careem',
            Description: 'Inspiring graffiti art used as a motivation for growth using the brand color.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/careem1.webp'
            ],
            Link: 'artworks/Officesandfactories/careem'

        }, {
            Name: 'Money Fellows',
            Description: 'The graffiti drawn on the walls of their head offices in cairo took the walls to another place to keep up the positive vibes in the place.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/moneyfellow7.jpg'

            ],
            Link: 'artworks/Officesandfactories/moneyfellows'

        }, {
            Name: 'Virtual Quest',
            Description: 'Number of walls: 10.\nGame developnig office.\nAdding an artistic touch to walls of the place to match the identity and make it special.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/vq6.webp'
            ],
            Link: 'artworks/Officesandfactories/virtualquest'

        }, {
            Name: 'GTE',
            Description: 'Travel solutions company.\nUnique artwork to keep up the positive vibes.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/gte1.webp'
            ],
            Link: 'artworks/Officesandfactories/gte'

        }, {
            Name: 'Rubix Park',
            Description: 'Number of walls: 8.\nA fun way to keep the audience included.\nIn this project we used the interactive art concept in which the art is involved with the spectator in a way.\nHaving interactive artwork for people to enjoy like the rubik\'s cube which can be used as a bench.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/rubix2.webp'
            ],
            Link: 'artworks/malls/rubixpark'

        }, {
            Name: 'Gleem Bay',
            Description: 'Number of walls: 8.\nAn outdoor hub featuring the beach and summer vibes.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/gleembay5.webp'
            ],
            Link: 'artworks/malls/gleembay'

        }, {
            Name: 'Tio Complex',
            Description: '',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/TIO-13.webp'
            ],
            Link: 'artworks/malls/tiocomplex'

        }, {
            Name: 'Pro Guys',
            Description: 'Pro Guys is one of the best wrapping and car styling companies in Egypt.\nFocus was showcasing their identity and work through our murals ending it witha statement wall of Pro Guy\'s dream team',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/pro3.webp'
            ],
            Link: 'artworks/Showrooms/proguys'

        }, {
            Name: 'Seats',
            Description: 'Adding color to the walls through tropical and relatable artwork.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/seats5.webp'
            ],
            Link: 'artworks/Showrooms/seats'

        }, {
            Name: 'Bonita',
            Description: 'One of the top mexican cuisines in Egypt.\nThe artwork along with the neon lights purpose is to give the place Mexican vibes as if clients are stepping into the heart of Mexico.',
            Location: 'Qatar',
            Images: [
                'assets/Images/More-Projects/bonita4.webp'
            ],
            Link: 'artworks/restaurants/bonita'

        }, {
            Name: 'Taiyaki',
            Description: 'Promoting the Origin of the place through murals that show the street of japan which highlights the japanese culture.',
            Location: 'Qatar',
            Images: [
                'assets/Images/More-Projects/taiyaki2.webp'
            ],
            Link: 'artworks/restaurants/taiyaki'
        }, {
            Name: 'Butcher\'s Burger',
            Description: 'Number of branches: 10.\nPutting an identity to Butcher\'s Burger walls that matches its modern interior.',
            Location: 'Qatar',
            Images: [
                'assets/Images/More-Projects/burcher1.webp'
            ],
            Link: 'artworks/restaurants/butchersburger'

        }, {
            Name: 'Kansas',
            Description: 'Number of branches: 5.\nGiving a new look to a fried chicken quick service, Kansas interior is all about hip hop street graffiti.',
            Location: 'Qatar',
            Images: [
                'assets/Images/More-Projects/kansas1.webp',
            ],
            Link: 'artworks/restaurants/kansas'

        }, {
            Name: 'Mori Sushi',
            Description: 'Japanese murals artwork.',
            Location: 'Qatar',
            Images: [
                'assets/Images/More-Projects/MORI-SUSHI-2.webp'
            ],
            Link: 'artworks/restaurants/morisushi'

        },
    ];


