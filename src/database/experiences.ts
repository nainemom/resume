import { Exprience } from '@/types';
import CafeBazaarIcon from '@/assets/company-icons/cafebazaar.png';
import SnappIcon from '@/assets/company-icons/snapp.png';
import HotelOneClickIcon from '@/assets/company-icons/hoteloneclick.png';
import RaadIcon from '@/assets/company-icons/raad.png';
import MahnaIcon from '@/assets/company-icons/mahna.jpg';

export const experiences: Exprience[] = [
  {
    company: {
      icon: CafeBazaarIcon,
      title: 'Cafe Bazaar',
      description: 'Cafe Bazaar is the most popular Android AppStore for Persian users with +46 million user.',
      website: 'https://cafebazaar.ir',
    },
    period: [new Date('18 July 2020')],
    role: {
      title: 'Frontend Developer',
      description: 'There was a lots of o work variety inside CafeBazaar within this period for me. I just mention my impressive roles on big products: cafebazaar.ir website as owner/maintainer, Cafebazaar careers website as creator/owner, Cafebazaar Video tab (archived) as developer, KiKi backoffice panel / main project website as creator/owner, panjereh.ir backoffice panel as creator/owner and paxit.ir pwa as creator/owner. I also touched a lots of areas that cannot be mentioned due to cafebazaar NDA.',
    },
    type: 'full-time',
  },
  {
    company: {
      icon: SnappIcon,
      title: 'Snapp',
      description: 'Snapp is the largest ride-hailing application in the Middle East with ~40 million user and ~2 million rides per day.',
      website: 'https://snapp.ir/',
    },
    period: [new Date('10 May 2019'), new Date('15 July 2020')],
    role: {
      title: 'Frontend Developer',
      description: 'I Maintainced and released second Snapp PWA version and initiated Snapp UI-Kit for web along with 6 other front-end developers. I also worked on Snapp Backoffice Panel as a lead developer with 2 other front-end developers.',
    },
    type: 'full-time',
  },
  {
    company: {
      icon: HotelOneClickIcon,
      title: 'HotelOneClick',
      description: 'HotelOneClick is one of the top online hotel booking, tour booking and car booking in Iran.',
      website: 'https://hoteloneclick.com/',
    },
    period: [new Date('10 March 2018'), new Date('10 April 2019')],
    role: {
      title: 'Full-stack Developer',
      description: 'I helped design the entire platform from scratch and specifically worked on the Farsi/English versions of the website/back-office of this startup.'
    },
    type: 'part-time',
  },
  {
    company: {
      icon: RaadIcon,
      title: 'RaadSense',
      description: 'RaadSense is a subset of Parsian Bank providing Mobile-Banking/Online-Wallet mobile application.',
      website: 'https://paygear.ir/',
    },
    period: [new Date('10 April 2017'), new Date('10 April 2019')],
    role: {
      title: 'Frontend Developer',
      description: 'I worked on RaadSense backoffice panel as maintainer and created RaadSense push notification service.',
    },
    type: 'full-time',
  },
  {
    company: {
      icon: MahnaIcon,
      title: 'Mahna',
      description: 'Mahna is a multi-functions company providing B2B softwares including Telecommunications, GIS, and VoIP services.',
      website: 'https://mahnagroup.com/',
    },
    period: [new Date('10 May 2013'), new Date('10 April 2017')],
    role: {
      title: 'Full-stack Developer',
      description: 'I specifically worked on the VoIP product. The product has a lots of feature including varous type of reports, charts, configs, abd more. Important technologies used in the front and back side of product was Asterisk, PHP, Jquery, NodeJS, MySql, and KnockoutJS.',
    },
    type: 'full-time',
  },
];

export default experiences;
