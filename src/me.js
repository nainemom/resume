export default {
  careerStart: '2013-04-30T19:30:00.000Z',
  experience() {
    const start = new Date(this.careerStart).getTime()
    const end = new Date().getTime()
    return `~${Math.round((end - start) / 31536000000)}`
  },
  name: 'Amir Momenian',
  mail: 'nainemom@gmail.com',
  phone: '+989365586015',
  links: [
    {
      key: 'github',
      title: 'Github',
      link: 'https://github.com/nainemom'
    },
    {
      key: 'linkedin',
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/amir-momenian-58073780'
    },
    {
      key: 'twitter',
      title: 'Twitter',
      link: 'https://twitter.com/nainemom'
    }
  ],
  workExpriences: [
    {
      title: 'Cafe Bazar',
      from: new Date('18 July 2020'),
      to: 'present',
      type: 1,
      position: 'Frontend Developer (Full-Time Job)',
      description: 'Part of frontend team.'
    },
    {
      title: 'Snapp',
      from: new Date('10 May 2019'),
      to: new Date('15 July 2020'),
      type: 1,
      position: 'Frontend Developer (Full-Time Job)',
      description: 'Part of frontend team who works on Snapp PWA with React. I\'ve done Snapp-UI-Kit React version at that time and just after beta launchs of PWA, I moved to Backoffice team as a leader of frontend team to start new Backoffice client version using Vue.'
    },
    {
      title: 'Paygear Tunisia',
      from: new Date('10 November 2018'),
      to: new Date('10 April 2019'),
      type: 0,
      position: 'Frontend Developer (Part-Time Job)',
      description: 'Works on arabic/english version of Paygear backoffice panel to lunch in Tunisia.'
    },
    {
      title: 'HotelOneClick',
      from: new Date('10 March 2018'),
      to: new Date('10 April 2019'),
      type: 0,
      position: 'Frontend Developer - Platform Designer (Part-Time/Remote Job)',
      description: 'Helps to design whole platform and specifically works on persian/english version of HotelOneClick backoffice panel.'
    },
    {
      title: 'Paygear',
      from: new Date('10 April 2017'),
      to: new Date('10 April 2019'),
      type: 1,
      position: 'Frontend Developer (Full-Time Job)',
      description: 'Works on Paygear backoffice panel and create Paygear push notification service.'
    },
    {
      title: 'Mahna',
      from: new Date('10 May 2013'),
      to: new Date('10 April 2017'),
      type: 1,
      position: 'Full-stack Developer (Full-Time Job)',
      description: 'Works on Mahna E2E call-center project as Full-stack (both Back-end and Front-end side) Developer.'
    },
  ],
  openSourceProjects: [
    {
      title: 'Framevuerk',
      as: 0,
      description: 'Multi language/direction UI framework based on VueJS including most usable components like Datepicker and Dropdown.',
      accessLink: 'https://framevuerk.com',
      githubLink: 'https://github.com/framevuerk/framevuerk'
    },
    {
      title: 'Viska',
      as: 0,
      description: 'An Anonymous Chat Service.',
      accessLink: 'https://viska.chat',
      githubLink: 'https://github.com/nainemom/viska'
    },
    {
      title: 'Hazy',
      as: 0,
      description: 'Secure service to send and receive anonymous messages.',
      accessLink: 'https://hazyapp.com',
      githubLink: 'https://github.com/hazy-app/webapp',
    },
    {
      title: 'IDate',
      as: 0,
      description: 'Iranian Date constractor for Javascript, Just like native javascript Date.',
      accessLink: 'https://github.com/nainemom/idate'
    },
    {
      title: 'Nemojy',
      as: 0,
      description: 'A minimal desktop app to browsing and using emojies.',
      accessLink: 'https://github.com/nainemom/nemojy'
    }
  ]
}