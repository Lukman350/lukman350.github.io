import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  flutter,
  dart,
  codeigniter,
  mysql,
  multiintegra,
  mitghelpdesk,
  movieflix,
  iquranic,
  submission_movie_app,
  submission_bookshelf_app,
  relived_ucp,
  relived_bot,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Flutter Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Dart',
    icon: dart,
  },
  {
    name: 'Codeigniter',
    icon: codeigniter,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
];

const experiences = [
  {
    title: 'IT Support',
    company_name: 'PT Multiintegra Technology Group',
    icon: multiintegra,
    iconBg: '#182536',
    date: 'August 2022 - Present',
    points: [
      'Developing and maintaining web applications using Codeigniter 3 and other related technologies.',
      'Installing and maintaining network infrastructure and ensuring network security.',
      'Installing, configuring, and maintaining computer hardware, software, printers, and scanners.',
      'Monitoring and maintaining computer systems and networks.',
      'Responding in a timely manner to service issues and requests.',
      'Providing technical support across the company.',
      'Repairing and replacing network hardware such as switches, routers, and wireless adapters.',
    ],
  },
];

const projects = [
  {
    name: 'MITG Helpdesk',
    description:
      "This app is used to manage tickets from customers and also to manage the company's internal tickets such as IT Support, Workshop Support, and others. This app is built using Codeigniter 3 and MySQL as the database.",
    tags: [
      {
        name: 'php',
        color: 'pink-text-gradient',
      },
      {
        name: 'codeigniter 3',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
    ],
    image: mitghelpdesk,
    source_code_link: null,
  },
  {
    name: 'MovieFlix',
    description:
      'MovieFlix is a Android App that allows users to discover movies. The app displays a list of movies that are currently playing in theaters. Users can view movie details such as ratings, descriptions, cast members, trailers, and many others. Users can also search for movies by title. The app uses the Movie Database API to retrieve movie data.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'dart',
        color: 'pink-text-gradient',
      },
      {
        name: 'api',
        color: 'green-text-gradient',
      },
    ],
    image: movieflix,
    source_code_link: 'https://github.com/Lukman350/movieflix',
  },
  {
    name: 'iQuranic',
    description:
      'iQuranic is a Android App also Web App that allows users to read the Quran. Users can read the Quran in Arabic and also in Indonesian. Users can also search for verses in the Quran. Users can also plays audio of verses from the selected Qori. The app uses the equran.id to retrieve Quran data.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'dart',
        color: 'pink-text-gradient',
      },
      {
        name: 'api',
        color: 'green-text-gradient',
      },
    ],
    image: iquranic,
    source_code_link: 'https://github.com/Lukman350/iquranic',
  },
  {
    name: 'Submission Movie App',
    description:
      'Submission Movie App is a Web App that allows users to discover movies. This app is for submission in the Dicoding Front-End Web Developer Course. Users can view movie details such as ratings, descriptions, cast members, trailers, and many others. Users can also search for movies by title. The app uses the Movie Database API to retrieve movie data.',
    tags: [
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'blue-text-gradient',
      },
      {
        name: 'api',
        color: 'green-text-gradient',
      },
    ],
    image: submission_movie_app,
    source_code_link: 'https://github.com/Lukman350/submission-bffewd',
  },
  {
    name: 'Submission Bookshelf App',
    description:
      'Submission Bookshelf App is a Web App that allows users to manage books. This app is for submission in the Dicoding Beginner Front-End Web Developer Course. Users can add, read, mark as read, and delete books. The app uses the Local Storage to store book data.',
    tags: [
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: submission_bookshelf_app,
    source_code_link: 'https://github.com/Lukman350/Bookshelf-Apps',
  },
  {
    name: 'Relived UCP',
    description:
      'Relived UCP is a Web App that allows users to manage their account in the Relived SA:MP Server. Users can view their account information, view their characters, and change their account password. This app is built using Next JS (TypeScript), MySQL as the database, Bootstrap 5 as the CSS Framework, Node Mailer to send email, and many others.',
    tags: [
      {
        name: 'next js',
        color: 'pink-text-gradient',
      },
      {
        name: 'bootstrap 5',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: relived_ucp,
    source_code_link: 'https://github.com/Lukman350/relived-ucp',
  },
  {
    name: 'Relived Bot',
    description:
      'Relived Bot is a Discord Bot that allows users to manage their account in the Relived SA:MP Server. Users can view their account information, register their account, and some other features. This bot is built using Node JS (TypeScript), MySQL as the database, Discord JS to interact with Discord API, node mailer to send email, and many others.',
    tags: [
      {
        name: 'node js',
        color: 'pink-text-gradient',
      },
      {
        name: 'discord js',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: relived_bot,
    source_code_link: 'https://github.com/Lukman350/relived-bot',
  },
];

export { services, technologies, experiences, projects };
