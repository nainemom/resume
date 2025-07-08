import clsx from "clsx";
import { parseInline } from "marked";

type MarkdownProps = {
	children: string;
	className?: string;
};

export default function Markdown(props: MarkdownProps) {
	return (
		<p
			dangerouslySetInnerHTML={{
				__html: parseInline(props.children, {
					async: false,
				}),
			}}
			className={clsx(props.className)}
		/>
	);
}
