import { ReactNode } from "react";

type LayoutProps = {
  className?: string
  children: ReactNode
}


export default function Layout(props: LayoutProps) {
  return (
    <div
      className={props.className}
    >
      { props.children }
    </div>
  )
}