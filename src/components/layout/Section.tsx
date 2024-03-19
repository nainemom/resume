import { cx } from "@/utils/cx";
import { ReactNode } from "react";

type SectionProps = {
  title?: string
  className?: string
  children: ReactNode
}


export default function Section(props: SectionProps) {
  return (
    <section
      className={cx(props.className, 'relative')}
    >
      { props.title && (
        <h2 className="bg-black text-white p-1 inline-block uppercase font-bold text-xl mb-4">
          { props.title }
        </h2>
      ) }
      { props.children }
    </section>
  )
}