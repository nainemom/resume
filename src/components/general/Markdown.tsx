import { cx } from "@/utils/cx";
import { marked } from "marked";

type MarkdownProps = {
  children: string
  className?: string
}


export default function Markdown(props: MarkdownProps) {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: marked.parseInline(props.children, {
          async: false,
        }),
      }}
      className={cx(props.className)}
    />
  )
}
