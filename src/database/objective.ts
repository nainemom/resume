import { Objective } from '@/types';
import experiences from "./experiences";
import image from '@/assets/me.jpg';

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
  info: `پشتیبانی آنلاین سایت دارای روابط عمومی و اجتماعی، همچنین علاقمند به فعالیت‌های گروهی و پیشرفت و رشد در کار هستم.`,
};

export default objective;