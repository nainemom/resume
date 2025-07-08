import clsx from "clsx";
import { ReactNode } from "react";

type SectionProps = {
	title?: string;
	className?: string;
	children: ReactNode;
};

export default function Section(props: SectionProps) {
	return (
		<section className={clsx(props.className, "relative")}>
			{props.title && (
				<h2 className="z-10 bg-black text-white px-4 p-2 inline-block uppercase font-bold text-xl mb-4 sticky top-2 rounded-md">
					{props.title}
				</h2>
			)}
			{props.children}
		</section>
	);
}
