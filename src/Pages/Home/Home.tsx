import Hero from '../../Components/Hero/Hero';

const Home = () => {

  return (
    <div className="dark-mode">
      <Hero />
      <div className="relative flex flex-row py-5 pr-2 items-center w-2/3">
        <div className="basis-1/6 border-t-2 border-light-grey"></div>
        <span className="flex-shrink mx-8 text-white text-left font-header text-4xl">shop</span>
        <div className="basis-5/6 border-t-2 border-light-grey"></div>
      </div>
    </div>
  );
}
  
export default Home;