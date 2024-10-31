import { Objective } from '@/types';
import experiences from "./experiences";
import image from '@/assets/mitra.jpg';

const careerYears = (() => {
  const careerStart = Math.min(...experiences.map((exp) => exp.period[0].getTime()));
  const now = Date.now();
  const YEAR_LENGTH = 31536000000;
  return Math.round((now - careerStart) / YEAR_LENGTH);
})();

const objective: Objective = {
  image,
  name: 'میترا بهرمان',
  role: 'پشتیبان',
  location: 'همدان، ایران',
  info: `پشتیبانی آنلاین سایت، دارای توانایی های گسترده در امور اداری، اجرایی، آماری و گزارش دهی نموداری. توانمند در ارائه‌ی گزارش‌های شفاف و قابل فهم، حل مسائل و مدیریت زمان. به دنبال فرصتی برای به کارگیری تجربیاتم در کار گروهی و رشد و پیشرفت سازمانی و شغلی هستم.`,
};

export default objective;