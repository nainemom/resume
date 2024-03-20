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
          <div key={edication.achievement} className="border-r-current border-r-4 py-1 px-3 text-black w-full">
            <div className="text-base flex gap-1 items-center">
              <h3 className="font-bold text-lg">{ edication.achievement }</h3>
            </div>
            { edication.name && (
              <div className="flex gap-1 items-center">
                <span className="text-zinc-700 text-xs">در</span>
                <h4 className="inline text-base font-semibold">{ edication.name }</h4>
              </div>
            ) }
            { edication.period && (
              <div className="flex items-center gap-1">
                <span className="font-normal text-sm inline" dir="ltr">{ formatDate(edication.period[0]) }</span>
                <span className="text-zinc-600 text-xs">تا</span>
                <span className="font-normal text-sm inline" dir="ltr">{ formatDate(edication.period[1]) }</span>
                <span className="font-normal text-xs inline" dir="rtl">({calcPeriodSize(edication.period)})</span>
                
              </div>
            ) }
          </div>
        ))
      }
    </div>
  )
}