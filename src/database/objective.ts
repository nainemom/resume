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
  name: 'Amir Momenian',
  role: 'Front-end Developer',
  location: 'Tehran, Iran',
  info: `Accomplished various projects as frontend developer with **~${careerYears}** years of experience. Contributed to some of the open-source projects such as Nuxt and Stringz and developed some other open-source projects including Framevuerk, iDate, Modela, and Viska.`,
};

export default objective;