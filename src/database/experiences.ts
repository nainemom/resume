import { Exprience } from '@/types';

export const experiences: Exprience[] = [
  {
    company: {
      title: 'Cafe Bazaar',
      description: 'Cafe Bazaar is the most popular Android AppStore for Persian users with +46 million user.',
      website: 'https://cafebazaar.ir',
    },
    period: [new Date('18 July 2020')],
    role: {
      title: 'Frontend Developer',
      description: '',
    },
    type: 'full-time',
  },
  {
    company: {
      title: 'Snapp (Cab)',
      description: 'Snapp is the largest ride-hailing application in the Middle East with ~40 million user and ~2 million rides per day.',
      website: 'https://snapp.ir/',
    },
    period: [new Date('10 May 2019'), new Date('15 July 2020')],
    role: {
      title: 'Frontend Developer',
      description: 'Works on Snapp PWA (mostly on Snapp UI-Kit) with 6 other developers and Snapp Backoffice Panel as maintainer with 2 other developers',
    },
    type: 'full-time',
  },
  {
    company: {
      title: 'Paygear',
      description: 'Paygear is a subset of Parsian Bank providing Mobile-Banking/Online-Wallet mobile application.',
      website: 'https://paygear.ir/',
    },
    period: [new Date('10 April 2017'), new Date('10 April 2019')],
    role: {
      title: 'Frontend Developer',
      description: 'Works on Paygear backoffice panel as maintainer and create Paygear push notification service.',
    },
    type: 'full-time',
  },
  {
    company: {
      title: 'HotelOneClick',
      description: 'HotelOneClick is one of the top online hotel booking, tour booking and car booking in Iran. In addition, HotelOneClick is the most complete tourism reference in Iran.',
      website: 'https://hoteloneclick.com/',
    },
    period: [new Date('10 March 2018'), new Date('10 April 2019')],
    role: {
      title: 'Full-stack Developer',
      description: 'Helped to design whole platform from begining and specifically worked on Persian/English versions of Website/Backoffice.'
    },
    type: 'part-time',
  },
  {
    company: {
      title: 'Mahna',
      description: 'Mahna is a multi-functions company launched at 2009 to provide B2B like softwares including Telecommunications, GIS, and VoIP services to customers.',
      website: 'https://mahnagroup.com/',
    },
    period: [new Date('10 May 2013'), new Date('10 April 2017')],
    role: {
      title: 'Full-stack Developer',
      description: 'Works on Selling product using PHP, NodeJS, Javascript (Vannila) tecnologies.',
    },
    type: 'full-time',
  },
];

export default experiences;
