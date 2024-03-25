import objective from '@/database/objective';
import profiles from '@/database/profiles';
import contacts from '@/database/contacts';
import experiences from '@/database/experiences';
import skills from '@/database/skills';
import projects from '@/database/projects';
import edications from '@/database/edications';

import Section from '@/components/layout/Section';
import Biography from '@/components/sections/Biography';
import Expriences from '@/components/sections/Experiences';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Layout from './components/layout/Layout';
import Column from './components/layout/Column';
import Contacts from './components/sections/Contacts';
import Picture from './components/sections/Picture';
import Educations from './components/sections/Edications';

function App() {
  return (
    <Layout className="grid grid-cols-3 gap-4 p-0">
      <Column className="block col-span-1 space-y-8 p-6 bg-zinc-200">
        <Section className="order-none text-center">
          <Picture objective={objective} />
        </Section>
        <Section className="order-none text-start">
          <Biography objective={objective} />
        </Section>
        <Section className="order-none ">
          <Contacts contacts={contacts} profiles={profiles} objective={objective} />
        </Section>
        <Section title="سوابق تحصیلی" className="order-none">
          <Educations edications={edications} />
        </Section>
      </Column>
      <Column className="block col-span-2 space-y-8 p-6 bg-white">
      <Section title="توانایی‌ها" className="order-none">
          <Skills skills={skills} />
        </Section>
        <Section title="سوابق شغلی" className="order-none">
          <Expriences experiences={experiences} />
        </Section>
      </Column>
    </Layout>
  )
}

export default App;
