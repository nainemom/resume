import { cx } from "@/utils/cx";
import { Education } from '@/types';
import BoxIcon from "../general/BoxIcon";
import Markdown from "../general/Markdown";
import { calcPeriodSize, formatDate } from "@/utils/date";


type EducationsProps = {
  edications: Education[]
  className?: string
}


export default function Educations(props: EducationsProps) {
  return (
    <div className={cx('flex flex-col gap-y-4 items-start', props.className)}>
      {
        props.edications.map((edication) => (
          <div key={edication.achievement} className="border-r-current border-r-4 pr-2 text-black w-full">
            <div className="text-base space-x-1">
              <h3 className="font-bold inline text-base pl-1">{ edication.achievement }</h3>
              { edication.name && (
                <div>
                  <span className="text-zinc-700 text-xs"> در </span>
                  <h4 className="inline text-sm font-semibold">{ edication.name }</h4>
                </div>
              ) }
            </div>
            { edication.period && (
              <div className="flex items-center gap-1">
                <span className="font-normal text-xs inline" dir="ltr">{ formatDate(edication.period[0]) }</span>
                <span className="text-zinc-600 text-xs">تا</span>
                <span className="font-normal text-xs inline" dir="ltr">{ formatDate(edication.period[1]) }</span>
                <span className="font-normal text-xs inline" dir="rtl">({calcPeriodSize(edication.period)})</span>
                
              </div>
            ) }
          </div>
        ))
      }
    </div>
  )
}