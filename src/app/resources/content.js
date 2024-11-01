import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Ted',
    lastName:  'Menshakov',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'US/Charlotte, NC',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Russian', 'Ukraine']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I write about the technical and business aspects of building startups and SaaS products—subscribe to get insights and practical advice directly in your inbox.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    // {
    //     name: 'GitHub',
    //     icon: 'github',
    //     link: 'https://github.com/once-ui-system/nextjs-starter',
    // },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/fedor-menshakov/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/TedMenshakov',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:f.menshakov.dev@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer Specializing in Startups and SaaS</>,
    subline: <>Building Scalable SaaS Products: From Concept to Launch and Growth</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm a software developer with over 10 years of hands-on experience, including 7 years focused on building scalable SaaS solutions. I’ve worked on a range of projects, from early-stage products finding their footing to established platforms with billion-dollar valuations. I’m all about creating robust, efficient, and user-friendly software that can grow with its user base. I'm excited to keep pushing boundaries and bring new ideas to life in every project I take on.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Upswot',
                timeframe: 'Jan 2021 - Present',
                role: 'Staff Software Engineer',
                achievements: [
                    <>Designed and developed a scalable SaaS platform utilized by over 200 financial institutions worldwide, ensuring high availability and robust performance to support a global user base</>,
                    <>Gathered business requirements and led the development process in a high-growth startup, contributing to the successful attraction of $5 million in investments.</>
                ],
                // images: [ // optional: leave the array empty if you don't want to display images
                //     {
                //         src: '/images/projects/project-01/cover-01.jpg',
                //         alt: 'Once UI Project',
                //         width: 16,
                //         height: 9
                //     }
                // ]
                images: [ ]
            },
            {
                company: 'Creatio',
                timeframe: 'Mar 2019 - Nov 2020',
                role: 'Senior Software Engineer',
                achievements: [
                    <>Developed and maintained a SaaS platform for marketing email campaigns, capable of processing over 1 million emails daily, ensuring high deliverability and performance.</>,
                    <>Collaborated closely with cross-functional teams to optimize system scalability, reducing processing time by 30% and enhancing platform efficiency.</>
                ],
                images: [ ]
            },
            {
                company: 'Lizard Soft ',
                timeframe: 'Aug 2018 - Mar 2019',
                role: 'Software Engineer',
                achievements: [
                    <>Developed the backend of a SaaS solution enabling large enterprises to create internal news portals, ensuring secure content management and seamless user experience at scale.</>,
                   
                ],
                images: [ ]
            },
            {
                company: 'ASKansulting',
                timeframe: 'Dec 2017 - Aug 2018',
                role: 'Software Engineer',
                achievements: [
                    <>Identified inefficiencies in architectural design workflows and developed automation software, reducing project turnaround time by 30%
                    and significantly enhancing firm productivity.</>,
                ],
                images: [ ]
            },
            {
                company: 'Caritas Ukraine',
                timeframe: 'Sep 2014 - Sep 2017',
                role: 'Software Engineer',
                achievements: [
                    <>Designed and maintained personal data storage, ensuring compliance with best practices and security standards,
                    which enhanced data protection and operational reliability.</>,
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'National Academy in Ukraine',
                description: <>Master of Engineering</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Portfolio',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };