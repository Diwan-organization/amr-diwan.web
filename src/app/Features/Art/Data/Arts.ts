export class ArtProjectItem {
    Id!: number;
    Name!: string;
    MenuName?: string;
    Description!: string;
    Videos?: string[]
    Images!: string[];
    Location!: string;
    Link?: string;
    CssClass?: string;
}


export const ArtProjects: ArtProjectItem[] = [
    {
        Id: 1,
        Name: 'Al Moosa Rehabilitation Hospital',
        MenuName: 'Al Moosa Hospital',
        Description: `At Al Moosa Rehabilitation Hospital in the Kingdom of Saudi Arabia, a monumental project unfolded: a 1,500 m² wall mural designed to  capture the essence of hope, healing, and success. This was more than an artistic endeavor—it became a heartfelt narrative aimed at  uplifting and inspiring patients, staff, and visitors alike. The mural transformed the hospital's walls into a vibrant, living canvas, radiating positivity and connection. Patients and visitors shared  heartfelt feedback, expressing how the artwork elevated their spirits and instilled a renewed sense of optimism. Staff members also  expressed pride in working within an environment enriched by such meaningful and transformative art. This project stands as a testament to the power of art—its ability to heal, inspire, and bring communities together. It reflects a deep commitment to crafting spaces that resonate emotionally and visually with everyone who experiences them. The 1,500 m² mural at Al Moosa Rehabilitation Hospital is more than just a visual masterpiece—it is a beacon of hope and a celebration  of the human spirit. Through thoughtful design and execution, it serves as an enduring symbol of healing and success, inspiring all who  pass through the hospital's halls.`,
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
        ],
        CssClass: 'almoosa'
    },
    {
        Id: 2,
        Name: 'Fifa world Cup',
        MenuName: 'Fifa world Cup',
        Description: `In collaboration with the Supreme Committee, proudly unveiled stunning wall murals at Al Thumama and Al Janub Stadiums in Qatar  for the FIFA World Cup 2022. These dynamic artworks celebrate the energy and excitement of the world's most iconic sporting event,  transforming the stadiums into vibrant, immersive spaces. \nPermanent Legacy: \n Two murals remain as permanent fixtures at the stadiums, symbolizing the timeless bond between art and sport. \nMemorable Tributes: \n Three murals serve as a legacy, preserving the unforgettable spirit of the World Cup for generations to come. Featuring bold colors, intricate designs, and contemporary graffiti techniques, these murals narrate stories of unity, passion, and the universal joy of football.  \nEach artwork connects fans from across the globe, making their experience unforgettable. Set in Qatar, the murals not only enhance the stadium atmosphere but also turn these public spaces into creative landmarks, celebrating  the global nature of the World Cup. Art that brings the world together through football and creativity.`,
        Location: 'QATAR',
        Images: [
            'assets/Images/Projects/fifa/fifa1-header.webp',
            'assets/Images/Projects/fifa/fifa2.webp',
            'assets/Images/Projects/fifa/fifa3.webp',
            'assets/Images/Projects/fifa/fifa4.webp'

        ],
        CssClass: 'fifa'
    },
    {
        Id: 3,
        Name: 'Al Rayyan Club',
        MenuName: 'Al Rayyan Club',
        Description: `In a bold collaboration with Nike, a custom wall mural was created for Al Rayyan Athletic Gym in Qatar, serving as the striking backdrop  for the launch of Al Rayyan SC's new football kit. This artwork celebrates the team's legacy, resilience, and dynamic partnership with  Nike.\n The mural's vibrant energy and symbolic design elevated the unveiling event, creating a memorable visual experience that resonated  deeply with players, fans, and media alike. More than just a backdrop, the artwork amplified the excitement of the launch, blending the spirit of sport with bold, artistic expression. This project not only transformed the atmosphere of the gym but also highlighted the powerful intersection of art, athletics, and brand  identity, leaving a lasting impression on all who experienced it.`,
        Location: 'QATAR',
        Videos: [
            'assets/Images/Projects/alrayyan/alrayyan5-1.mp4'
        ],
        Images: [
            // 'assets/Images/Projects/alrayyan/alrayyan1.webp',
            'assets/Images/Projects/alrayyan/alrayyan2.webp',
            // 'assets/Images/Projects/alrayyan/alrayyan3.webp',
            'assets/Images/Projects/alrayyan/alrayyan4.webp'
        ],
        CssClass: 'alrayyan'
    },
    {
        Id: 4,
        Name: 'ALIF Stores',
        MenuName: 'ALIF Stores',
        Description: `A mural was created for ALIF Stores to honor three of football's greatest icons: Lionel Messi, Diego Maradona, and Pelé. This artwork  celebrates their legendary status as champions, capturing the spirit and passion that define the beautiful game.\n Designed to match the World Cup vibes in Qatar, the mural brings together vibrant colors and dynamic compositions that reflect the energy of the tournament. Each figure is depicted in a way that highlights their unique contributions to football history, creating a powerful tribute that resonates with fans across generations.\n This project not only celebrates the global love for football but also connects the timeless legacy of these players with the excitement of the  World Cup, making it a standout piece for both visitors and sports enthusiasts.`,
        Location: 'QATAR',
        Images: [
            'assets/Images/Projects/Alif/alf1.webp',
            'assets/Images/Projects/Alif/alf2.webp',
            'assets/Images/Projects/Alif/alf3.webp',
        ],
        CssClass: 'alif'
    },
    {
        Id: 5,
        Name: 'HSBC',
        MenuName: 'HSBC',
        Description: `As part of HSBC's “Vision of Our City” campaign, a mural was created for the iconic headquarters in Cairo, celebrating the city's vibrant  and evolving identity. This piece brings together pixels and personalities that reflect the dynamic role of technology in shaping modern urban life.\n At the heart of the artwork is the rise of a new, female-led generation of entrepreneurs, driving innovation and reshaping the future. Their  commitment to sustainability is represented through lush plants and the lotus flower, a timeless symbol of rebirth and renewal. \nThis mural is more than a visual representation—it's a tribute to Cairo's unique blend of tradition and innovation, capturing the spirit of a  city that is continuously evolving while honoring its rich cultural roots.`,
        Location: 'EGYPT',
        Images: [
            'assets/Images/Projects/Hsbc/hsbc1.webp',
            'assets/Images/Projects/Hsbc/hsbc-lion.png',
        ],
        CssClass: 'hsbc'
    },
    {
        Id: 6,
        Name: 'Education Above All',
        MenuName: 'Education Above All',
        Description: `In collaboration with the UN Organization, a powerful murals has been created embodying the core mission of Education Above All, a  global initiative dedicated to making education accessible to everyone, especially those from marginalized communities facing poverty  and hardship. \nHope and Opportunity:\n The mural symbolizes a journey towards a brighter future, highlighting the transformative power of education as a tool for breaking the  cycle of poverty. It represents personal growth, empowerment, and the boundless opportunities that education provides. \nGlobal Unity:\n This artwork reinforces the message that education is a universal right for all people, connecting the world through shared values of  unity, social responsibility, and the desire for positive change. \nDisplayed in a prominent location in Qatar, the mural became a beacon of hope, inspiring a global audience to recognize the  importance of education in combating poverty and creating a more inclusive, equitable future. The murals were also sold as part of a  fundraising initiative to support Education Above All's mission to bring long-term change to underserved communities.  Art for a better tomorrow, where education fights poverty and empowers individuals globally.`,
        Location: 'QATAR',
        Videos: [
            'assets/Images/Projects/EAA/EAA5-1.mp4'
        ],
        Images: [
            // 'assets/Images/Projects/EAA/EAA1.webp',
            'assets/Images/Projects/EAA/EAA4.webp',
            'assets/Images/Projects/EAA/EAA2.webp',
            'assets/Images/Projects/EAA/EAA3.webp',
        ],
        CssClass: 'eaa'
    },
    {
        Id: 7,
        Name: 'PUBG Battleground - Vikendi Reborn',
        MenuName: 'PUBG Battleground',
        Description: `In celebration of the epic Vikendi Reborn update in PUBG, the frosty battlegrounds of Vikendi were brought to life through a dynamic  illustration designed for the PS5. This artwork merges sleek, modern design with the adrenaline-pumping essence of PUBG, capturing  the thrill of the game in every detail.\n The illustration embodies the spirit of survival, strategy, and relentless action that defines the PUBG experience. Iconic elements from the game are blended with a fresh, immersive aesthetic, crafted specifically to resonate with console gamers and elevate their connection to the battleground.\n This piece is not just a visual tribute to Vikendi Reborn but a celebration of the passion and energy that drives the PUBG community.`,
        Location: 'EGYPT',
        Videos: [
            'assets/Images/Projects/PUBG/pubg5-1.mp4',
        ],
        Images: [
            'assets/Images/Projects/PUBG/pubg1.png',
            'assets/Images/Projects/PUBG/pubg2.webp',
            'assets/Images/Projects/PUBG/pubg3.webp',
            'assets/Images/Projects/PUBG/pubg4.webp',
        ],
        CssClass: 'pubg'
    },
    {
        Id: 8,
        Name: 'Adidas Originals',
        MenuName: 'Adidas Originals',
        Location: 'EGYPT',
        Description: `Bridging the gap between art and the everyday world, this project celebrates the harmony of diverse cultural influences.Tasked with creating a unique masterpiece for Adidas Originals, the design blends the finest elements of modern and ancient Egyptian art and architecture, resulting in a piece that feels both innovative and timeless.\n This creation stands as a testament to the power of collaboration and cultural storytelling.By uniting Adidas Originals with Amr Diwan's distinctive artistry, the design pays homage to Egypt's rich history while resonating with modern audiences around the globe.It's a bold  reflection of how tradition and contemporary design can intertwine to create something truly iconic.`,
        Images: [
            'assets/Images/Projects/Adidas/adidas1.webp',
            'assets/Images/Projects/Adidas/adidas2.webp',
            'assets/Images/Projects/Adidas/adidas3.webp'
        ],
        CssClass: 'adidas'
    },
    {
        Id: 9,
        Name: 'Adidas Mall of Egypt',
        MenuName: 'Adidas Mall of Egypt',
        Location: 'EGYPT',
        Description: `Bridging the gap between art and the everyday world, this project celebrates the harmony of diverse cultural influences. Tasked with creating a unique masterpiece for Adidas Originals, the design blends the finest elements of modern and ancient Egyptian art and architecture, resulting in a piece that feels both innovative and timeless.\n This creation stands as a testament to the power of collaboration and cultural storytelling. By uniting Adidas Originals with Amr Diwan's distinctive artistry, the design pays homage to Egypt's rich history while resonating with modern audiences around the globe. It's a bold  reflection of how tradition and contemporary design can intertwine to create something truly iconic.`,
        Videos: [
            'assets/Images/Projects/Adidas_MOEG/Adidas_MOEG.mp4',
        ],
        Images: [
            'assets/Images/Projects/Adidas_MOEG/Adidas_MOEG1.webp',
            'assets/Images/Projects/Adidas_MOEG/Adidas_MOEG2.webp',
            'assets/Images/Projects/Adidas_MOEG/Adidas_MOEG3.webp'
        ],
        CssClass: 'adidasmallofegypt'
    },
    {
        Id: 10,
        Name: 'Money Fellows',
        MenuName: 'Money Fellows',
        Location: 'EGYPT',
        Description: `The graffiti created for the walls of Money Fellows' head office in Cairo transformed the space, infusing it with positive energy and creativity.  \nArtwork elevated the environment, creating an atmosphere that not only reflected the brand's dynamic spirit but also encouraged an uplifting, inspiring vibe for everyone who walked through the doors.This mural became more than just decor—it set the tone for a productive and positive workspace.`,
        Images: [
            'assets/Images/Projects/money-fellows/1.jpg',
            'assets/Images/Projects/money-fellows/2.jpg',
            'assets/Images/Projects/money-fellows/3.webp'
        ],
        CssClass: 'moneyfellows'
    }
];

export const MoreArtProjects: ArtProjectItem[] =
    [
        {
            Id: 1,
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
            Id: 2,
            Name: 'MONDELEZ',
            Description: `The point here was to story-tell the employees' health, safety and enviroment through typography.\naccentuating the brand names of Mondelez through applying the popping colors for a lively atmosphere`,
            Location: 'EGYPT',
            Images: [
                'assets/Images/More-Projects/mondelez1.webp',
            ],
            Link: 'artworks/officesandfactories/mondelez'
        },
        {
            Id: 3,
            Name: 'Orange',
            Description: 'Whole building consist of 11 floors.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/orange.webp',
            ],
            Link: 'artworks/Officesandfactories/orange'

        },
        {
            Id: 4,
            Name: 'Careem',
            Description: 'Inspiring graffiti art used as a motivation for growth using the brand color.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/careem1.webp'
            ],
            Link: 'artworks/Officesandfactories/careem'

        },
        {
            Id: 5,
            Name: 'Money Fellows',
            Description: 'The graffiti drawn on the walls of their head offices in cairo took the walls to another place to keep up the positive vibes in the place.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/moneyfellow7.jpg'

            ],
            Link: 'artworks/officesandfactories/moneyfellows'

        },
        {
            Id: 6,
            Name: 'Virtual Quest',
            Description: 'Number of walls: 10.\nGame developnig office.\nAdding an artistic touch to walls of the place to match the identity and make it special.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/vq6.webp'
            ],
            Link: 'artworks/officesandfactories/virtualquest'

        },
        {
            Id: 7,
            Name: 'GTE',
            Description: 'Travel solutions company.\nUnique artwork to keep up the positive vibes.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/gte1.webp'
            ],
            Link: 'artworks/officesandfactories/gtetravelsolutionscompany'

        },
        {
            Id: 8,
            Name: 'Rubix Park',
            Description: 'Number of walls: 8.\nA fun way to keep the audience included.\nIn this project we used the interactive art concept in which the art is involved with the spectator in a way.\nHaving interactive artwork for people to enjoy like the rubik\'s cube which can be used as a bench.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/rubix2.webp'
            ],
            Link: 'artworks/malls/rubixpark'

        },
        {
            Id: 10,
            Name: 'Tio Complex',
            Description: '',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/TIO-13.webp'
            ],
            Link: 'artworks/malls/tiocomplex'

        },
        {
            Id: 11,
            Name: 'Pro Guys',
            Description: 'Pro Guys is one of the best wrapping and car styling companies in Egypt.\nFocus was showcasing their identity and work through our murals ending it witha statement wall of Pro Guy\'s dream team',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/pro3.webp'
            ],
            Link: 'artworks/showrooms/proguys'

        },
        {
            Id: 12,
            Name: 'Seats',
            Description: 'Adding color to the walls through tropical and relatable artwork.',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/seats5.webp'
            ],
            Link: 'artworks/showrooms/seats'

        },
        {
            Id: 12,
            Name: 'Adidas Mall of Egypt',
            Description: '',
            Location: 'Egypt',
            Images: [
                'assets/Images/More-Projects/Adidas_MOEG1.webp'
            ],
            Link: 'artworks/showrooms/adidasmallofegypt'

        },
        {
            Id: 12,
            Name: 'Adidas Mall of Tunisia',
            Description: '',
            Location: 'Tunisia',
            Images: [
                'assets/Images/More-Projects/Adidas_Tunisia.webp'
            ],
            Link: 'artworks/showrooms/adidasmalloftunisia'

        },
        {
            Id: 13,
            Name: 'Bonita',
            Description: 'One of the top mexican cuisines in Egypt.\nThe artwork along with the neon lights purpose is to give the place Mexican vibes as if clients are stepping into the heart of Mexico.',
            Location: 'Qatar',
            Images: [
                'assets/Images/More-Projects/bonita4.webp'
            ],
            Link: 'artworks/restaurants/bonita'

        },
        {
            Id: 14,
            Name: 'Taiyaki',
            Description: 'Promoting the Origin of the place through murals that show the street of japan which highlights the japanese culture.',
            Location: 'Qatar',
            Images: [
                'assets/Images/More-Projects/taiyaki2.webp'
            ],
            Link: 'artworks/restaurants/taiyaki'
        },
        {
            Id: 15,
            Name: 'Butcher\'s Burger',
            Description: 'Number of branches: 10.\nPutting an identity to Butcher\'s Burger walls that matches its modern interior.',
            Location: 'Qatar',
            Images: [
                'assets/Images/More-Projects/burcher1.webp'
            ],
            Link: 'artworks/restaurants/butchersburger'

        },
        {
            Id: 16,
            Name: 'Kansas',
            Description: 'Number of branches: 5.\nGiving a new look to a fried chicken quick service, Kansas interior is all about hip hop street graffiti.',
            Location: 'Qatar',
            Images: [
                'assets/Images/More-Projects/kansas1.webp',
            ],
            Link: 'artworks/restaurants/kansas'

        },
        {
            Id: 17,
            Name: 'Mori Sushi',
            Description: 'Japanese murals artwork.',
            Location: 'Qatar',
            Images: [
                'assets/Images/More-Projects/MORI-SUSHI-2.webp'
            ],
            Link: 'artworks/restaurants/morisushi'

        },
    ];


