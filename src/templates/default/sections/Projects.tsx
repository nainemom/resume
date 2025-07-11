import clsx from "clsx";
import { FiLink } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import Markdown from "@/components/Markdown";

type ProjectsProps = {
	projects: Resume["projects"];
	className?: string;
};

function formatRole(role: Resume["projects"][number]["role"]) {
	return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
}

export default function Projects(props: ProjectsProps) {
	return (
		<div className={clsx("flex flex-col gap-y-3 items-start", props.className)}>
			{props.projects.map((project) => (
				<div key={project.title} className="relative text-black w-full ps-3">
					<div className="absolute h-full w-1 bg-black rounded-full left-0 top-0 shrink-0" />
					<div className="text-base space-x-1">
						<h3 className="font-bold inline text-base">{project.title}</h3>
						<span className="text-zinc-700 text-xs">as</span>
						<h4 className="inline text-base font-semibold">
							{formatRole(project.role)}
						</h4>
					</div>
					<div className="text-sm flex flex-row flex-wrap items-center mb-1">
						<RiExternalLinkLine className="w-5 shrink-0" />
						<a
							href={project.link}
							target="_blank"
							className="underline underline-offset-4"
						>
							{project.link.replace("https://", "")}
						</a>
					</div>
					<Markdown className="text-zinc-700 text-base">
						{project.description}
					</Markdown>
				</div>
			))}
		</div>
	);
}
