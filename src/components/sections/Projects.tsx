import { cx } from "@/utils/cx";
import { Project } from '@/types';
import BoxIcon from "../general/BoxIcon";
import Markdown from "../general/Markdown";


type ProjectsProps = {
  projects: Project[]
  className?: string
}

function formatRole(role: Project['role']) {
  return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
}

export default function Projects(props: ProjectsProps) {
  return (
    <div className={cx('flex flex-col gap-y-4 items-start', props.className)}>
      {
        props.projects.map((project) => (
          <div key={project.title} className="border-l-current border-l-4 pl-2 text-black w-full">
            <div className="text-base space-x-1">
              <h3 className="font-bold inline text-base">{ project.title }</h3>
              <span className="text-zinc-700 text-xs">as</span>
              <h4 className="inline text-base font-semibold">{ formatRole(project.role) }</h4>
            </div>
            <div className="text-sm space-x-1 flex flex-row flex-wrap items-center mb-1">
              <BoxIcon type="regular" name="link" className="w-4 shrink-0" />
              <a href={project.link} target="_blank" className="underline underline-offset-4">{ project.link.replace('https://', '') }</a>
            </div>
            <Markdown className="text-zinc-700 text-base pt-1">{ project.description }</Markdown>
          </div>
        ))
      }
    </div>
  )
}