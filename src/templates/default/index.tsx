import Column from "./layout/Column";
import Layout from "./layout/Layout";
import Section from "./layout/Section";
import Biography from "./sections/Biography";
import Contacts from "./sections/Contacts";
import Expriences from "./sections/Experiences";
import Picture from "./sections/Picture";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function DefaultTemplate({
	resume: { objective, contacts, profiles, projects, skills, experiences },
}: TemplateProps) {
	return (
		<Layout className="grid grid-cols-1 lg:grid-cols-3 print:grid-cols-3 gap-3 p-3 lg:p-0 print:p-0">
			<Column className="contents lg:block print:block col-span-1 space-y-3 p-3 bg-zinc-100">
				<Section className="order-1 lg:hidden print:order-none text-center">
					<Picture objective={objective} />
				</Section>
				<Section className="order-2 lg:order-none print:order-none text-center lg:text-start print:text-start">
					<Biography objective={objective} />
				</Section>
				<Section
					title="Contact Info"
					className="order-3 lg:order-none print:order-none"
				>
					<Contacts
						contacts={contacts}
						profiles={profiles}
						objective={objective}
					/>
				</Section>
				<Section
					title="Projects"
					className="order-5 lg:order-none print:order-none"
				>
					<Projects projects={projects} />
				</Section>
			</Column>
			<Column className="contents lg:block print:block col-span-1 lg:col-span-2 print:col-span-2 space-y-3 p-3 bg-white">
				<Section
					title="Skills"
					className="order-4 lg:order-none print:order-none"
				>
					<Skills skills={skills} />
				</Section>
				<Section
					title="Work Experiences"
					className="order-6 lg:order-none print:order-none"
				>
					<Expriences experiences={experiences} />
				</Section>
			</Column>
		</Layout>
	);
}
