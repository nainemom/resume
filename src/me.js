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
  github: 'https://github.com/nainemom',
  linkedin: 'https://www.linkedin.com/in/amir-momenian-58073780',
  workExpriences: [
    {
      title: 'Cafe Bazaar',
      info: 'Cafe Bazaar is the most popular Android AppStore for Persian users with +46 million user.',
      from: new Date('18 July 2020'),
      to: 'present',
      type: 1,
      position: 'Frontend Developer (Full-Time Job)',
    },
    {
      title: 'Snapp',
      info: 'Snapp is the largest ride-hailing application in the Middle East with ~40 million user and ~2 million rides per day.',
      from: new Date('10 May 2019'),
      to: new Date('15 July 2020'),
      type: 1,
      position: 'Frontend Developer (Full-Time Job)',
    },
    {
      title: 'Paygear Tunisia',
      from: new Date('10 November 2018'),
      to: new Date('10 April 2019'),
      type: 0,
      position: 'Frontend Developer (Part-Time Job)',
      description: 'I worked on arabic/english version of Paygear backoffice panel to lunch in Tunisia.'
    },
    {
      title: 'HotelOneClick',
      from: new Date('10 March 2018'),
      to: new Date('10 April 2019'),
      type: 0,
      position: 'Frontend Developer - Platform Designer (Part-Time Job)',
      description: 'Helped to design whole platform and specifically worked on Persian/English versions of Website/Backoffice.'
    },
    {
      title: 'Paygear',
      info: 'Paygear is a subset of Parsian Bank providing Mobile-Banking/Online-Wallet mobile application.',
      from: new Date('10 April 2017'),
      to: new Date('10 April 2019'),
      type: 1,
      position: 'Frontend Developer (Full-Time Job)',
      description: 'Works on Paygear backoffice panel and create Paygear push notification service.'
    },
    {
      title: 'Mahna',
      info: 'Mahna is a multi-functions company launched at 2009 to provide B2B like softwares including Telecommunications, GIS, and VoIP services to customers.',
      from: new Date('10 May 2013'),
      to: new Date('10 April 2017'),
      type: 1,
      position: 'Full-stack Developer (Full-Time Job)',
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