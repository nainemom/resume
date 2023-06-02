import { cx } from "@/utils/cx";
import { Objective } from '@/types';

type PictureProps = {
  objective: Objective
  className?: string
}

export default function Picture(props: PictureProps) {
  return (
    <div className={cx('w-44 h-44 rounded-full overflow-hidden inline-block border-solid border-4 border-zinc-700', props.className)}>
      <img src={props.objective.image} className="w-full h-full" />
    </div>
  );  
}