import clsx from "clsx";
import { ReactNode } from "react";

type SideColumnProps = {
	className?: string;
	children: ReactNode;
};

export default function SideColumn(props: SideColumnProps) {
	return <div className={clsx(props.className)}>{props.children}</div>;
}
