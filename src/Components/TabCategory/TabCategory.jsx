import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCategory = () => {
  return (
    <div className="mt-10">
      <header>
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Browse Jobs By Categories
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
          There categories available for the time being. they are Web
          Development, Graphic Design and Digital Marketing
        </p>
      </header>

      <main>
        <Tabs>
          <div className="flex justify-center font-semibold">
            <TabList>
              <Tab>Web Development</Tab>
              <Tab>Graphic Design</Tab>
              <Tab>Digital Marketing</Tab>
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
        </Tabs>
      </main>
    </div>
  );
};

export default TabCategory;
