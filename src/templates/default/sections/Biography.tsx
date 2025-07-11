import clsx from "clsx";
import Markdown from "@/components/Markdown";

type BiographyProps = {
	objective: Resume["objective"];
	className?: string;
};

export default function Biography(props: BiographyProps) {
	return (
		<div className={clsx(props.className)}>
			<h1 className="text-4xl font-extrabold"> {props.objective.name} </h1>
			<p className="text-lg text-gray-700 font-semibold mb-1">
				{props.objective.role}
			</p>
			<Markdown className="text-base text-start">
				{props.objective.info}
			</Markdown>
		</div>
	);
}
