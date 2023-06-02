import { cx } from "@/utils/cx";
import { Exprience } from '@/types';
import BoxIcon from "../general/BoxIcon";
import Markdown from "../general/Markdown";


type ExpriencesProps = {
  experiences: Exprience[]
  className?: string
}

function formatDate(date?: Date) {
  if (!date) {
    return 'Present'
  }
  const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

function calcPeriodMonths(period: Exprience['period']) {
  const d1 = period[0].getTime();
  const d2 = !period[1] ? Date.now() : period[1].getTime();
  const offsetDays = (d2 - d1) / 86400000;
  const offsetMonths = Math.round(offsetDays / 30);
  return offsetMonths;
}

export default function Expriences(props: ExpriencesProps) {
  return (
    <div className={cx('flex flex-col gap-y-2 items-start', props.className)}>
      {
        props.experiences.map((experience) => (
          <div key={experience.period[0].getTime()} className="border-l-current border-l-4 pl-2 text-black w-full">
            <div className="text-base space-x-1">
              <h3 className="font-bold inline text-base">{ experience.company.title }</h3>
              <span className="text-zinc-700">as</span>
              <h4 className="inline text-base font-semibold">{ experience.role.title }</h4>
            </div>
            <div className="text-sm space-x-1 flex flex-row items-center mb-1">
              <span className="font-normal inline ">{ formatDate(experience.period[0]) }</span>
              <BoxIcon name="right-arrow-alt" type="regular" className="w-5 text-zinc-700 fill-current" />
              <span className="font-normal inline">{ formatDate(experience.period[1]) } (~{calcPeriodMonths(experience.period)} Months)</span>
            </div>
            <Markdown className="text-zinc-700 text-base">{ experience.company.description }</Markdown>
          </div>
        ))
      }
    </div>
  )
}