export interface Exprience {
  company: {
    icon?: string,
    title: string,
    description: string,
    website: string,
  }
  period: [Date, Date] | [Date],
  role: {
    title: string
    description: string
  }
  type: 'full-time' | 'part-time'
}

export interface Project {
  title: string
  description: string
  link: string
  role: 'contributer' | 'maintainer'
  status: 'active' | 'archived'
}


export interface Education {
  name?: string
  achievement: string
  period?: [Date, Date] | [Date],
}

export interface Objective {
  image: string
  name: string
  role: string
  location: string
  info: string
}

export interface Profile {
  type: 'github' | 'linkedin' | 'telegram'
  link: string
}

export interface Contact {
  type: 'email' | 'phone'
  value: string
}

export interface Skill {
  title: string
  description: string
}