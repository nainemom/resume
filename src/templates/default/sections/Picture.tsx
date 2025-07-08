import clsx from "clsx";

type PictureProps = {
	objective: Resume["objective"];
	className?: string;
};

export default function Picture(props: PictureProps) {
	return (
		<div
			className={clsx(
				"size-44 rounded-full overflow-hidden inline-block border-solid border-4 border-zinc-700",
				props.className,
			)}
		>
			<img
				src={props.objective.image}
				className="size-full grayscale-50 contrast-[115%]"
			/>
		</div>
	);
}
