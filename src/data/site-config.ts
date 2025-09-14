export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://katiavasquez.github.io',
    title: 'Katia Vasquez',
    subtitle: 'QA Manual & Jr Automation',
    description: 'QA Engineer Jr con experiencia en pruebas manuales, API y mobile. Especializada en asegurar la calidad de aplicaciones web y móviles.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Katia Vasquez - QA Engineer'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Sobre Mí',
            href: '/about'
        },
        {
            text: 'Blog QA',
            href: '/blog'
        },
        {
            text: 'Proyectos QA',
            href: '/projects'
        },
        {
            text: 'Certificados',
            href: '/certificates'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/katia-v%C3%A1squez-653b28185/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/KatiaVasquez'
        },
        {
            text: 'Email',
            href: 'mailto:katiayvasquezm@gmail.com'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/katia-v%C3%A1squez-653b28185/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/KatiaVasquez'
        },
        {
            text: 'Email',
            href: 'mailto:katiayvasquezm@gmail.com'
        }
    ],
    hero: {
        title: 'Katia Vasquez | QA Manual & Jr Automation',
        text: "Soy **QA Engineer Jr** con experiencia en pruebas manuales, API y mobile. Me apasiona asegurar la calidad de aplicaciones web y móviles, aportando una visión de negocio clara y enfoque en el usuario final.",
        image: {
            src: '/hero.jpeg',
            alt: 'Katia Vasquez - QA Engineer'
        },
        actions: [
            {
                text: 'Ver Proyectos',
                href: '/projects'
            },
            {
                text: 'Sobre Mí',
                href: '/about'
            },
            {
                text: 'Contactar',
                href: 'mailto:katiayvasquezm@gmail.com'
            }
        ]
    },
    subscribe: {
        title: 'Disponible para proyectos QA',
        text: 'Estoy abierta a colaborar en proyectos de QA que busquen asegurar calidad y valor para los usuarios.',
        formUrl: 'mailto:katiayvasquezm@gmail.com'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
