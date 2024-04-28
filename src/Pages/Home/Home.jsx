import CraftItemsSections from "../../Components/CraftItemsSection/CraftItemsSections";
import Slider from "../../Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <div className="my-16">
        <h2 className="lg:text-6xl text-3xl font-bold text-center ">Craft Items Section</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 my-8 px-4 w-3/4 mx-auto">
      <CraftItemsSections></CraftItemsSections>
      <CraftItemsSections></CraftItemsSections>
      <CraftItemsSections></CraftItemsSections>
      <CraftItemsSections></CraftItemsSections>
      <CraftItemsSections></CraftItemsSections>
      <CraftItemsSections></CraftItemsSections>
      </div>

      <div className="my-16">
        <h2 className="lg:text-6xl text-3xl font-bold text-center ">Art and Craft Category Section</h2>
      </div>

      <div className="my-16">
        <h2 className="lg:text-6xl text-3xl font-bold text-center ">Extra Section No - 1</h2>
      </div>

      <div className="my-16">
        <h2 className="lg:text-6xl text-3xl font-bold text-center ">Extra Section No - 2</h2>
      </div>

    </div>
  );
};

export default Home;
