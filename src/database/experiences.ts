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
      description: 'شرکت پاکسیت خدماتی مثل فروش گیفت کارت‌های بازی‌های پلتفرم‌های مختلف و ارائه سرویس‌های مرتبط با استریم را انجام می‌دهد.',
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
      description: 'مهد دانشمندان کوچک با هدف ارتقای سلامت زیستی، روانی و اجتماعی کودکان خدماتی مثل آموزش مهارت‌های فردی و اجتماعی گوناگونی را به کودکان زیر شش سال ازائه می‌دهد.',
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
      description: 'مجموعه خانه لگو با هدف تقویت مهارت‌های گفتاری و زبانی، مهارت‌های اجتماعی، توانایی حل مسئله و مهارت‌های ریاضی و هوش و خلاقیت و … به ارائه دروس و سرفصل‌های مرتبط در قالب داستان می‌پردازد.',
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
    period: [new Date('23 October 2014'), new Date('21 March 2015')],
    role: {
      title: 'مربی هنر',
      description: 'همکاری در پروژه ی احیای نمایش خیمه شب بازی.',
    },
    type: 'part-time',
  },
  {
    company: {
      // icon: MahnaIcon,
      title: 'سازمان صمت همدان',
      description: 'سازمان صمت در راستای چابک‌سازی و کوچک‌کردن دولت، هر نوع فعالیت اقتصادی بخش خصوصی در زمینه بازرگانی داخلی و خارجی، تولیدات صنعتی، بخش‌های معدن و اصناف، زا زیرنظر خود انجام می‌دهد.',
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
