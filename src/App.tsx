import { QueryClient, QueryClientProvider } from 'react-query'

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

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout className="flex flex-col print:flex-row lg:flex-row">
        <Column className="w-full print:w-1/3 lg:w-1/3 grow shrink-0 flex flex-col gap-y-8 p-4 print:bg-zinc-100 lg:bg-zinc-100">
          <Section className="text-center">
            <Picture objective={objective} />
            <Biography className="print:hidden" objective={objective} />
          </Section>
          <Section>
            <Contacts contacts={contacts} profiles={profiles} objective={objective} />
          </Section>
          <Section title="Projects">
            <Projects projects={projects} />
          </Section>
        </Column>
        <Column className="grow flex flex-col gap-y-8 p-4 bg-white">
          <Section className="hidden print:block lg:block">
            <Biography objective={objective} />
          </Section>
          <Section title="Skills">
            <Skills skills={skills} />
          </Section>
          <Section title="Work Experiences">
            <Expriences experiences={experiences} />
          </Section>
        </Column>
      </Layout>
    </QueryClientProvider>
  )
}

export default App;
