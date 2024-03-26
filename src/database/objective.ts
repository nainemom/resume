import { Objective } from '@/types';
import experiences from "./experiences";
import image from '@/assets/mitra.png';

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
  info: `در حال حاظر پشتیبان سرویس پاکسیت و در کل علاقه‌مند به فعالیت در حوزه آی‌تی و پیشرفت در کار هستم. از دید خودم روابط عمومی و اجتماعی خوبی دارم و نیروی مناسبی برای کارهای تیمی هستم.`,
};

export default objective;