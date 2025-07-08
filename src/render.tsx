import React, { FC } from "react";
import ReactDOM from "react-dom/client";

export const render = ({
	template: Template,
	resume,
}: {
	resume: Resume;
	template: FC<TemplateProps>;
}) =>
	ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
		<React.StrictMode>
			<Template resume={resume} />
		</React.StrictMode>,
	);
