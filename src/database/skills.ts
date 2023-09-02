import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    title: 'Client-Side',
    description: 'I mostly worked as a frontend developer. ' +
      'I know how **Javascript** works. I worked with frameworks such as **Vue**, **Nuxt**, **React**, **Next**, and **Angular-1.x** and also basics of **Typescript**. ' +
      'I\'ve created various projects including **PWA**, Desktop Apps (with **Electron**), and Mobile Apps (with **Cordova**) and Tizen/WebOS apps (using web technologies). ' +
      'I understand how a Web-Project creates, maintains and works, so I just mention some other tools that I\'m familier with: ' +
      '**Webpack**, **Rollup**, **Vite**, **CSS-Modules**, **Esling**, **SSR libs**, **Pre-render libs**, **Cordova**, and more.',
  },
  {
    title: 'Server-Side',
    description: 'In my career there were a lot of times that I faced to server jobs as an **Amateur** developer. ' +
      'I understand **GNU/Linux** basics, also I can write a server-side code with **NodeJS**, ' +
      'connect it to DBs like **MySQL** and **MongoDB**, handle queues with **RabbitMQ** and ' + 
      'I also have various expirenced with **Docker**, **Kubernetees**, **AWS Buckets**, **Gitlab CI**, and **Github Actions**.',
  },
];

export default skills;
