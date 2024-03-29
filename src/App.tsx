import objective from '@/database/objective';
import profiles from '@/database/profiles';
import contacts from '@/database/contacts';
import experiences from '@/database/experiences';
import skills from '@/database/skills';
import projects from '@/database/projects';

import Section from '@/components/layout/Section';
import Biography from '@/components/sections/Biography';
import Expriences from '@/components/sections/Experiences';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Layout from './components/layout/Layout';
import Column from './components/layout/Column';
import Contacts from './components/sections/Contacts';
import Picture from './components/sections/Picture';

function App() {
  return (
    <Layout className="grid grid-cols-1 lg:grid-cols-3 print:grid-cols-3 gap-4 p-6 lg:p-0 print:p-0">
      <Column className="contents lg:block print:block col-span-1 space-y-8 p-6 bg-zinc-100">
        <Section className="order-1 lg:order-none print:order-none text-center">
          <Picture objective={objective} />
        </Section>
        <Section className="order-3 lg:order-none print:order-none">
          <Contacts contacts={contacts} profiles={profiles} objective={objective} />
        </Section>
        <Section title="Projects" className="order-5 lg:order-none print:order-none">
          <Projects projects={projects} />
        </Section>
      </Column>
      <Column className="contents lg:block print:block col-span-1 lg:col-span-2 print:col-span-2 space-y-8 p-6 bg-white">
        <Section className="order-2 lg:order-none print:order-none text-center lg:text-start print:text-start">
          <Biography objective={objective} />
        </Section>
        <Section title="Skills" className="order-4 lg:order-none print:order-none">
          <Skills skills={skills} />
        </Section>
        <Section title="Work Experiences" className="order-6 lg:order-none print:order-none">
          <Expriences experiences={experiences} />
        </Section>
      </Column>
    </Layout>
  )
}

export default App;
