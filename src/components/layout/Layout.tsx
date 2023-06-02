import { cx } from "@/utils/cx";
import { ReactNode } from "react";

type LayoutProps = {
  className?: string
  children: ReactNode
}


export default function Layout(props: LayoutProps) {
  return (
    <div
      className={cx('flex flex-row', props.className)}
    >
      { props.children }
    </div>
  )
}