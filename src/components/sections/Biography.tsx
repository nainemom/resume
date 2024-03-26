import { cx } from "@/utils/cx";
import { Objective } from '@/types';
import Markdown from "@/components/general/Markdown";

type BiographyProps = {
  objective: Objective
  className?: string
}

export default function Biography(props: BiographyProps) {
  return (
    <div className={cx(props.className)}>
      <h1 className="text-4xl font-extrabold"> { props.objective.name } </h1>
      {/* <p className="text-lg text-gray-700 font-semibold mb-4">{ props.objective.role }</p> */}
      <Markdown className="text-base text-start mt-6">
        { props.objective.info }
      </Markdown>
    </div>
  );  
}