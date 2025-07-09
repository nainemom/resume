import cafeBazaarIcon from "./company-icons/cafebazaar.png";
import hotelOneClickIcon from "./company-icons/hoteloneclick.png";
import mahnaIcon from "./company-icons/mahna.png";
import raadIcon from "./company-icons/raad.png";
import snappIcon from "./company-icons/snapp.png";
import urbanateIcon from "./company-icons/urbanate.png";
import wisdomiseIcon from "./company-icons/wisdomise.png";
import profileImage from "./me.jpg";

const CAREER_START = new Date("10 May 2013");

const CAREER_YEARS = (() => {
	const now = Date.now();
	const YEAR_LENGTH = 31_536_000_000;
	return Math.round((now - CAREER_START.getTime()) / YEAR_LENGTH);
})();

export default {
	objective: {
		image: profileImage,
		name: "Amir Momenian",
		role: "Front-end Developer",
		location: "Tehran, Iran",
		info: `Experienced Front-end Developer with **~${CAREER_YEARS}** years in web technologies. I have contributed to open-source projects like **Nuxt** and **Stringz**, and developed my own tools and frameworks including **Framevuerk**, **iDate**, **Hazy**, and **Viska**.`,
	},
	contacts: [
		{ type: "phone", value: "+989365586015" },
		{ type: "email", value: "nainemom@gmail.com" },
	],
	skills: [
		{
			title: "Client-Side",
			description:
				"I specialize in modern Front-end development with strong expertise in **JavaScript** and **TypeScript**. I have built projects using **Vue**, **Nuxt**, **React**, **Next.js**, and **Remix**, and I am experienced in developing **PWAs**, desktop apps (**Electron**), hybrid mobile apps (**Cordova**), and Tizen/WebOS apps. I am well-versed in project architecture, performance optimization, and maintainability. My stack includes **Vite**, **Rollup**, **Webpack**, **TailwindCSS**, **CSS Modules**, **ESLint**, **SSR**, **pre-rendering**, and more.",
		},
		{
			title: "Server-Side",
			description:
				"I handle server-side tasks at an intermediate level. I work comfortably with **GNU/Linux**, **Node.js**, **NestJS**, and databases such as **MySQL**, **Postgres**, and **MongoDB**. I also have hands-on experience with **RabbitMQ**, **Docker**, **Kubernetes**, **AWS**, **GitLab CI**, and **GitHub Actions**.",
		},
	],
	profiles: [
		{ type: "github", link: "https://github.com/nainemom" },
		{ type: "linkedin", link: "https://linkedin.com/in/nainemom" },
		{ type: "telegram", link: "https://t.me/nainemom" },
	],
	projects: [
		{
			title: "Framevuerk",
			description:
				"A multi-language/direction UI framework for Vue.js, featuring essential components like datepickers and dropdowns.",
			link: "https://github.com/framevuerk/framevuerk",
			role: "maintainer",
			status: "archived",
		},
		{
			title: "Windows 7 Preview",
			description:
				"A nostalgic Windows 7 simulation built entirely with web technologies.",
			link: "https://github.com/nainemom/win7",
			role: "maintainer",
			status: "active",
		},
		{
			title: "IDate",
			description: "A native-like Iranian date constructor for JavaScript.",
			link: "https://github.com/nainemom/idate",
			role: "maintainer",
			status: "active",
		},
		{
			title: "Guard",
			description:
				"A simple tool to encrypt and decrypt messages using RSA keys.",
			link: "https://github.com/nainemom/guard",
			role: "maintainer",
			status: "active",
		},
		{
			title: "Viska",
			description: "An anonymous chat service with privacy-first design.",
			link: "https://github.com/nainemom/viska",
			role: "maintainer",
			status: "archived",
		},
		{
			title: "Hazy",
			description:
				"A secure service for sending and receiving anonymous messages.",
			link: "https://github.com/hazy-app/webapp",
			role: "maintainer",
			status: "archived",
		},
		{
			title: "Nemojy",
			description: "A minimal desktop app for browsing and using emojis.",
			link: "https://github.com/nainemom/nemojy",
			role: "maintainer",
			status: "archived",
		},
	],
	experiences: [
		{
			company: {
				icon: wisdomiseIcon,
				title: "Wisdomise",
				description:
					"Wisdomise is an AI-powered auto trading and portfolio management solution.",
				website: "https://wisdomise.com/en",
			},
			period: [new Date("8 May 2024")],
			role: {
				title: "Front-end Developer",
				description:
					"Developed the main landing website and PWA using **Next.js**, **React**, **OneSignal**, **i18next**, **ECharts**, **Ant Design**, and **TailwindCSS**. Built interactive charts, integrated crypto **insights**, social sentiment, whale activity dashboards, and trading tools in a user-friendly interface.",
			},
			type: "full-time",
		},
		{
			company: {
				icon: urbanateIcon,
				title: "Urbanate",
				description:
					"A Canada-based real estate investment platform that connects developers, property owners, and investors worldwide.",
				website: "https://urbanate.com",
			},
			period: [new Date("13 July 2024")],
			role: {
				title: "Front-end Developer",
				description:
					"Developed Urbanate’s main landing and investor portal using **Next.js** and **TailwindCSS**, enabling developers to list properties and investors to pre-purchase and invest in exclusive opportunities.",
			},
			type: "part-time",
		},
		{
			company: {
				icon: cafeBazaarIcon,
				title: "Cafe Bazaar",
				description:
					"Iran’s leading Android app store, with over 46 million users.",
				website: "https://cafebazaar.ir",
			},
			period: [new Date("18 July 2020"), new Date("8 May 2024")],
			role: {
				title: "Front-end Developer",
				description:
					"Led and maintained the **cafebazaar.ir** website, developed the careers site, the Video tab (archived), the KiKi back-office panel and site, the **panjereh.ir** panel, and the **paxit.ir** PWA. Collaborated on multiple confidential projects under NDA.",
			},
			type: "full-time",
		},
		{
			company: {
				icon: snappIcon,
				title: "Snapp",
				description:
					"The largest ride-hailing app in the Middle East, serving ~40 million users and 2 million rides daily.",
				website: "https://snapp.ir/",
			},
			period: [new Date("10 May 2019"), new Date("15 July 2020")],
			role: {
				title: "Front-end Developer",
				description:
					"Maintained and released Snapp’s second PWA version, co-developed the Snapp web UI kit, and led the Back-office Panel project with a small front-end team.",
			},
			type: "full-time",
		},
		{
			company: {
				icon: hotelOneClickIcon,
				title: "HotelOneClick",
				description:
					"One of Iran’s top online booking platforms for hotels, tours, and rental cars for foreign tourists.",
				website: "https://hoteloneclick.com/",
			},
			period: [new Date("10 March 2018"), new Date("10 April 2019")],
			role: {
				title: "Full-stack Developer",
				description:
					"Designed and built the platform’s core services, managing both Farsi and English versions of the website and its back-office.",
			},
			type: "part-time",
		},
		{
			company: {
				icon: raadIcon,
				title: "RaadSense",
				description:
					"A division of Parsian Bank, offering mobile banking and online wallet services.",
				website: "https://paygear.ir/",
			},
			period: [new Date("10 April 2017"), new Date("10 April 2019")],
			role: {
				title: "Front-end Developer",
				description:
					"Maintained and enhanced the RaadSense back-office panel, built the push notification service, and contributed to core systems using **Vue.js**, **Node.js**, **RabbitMQ**, **Framevuerk**, and **i18n**.",
			},
			type: "full-time",
		},
		{
			company: {
				icon: mahnaIcon,
				title: "Mahna",
				description:
					"Provider of B2B software solutions for telecom, GIS, and VoIP services.",
				website: "https://mahnagroup.com/",
			},
			period: [CAREER_START, new Date("10 April 2017")],
			role: {
				title: "Full-stack Developer",
				description:
					"Worked mainly on the VoIP product, building reporting dashboards, charts, and configuration panels using **Asterisk**, **PHP**, **jQuery**, **Node.js**, **MySQL**, and **KnockoutJS**.",
			},
			type: "full-time",
		},
	],
} satisfies Resume;
