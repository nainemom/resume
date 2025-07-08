import clsx from "clsx";
import { IconType } from "react-icons";
import {
	RiGithubLine,
	RiLinkedinBoxLine,
	RiLinkedinLine,
	RiMailLine,
	RiMapPin2Line,
	RiMapPinLine,
	RiPhoneLine,
	RiTelegram2Line,
} from "react-icons/ri";

type ContactsProps = {
	contacts: Resume["contacts"];
	profiles: Resume["profiles"];
	objective: Resume["objective"];
	className?: string;
};

type ContactsFieldProps = {
	type: "location" | "phone" | "email" | "github" | "linkedin" | "telegram";
	value: string;
};

const CONTACT_FIELD_TYPE_TO_BOX_ICON_PROPS: Record<
	ContactsFieldProps["type"],
	IconType
> = {
	location: RiMapPinLine,
	phone: RiPhoneLine,
	email: RiMailLine,
	github: RiGithubLine,
	linkedin: RiLinkedinLine,
	telegram: RiTelegram2Line,
};

const CONTACT_FIELD_TYPE_TO_TITLE: Record<ContactsFieldProps["type"], string> =
	{
		location: "Location",
		phone: "Phone",
		email: "Email",
		github: "Github",
		linkedin: "Linkedin",
		telegram: "Telegram",
	};

const CONTACT_FIELD_TYPE_TO_HREF_PREFIX: Record<
	ContactsFieldProps["type"],
	false | string
> = {
	location: false,
	phone: "tel:",
	email: "mailto:",
	github: "",
	linkedin: "",
	telegram: "",
};

function ContactsField(props: ContactsFieldProps) {
	const hrefPrefix = CONTACT_FIELD_TYPE_TO_HREF_PREFIX[props.type];
	const Icon = CONTACT_FIELD_TYPE_TO_BOX_ICON_PROPS[props.type];
	return (
		<div className="flex flex-row flex-nowrap gap-x-1 items-center text-base">
			<Icon className="h-6 shrink-0" />
			{hrefPrefix === false ? (
				<>{props.value}</>
			) : (
				<a
					className="underline underline-offset-4"
					href={`${hrefPrefix}${props.value}`}
					target="__blank"
					aria-label={CONTACT_FIELD_TYPE_TO_TITLE[props.type]}
				>
					{props.value.replace("https://", "")}
				</a>
			)}
			<span>
				{" "}
				<slot name="value" />{" "}
			</span>
		</div>
	);
}

export default function Contacts(props: ContactsProps) {
	const fields: ContactsFieldProps[] = [
		{
			type: "location",
			value: props.objective.location,
		},
		...props.contacts.map((contact) => ({
			type: contact.type as ContactsFieldProps["type"],
			value: contact.value,
		})),
		...props.profiles.map((profile) => ({
			type: profile.type as ContactsFieldProps["type"],
			value: profile.link,
		})),
	];
	return (
		<div
			className={clsx(
				"flex flex-row lg:flex-col print:flex-col flex-wrap gap-1 w-full text-sm",
				props.className,
			)}
		>
			{fields.map((field) => (
				<ContactsField key={field.type + field.value} {...field} />
			))}
		</div>
	);
}
