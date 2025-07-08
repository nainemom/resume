import { cx } from "@/utils/cx";
import Markdown from "@/components/Markdown";


type ExpriencesProps = {
  experiences: Resume['experiences']
  className?: string
}

function formatDate(date?: Date) {
  if (!date) {
    return 'Present'
  }
  const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

function calcPeriodSize(period: Resume['experiences'][number]['period']) {
  const d1 = period[0].getTime();
  const d2 = !period[1] ? Date.now() : period[1].getTime();
  const offsetDays = (d2 - d1) / 86400000;
  const offsetMonths = Math.round(offsetDays / 30);

  const years = Math.floor(offsetMonths / 12);
  const months = offsetMonths % 12;
  const yearsStr = `${years > 0 ? `${years} Year` : ''}${years > 1 ? 's' : ''}`
  const monthsStr = `${months > 0 ? `${months} Month` : ''}${months > 1 ? 's' : ''}`
  return `${yearsStr}${yearsStr && monthsStr ? ' and ' : ''}${monthsStr}`;
}

export default function Expriences(props: ExpriencesProps) {
  return (
    <div className={cx('flex flex-col gap-y-4 items-start', props.className)}>
      {
        props.experiences.map((experience) => (
          <div
            key={experience.period[0].getTime()}
            className="border-l-4 px-3 py-1 border-l-black w-full space-y-3"
          >
            <div>
              <div className="flex flex-row gap-1 items-center">
                <img src={experience.company.icon} className="w-6 h-6 rounded inline mr-2" />
                <h3 className="font-bold text-lg">{ experience.company.title }</h3>
                <span className="text-zinc-600 text-xs mt-1">as</span>
                <h4 className="text-lg font-semibold">{ experience.role.title }</h4>
              </div>
              <div className="space-x-1">
                <span className="font-normal text-xs inline">{ formatDate(experience.period[0]) }</span>
                <span className="text-zinc-600 text-xs">to</span>
                <span className="font-normal text-xs inline">{ formatDate(experience.period[1]) } ({calcPeriodSize(experience.period)})</span>
              </div>
              <Markdown className="text-zinc-600 text-sm">{ experience.company.description }</Markdown>
            </div>
            <Markdown className="text-zinc-800 text-base col-span-2">{ experience.role.description }</Markdown>
          </div>
        ))
      }
    </div>
  )
}