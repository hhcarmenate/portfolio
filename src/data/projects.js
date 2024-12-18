import { TAGS } from "./tags.js"

export const PROJECTS = [
    {
        title: "Taskcraft.io - Easy to use task manager",
        description:
            `App designed to efficiently manage shared workspaces, promoting real-time collaboration and
             enhancing teamwork. Built with cutting-edge technologies like Laravel 11 and Vue 3, it offers a seamless, 
             modern experience tailored to the needs of today's professional environment. 🚀🌐`,
        links: [],
        repo: "https://github.com/hhcarmenate/taskCraft.io",
        image: '/projects/taskcraftio2.webp',
        tags: [TAGS.PHP, TAGS.JavaScript, TAGS.MySQL, TAGS.Laravel, TAGS.VueJS, TAGS.Tailwind, TAGS.Flowbite]
    },
    {
        title: "Link.io - A link shortened",
        description:
            `Link.io is a modern URL shortening application built with Node.js and Express.js for its back-end API,
             Svelte for a dynamic, lightweight front-end, and MongoDB for efficient and scalable database management. 
             The app allows users to quickly generate shortened URLs, track usage metrics, and manage links in an 
             intuitive user interface. Designed with scalability and efficiency in mind, Link.io provides a 
             seamless solution for sharing and managing URLs across various platforms.`,
        links: [],
        repo: "https://github.com/hhcarmenate/taskCraft.io",
        image: '/projects/taskcraftio2.webp',
        tags: [TAGS.JavaScript, TAGS.Node, TAGS.Express, TAGS.MongoDB, TAGS.Svelte, TAGS.Tailwind]
    }
]
