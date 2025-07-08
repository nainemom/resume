import { cx } from "@/utils/cx";
import { ReactNode } from "react";

type SideColumnProps = {
  className?: string
  children: ReactNode
}


export default function SideColumn(props: SideColumnProps) {
  return (
    <div
      className={cx(props.className)}
    >
      { props.children }
    </div>
  )
}