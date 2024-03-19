import { cx } from "@/utils/cx";
import { Exprience } from '@/types';
import Markdown from "../general/Markdown";
import { calcPeriodSize, formatDate } from "@/utils/date";


type ExpriencesProps = {
  experiences: Exprience[]
  className?: string
}

export default function Expriences(props: ExpriencesProps) {
  return (
    <div className={cx('flex flex-col gap-y-4 items-start', props.className)}>
      {
        props.experiences.map((experience) => (
          <div
            key={experience.period[0].getTime()}
            className="border-r-4 px-3 py-1 border-r-black w-full space-y-3"
          >
            <div>
              <div className="flex flex-row gap-1 items-center">
                { experience.company.icon && (<img src={experience.company.icon} className="w-6 h-6 rounded inline mr-2" />) }
                <h3 className="font-bold text-lg">{ experience.company.title }</h3>
                <span className="text-zinc-600 text-xs mt-1"> در نقش </span>
                <h4 className="text-lg font-semibold">{ experience.role.title }</h4>
              </div>
              <div className="space-x-1">
                <span className="font-normal text-sm inline pl-1">{ formatDate(experience.period[0]) }</span>
                <span className="text-zinc-600 text-xs">تا</span>
                <span className="font-normal text-sm inline">{ formatDate(experience.period[1]) } ({calcPeriodSize(experience.period)})</span>
              </div>
              <Markdown className="text-zinc-600 text-xs">{ experience.company.description }</Markdown>
            </div>
            <Markdown className="text-zinc-800 text-base col-span-2">{ experience.role.description }</Markdown>
          </div>
        ))
      }
    </div>
  )
}