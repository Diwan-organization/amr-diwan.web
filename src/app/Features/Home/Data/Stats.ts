import { RoutePaths } from "@App/Common/Settings/RoutePaths";

export class StatsItem {
    ImgSrc!: string;
    ImgAlt!: string;
    Title!: string;
    Number!: string;
    Description!: string;
    Link!: string;
    TimeInterval!: number;
}

export const Stats: StatsItem[] = [
    {
        ImgSrc: '',
        ImgAlt: '',
        Title: 'Years Of Experience',
        Number: '19+',
        Description: '',
        Link: '',
        TimeInterval: 100
    },
    {
        ImgSrc: '',
        ImgAlt: '',
        Title: 'Projects',
        Number: '17+',
        Description: '',
        Link: '',
        TimeInterval: 70
    },
    {
        ImgSrc: '',
        ImgAlt: '',
        Title: 'Countries',
        Number: '5+',
        Description: '',
        Link: '',
        TimeInterval: 500
    },
    {
        ImgSrc: '',
        ImgAlt: '',
        Title: 'Meters',
        Number: '7000+',
        Description: '',
        Link: '',
        TimeInterval: 25
    },
    {
        ImgSrc: '',
        ImgAlt: '',
        Title: 'Learn more',
        Number: '>',
        Description: '',
        Link: '/' + RoutePaths.About,
        TimeInterval: 0
    },
]