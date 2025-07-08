/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "box-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

declare interface Resume {
  objective: {
    image: string;
    name: string;
    role: string;
    location: string;
    info: string;
  };
  contacts: {
    type: "email" | "phone";
    value: string;
  }[];
  skills: {
    title: string;
    description: string;
  }[];
  profiles: {
    type: "github" | "linkedin" | "telegram";
    link: string;
  }[];
  projects: {
    title: string;
    description: string;
    link: string;
    role: "contributer" | "maintainer";
    status: "active" | "archived";
  }[];
  experiences: {
    company: {
      icon: string;
      title: string;
      description: string;
      website: string;
    };
    period: [Date, Date] | [Date];
    role: {
      title: string;
      description: string;
    };
    type: "full-time" | "part-time";
  }[];
}

declare type TemplateProps = { resume: Resume };