import Hero from "../Components/Header/Hero";
import TabCategory from "../Components/TabCategory/TabCategory";

const Home = () => {
  return (
    <div>
      <header className="lg:max-w-10/12 mx-auto lg:py-5">
        <Hero />
      </header>
      <main className="lg:max-w-10/12 mx-auto lg:py-5">
        <TabCategory />
      </main>
    </div>
  );
};

export default Home;
