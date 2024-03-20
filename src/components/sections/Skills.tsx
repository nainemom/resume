import { cx } from "@/utils/cx";
import { Skill } from '@/types';
import Markdown from "@/components/general/Markdown";


type SkillsProps = {
  skills: Skill[]
  className?: string
}

export default function Skills(props: SkillsProps) {
  return (
    <div className={cx('grid grid-cols-2 gap-4', props.className)}>
      {
        props.skills.map((skill) => (
          <div className="grow w-full py-1">
            <h3 className="border-b-current border-b-4 pb-2 font-bold text-lg mb-2">{ skill.title }</h3>
            <Markdown className="text-base whitespace-pre-line">{ skill.description }</Markdown>
          </div>
        ))
      }
    </div>
  )
}