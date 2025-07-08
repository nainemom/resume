import clsx from "clsx";
import Markdown from "@/components/Markdown";

type SkillsProps = {
	skills: Resume["skills"];
	className?: string;
};

export default function Skills(props: SkillsProps) {
	return (
		<div
			className={clsx(
				"flex flex-col items-start gap-y-2 shrink",
				props.className,
			)}
		>
			{props.skills.map((skill) => (
				<div className="grow w-full">
					<h3 className="border-b-current border-b-4 pb-2 font-bold text-lg mb-2">
						{skill.title}
					</h3>
					<Markdown className="text-base">{skill.description}</Markdown>
				</div>
			))}
		</div>
	);
}
