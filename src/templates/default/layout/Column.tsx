import clsx from "clsx";
import { ReactNode } from "react";

type ColumnProps = {
	className?: string;
	children: ReactNode;
};

export default function Column(props: ColumnProps) {
	return <div className={clsx(props.className)}>{props.children}</div>;
}
