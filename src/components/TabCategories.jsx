import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabCategories = () => {
    return (
        <Tabs>
      <div className='container px-6 py-10'>
      <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
          Browse Jobs By Categories
        </h1>

        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
      <div className='flex items-center justify-center'>
       <TabList>
          <Tab>Web Development</Tab>
          <Tab>Graphics Design</Tab>
          <Tab>Digital Markter</Tab>
        </TabList>
       </div>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </div>
      </Tabs>
    );
};

export default TabCategories;