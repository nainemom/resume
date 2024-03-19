import { Exprience } from '@/types';
import CafeBazaarIcon from '@/assets/company-icons/cafebazaar.png';
import SnappIcon from '@/assets/company-icons/snapp.png';
import HotelOneClickIcon from '@/assets/company-icons/hoteloneclick.png';
import RaadIcon from '@/assets/company-icons/raad.png';
import MahnaIcon from '@/assets/company-icons/mahna.jpg';

export const experiences: Exprience[] = [
  {
    company: {
      // icon: CafeBazaarIcon,
      title: 'راسا سازان عصر نوین (پاکسیت)',
      description: 'پاکسیت بخشی از شرکت کافه‌بازار بوده که خدماتی مثل فروش گیفت بازی‌های پلتفرم‌های مختلف را انجام می‌دهد.',
      // website: 'https://cafebazaar.ir',
    },
    period: [new Date('23 October 2023')],
    role: {
      title: 'پشتیبان',
      description: 'آشنایی با درگاه‌های بانکی و سیستم‌های مالی، گزارش مغایرت‌گیری درگاه‌ها، گزارش فروش ماهانه پاکسیت، افزایش مهارت کار تیمی به صورت آنلاین (دورکاری)، افزایش توانایی حل مسئله در زمان کوتاه، ارتباط مؤثر با کاربر از طریق پشتیبانی.',
    },
    type: 'full-time',
  },
  {
    company: {
      // icon: SnappIcon,
      title: ' مهد دانشمندان کوچک',
      description: 'مهد دانشمندان کوچک چهت ارتقای سلامت کودکان خدمات آموزش مهارت‌های گوناگون را به کودکان ازائه می‌دهد.',
      // website: 'https://snapp.ir/',
    },
    period: [new Date('22 June 2021'), new Date('23 October 2023')],
    role: {
      title: 'مربی هنر و مسئول دفتر',
      description: 'گردآوری اطلاعات به شکل جامع، ثبت اطلاعات افراد در یک سیستم یکپارچه، بروزرسانی سیستم مالی مهد، ارائه الگوها و طرح‌های هنری، ارائه فعالیت‌های مهد در قالب محتوای تصویری، فعالیت در فضای مجازی و افزایش مهارت در آموزش کودکان.',
    },
    type: 'full-time',
  },
  {
    company: {
      // icon: HotelOneClickIcon,
      title: 'خانه لگو',
      description: 'مجموعه خانه لگو با هدف تقویت مهارت‌های گفتاری و زبانی و توانایی حل مسئله و مهارت‌های ریاضی به ارائه دروس و سرفصل‌های مرتبط در قالب داستان می‌پردازد.',
      // website: 'https://hoteloneclick.com/',
    },
    period: [new Date('23 October 2021'), new Date('23 October 2023')],
    role: {
      title: 'مربی',
      description: 'بروزرسانی نحوه آموزش سرفصل‌های دروس دوره‌‌های Basic و ESM، گردآوری تصاویر و ویدئوهای مرتبط با دروس جهت تفهیم و ارتباط موثر کودکان با مفاهیم و درک بهتر.'
    },
    type: 'full-time',
  },
  {
    company: {
      // icon: RaadIcon,
      title: 'مؤسسه هنرآوران',
      description: 'مؤسسه هنرآوران به ارائه خدمات آموزشی در حوزه هنر و رشته‌های صنایع دستی می‌پردازد.',
      // website: 'https://paygear.ir/',
    },
    period: [new Date('25 October 2015'), new Date('24 August 2017')],
    role: {
      title: 'مربی هنر',
      description: 'برگزاری کلاس‌های بافته‌های سنتی مثل گریم و فرش و تابلو فرش، نقشه‌کشی و نقشه‌خوانی فرش‌های دست‌باف.',
    },
    type: 'part-time',
  },
  {
    company: {
      // icon: RaadIcon,
      title: 'موزه اقامتگاه بومگردی کاشان',
      description: 'بخشی از اقامتگاه که بعنوان موزه اسباب‌بازی‌ها و عروسک‌های خیمه‌شب‌بازی زمان قاجار استفاده می‌شود..',
      // website: 'https://paygear.ir/',
    },
    period: [new Date('23 October 2014'), new Date('21 March 2015')],
    role: {
      title: 'موزه‌گردان',
      description: 'همکاری در پروژه ی احیای موزه و نمایش خیمه شب بازی.',
    },
    type: 'part-time',
  },
  {
    company: {
      // icon: MahnaIcon,
      title: 'سازمان صمت همدان',
      description: 'سازمان صمت هر نوع فعالیت اقتصادی بخش خصوصی در زمینه بازرگانی داخلی و خارجی، تولیدات صنعتی، بخش‌های معدن و اصناف زا زیرنظر دازد.',
      // website: 'https://mahnagroup.com/',
    },
    period: [new Date('22 May 2014'), new Date('23 August 2014')],
    role: {
      title: 'کارآموز اتاق فرش',
      description: 'هماهنگی بین اتاق‌های فرش همدان جهت برگزاری نمایشگاه فرش دستباف، جمع‌آوری اطلاعات کارگاه‌های رنگرزی و تهیه گزارش جامع از فعالیت‌های مرتبط.',
    },
    type: 'part-time',
  },
];

export default experiences;
