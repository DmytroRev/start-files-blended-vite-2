import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Section, Container } from 'components';
import { Photos } from 'tabs/Photos';
import { TodosList } from 'tabs/TodosList';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <Section>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Photos</Tab>
            <Tab>Todos</Tab>
          </TabList>

          <TabPanel>
            <Photos />
          </TabPanel>
          <TabPanel>
            <TodosList />
          </TabPanel>
        </Tabs>
      </Container>
      <Toaster />
    </Section>
  );
};
