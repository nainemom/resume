import cafeBazaarIcon from "./company-icons/cafebazaar.png";
import hotelOneClickIcon from "./company-icons/hoteloneclick.png";
import mahnaIcon from "./company-icons/mahna.jpg";
import raadIcon from "./company-icons/raad.png";
import snappIcon from "./company-icons/snapp.png";
import profileImage from "./me.jpg";

const CAREER_START = new Date("10 May 2013");

const CAREER_YEARS = (() => {
	const now = Date.now();
	const YEAR_LENGTH = 31536000000;
	return Math.round((now - CAREER_START.getTime()) / YEAR_LENGTH);
})();

export default {
	objective: {
		image: profileImage,
		name: "Amir Momenian",
		role: "Front-end Developer",
		location: "Tehran, Iran",
		info: `Accomplished various projects as frontend developer with **~${CAREER_YEARS}** years of experience. Contributed to some of the open-source projects such as Nuxt and Stringz and developed some other open-source projects including Framevuerk, iDate, Hazy, and Viska.`,
	},
	contacts: [
		{
			type: "phone",
			value: "+989365586015",
		},
		{
			type: "email",
			value: "nainemom@gmail.com",
		},
	],
	skills: [
		{
			title: "Client-Side",
			description:
				"I mostly worked as a frontend developer. " +
				"I know how **Javascript** works. I worked with frameworks such as **Vue**, **Nuxt**, **React**, **Next**, **Remix** and **Typescript**. " +
				"I've created various projects including **PWA**, Desktop Apps (with **Electron**), and Mobile Apps (with **Cordova**) and Tizen/WebOS apps (using web technologies). " +
				"I understand how a Web-Project creates, maintains and works, so I just mention some other tools that I'm familier with: " +
				"**Rollup**, **Vite**, **Webpack**, **CSS-Modules**, **TailwindCSS**, **Eslint**, **SSR libs**, **Pre-render libs**, **Cordova**, and more.",
		},
		{
			title: "Server-Side",
			description:
				"In my career there were a lot of times that I faced to server jobs as an **Amateur** developer. " +
				"I understand **GNU/Linux** basics, also I can write a server-side scripts with **NodeJS**, " +
				"manage relational DBs like **MySQL**, **Postgres** and Non relational ones like **MongoDB**. I know how to handle queues with **RabbitMQ** and " +
				"I also have various expirenced with **Docker**, **Kubernetees**, **Amazon AWS**, **Gitlab CI**, and **Github Actions**.",
		},
	],
	profiles: [
		{
			type: "github",
			link: "https://github.com/nainemom",
		},
		{
			type: "linkedin",
			link: "https://linkedin.com/in/nainemom",
		},
		{
			type: "telegram",
			link: "https://t.me/nainemom",
		},
	],
	projects: [
		{
			title: "Framevuerk",
			description:
				"Multi language/direction UI framework based on VueJS including most usable components like Datepicker and Dropdown.",
			link: "https://github.com/framevuerk/framevuerk",
			role: "maintainer",
			status: "archived",
		},
		{
			title: "Windows 7 Preview",
			description:
				"Yet another OS preview via web technologies focused on Microsoft Windows 7.",
			link: "https://github.com/nainemom/win7",
			role: "maintainer",
			status: "active",
		},
		{
			title: "IDate",
			description:
				"Iranian Date constractor for Javascript, Just like native javascript Date.",
			link: "https://github.com/nainemom/idate",
			role: "maintainer",
			status: "active",
		},
		{
			title: "Guard",
			description: "Encrypt and Decrypt Messages using RSA keys.",
			link: "https://github.com/nainemom/guard",
			role: "maintainer",
			status: "active",
		},
		{
			title: "Viska",
			description: "An Anonymous Chat Service.",
			link: "https://github.com/nainemom/viska",
			role: "maintainer",
			status: "archived",
		},
		{
			title: "Hazy",
			description: "Secure service to send and receive anonymous messages.",
			link: "https://github.com/hazy-app/webapp",
			role: "maintainer",
			status: "archived",
		},
		{
			title: "Nemojy",
			description: "A minimal desktop app to browsing and using emojies.",
			link: "https://github.com/nainemom/nemojy",
			role: "maintainer",
			status: "archived",
		},
	],
	experiences: [
		{
			company: {
				icon: cafeBazaarIcon,
				title: "Cafe Bazaar",
				description:
					"Cafe Bazaar is the most popular Android AppStore for Persian users with +46 million user.",
				website: "https://cafebazaar.ir",
			},
			period: [new Date("18 July 2020")],
			role: {
				title: "Frontend Developer",
				description:
					"There was a lots of o work variety inside CafeBazaar within this period for me. I just mention my impressive roles on big products: cafebazaar.ir website as owner/maintainer, Cafebazaar careers website as creator/owner, Cafebazaar Video tab (archived) as developer, KiKi backoffice panel / main project website as creator/owner, panjereh.ir backoffice panel as creator/owner and paxit.ir pwa as creator/owner. I also touched a lots of areas that cannot be mentioned due to cafebazaar NDA.",
			},
			type: "full-time",
		},
		{
			company: {
				icon: snappIcon,
				title: "Snapp",
				description:
					"Snapp is the largest ride-hailing application in the Middle East with ~40 million user and ~2 million rides per day.",
				website: "https://snapp.ir/",
			},
			period: [new Date("10 May 2019"), new Date("15 July 2020")],
			role: {
				title: "Frontend Developer",
				description:
					"I Maintainced and released second Snapp PWA version and initiated Snapp UI-Kit for web along with 6 other front-end developers. I also worked on Snapp Backoffice Panel as a lead developer with 2 other front-end developers.",
			},
			type: "full-time",
		},
		{
			company: {
				icon: hotelOneClickIcon,
				title: "HotelOneClick",
				description:
					"HotelOneClick is one of the top online hotel booking, tour booking and car booking in Iran.",
				website: "https://hoteloneclick.com/",
			},
			period: [new Date("10 March 2018"), new Date("10 April 2019")],
			role: {
				title: "Full-stack Developer",
				description:
					"I helped design the entire platform from scratch and specifically worked on the Farsi/English versions of the website/back-office of this startup.",
			},
			type: "part-time",
		},
		{
			company: {
				icon: raadIcon,
				title: "RaadSense",
				description:
					"RaadSense is a subset of Parsian Bank providing Mobile-Banking/Online-Wallet mobile application.",
				website: "https://paygear.ir/",
			},
			period: [new Date("10 April 2017"), new Date("10 April 2019")],
			role: {
				title: "Frontend Developer",
				description:
					"I worked on RaadSense backoffice panel as maintainer and created RaadSense push notification service.",
			},
			type: "full-time",
		},
		{
			company: {
				icon: mahnaIcon,
				title: "Mahna",
				description:
					"Mahna is a multi-functions company providing B2B softwares including Telecommunications, GIS, and VoIP services.",
				website: "https://mahnagroup.com/",
			},
			period: [CAREER_START, new Date("10 April 2017")],
			role: {
				title: "Full-stack Developer",
				description:
					"I specifically worked on the VoIP product. The product has a lots of feature including varous type of reports, charts, configs, abd more. Important technologies used in the front and back side of product was Asterisk, PHP, Jquery, NodeJS, MySql, and KnockoutJS.",
			},
			type: "full-time",
		},
	],
} satisfies Resume;
