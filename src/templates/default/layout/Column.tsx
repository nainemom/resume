import { cx } from "@/utils/cx";
import { ReactNode } from "react";

type ColumnProps = {
  className?: string
  children: ReactNode
}


export default function Column(props: ColumnProps) {
  return (
    <div
      className={cx(props.className)}
    >
      { props.children }
    </div>
  )
}