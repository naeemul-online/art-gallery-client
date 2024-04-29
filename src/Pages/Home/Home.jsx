import { useEffect, useState } from "react";
// import CraftItemsSections from "../../Components/CraftItemsSection/CraftItemsSections";
import Slider from "../../Slider/Slider";
import { Link } from "react-router-dom";

const Home = () => {
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);

  // fetch data from server for craft item section
  useEffect(() => {
    fetch("http://localhost:5000/allArtAndCraftItem/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setItem(data);
      });
  }, [item]);
  // console.log(item)

  // fetch data from server for category item section
  useEffect(() => {
    fetch("http://localhost:5000/categoryItem/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCategory(data);
      });
  }, []);

  return (
    <div className="">
      <Slider></Slider>
      <div className="my-16">
        <h2 className="lg:text-6xl text-3xl font-bold text-center playfair-display ">
          Craft Items Section
        </h2>
      </div>
      {/* <div className="grid md:grid-cols-3 gap-8 my-8 px-4 w-3/4 mx-auto">
        <CraftItemsSections></CraftItemsSections>
        <CraftItemsSections></CraftItemsSections>
        <CraftItemsSections></CraftItemsSections>
        <CraftItemsSections></CraftItemsSections>
        <CraftItemsSections></CraftItemsSections>
        <CraftItemsSections></CraftItemsSections>
      </div> */}

      <div className="w-2/3 mx-auto mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-4 min-h-screen">
        {item.slice(0, 6).map((p) => (
          <div key={p._id} className=" card border p-4">
            <div className="max-w-xs  bg-white shadow-lg rounded-lg overflow-hidden m-4">
              <img
                className="w-full h-48 object-cover object-center"
                src={p.image}
                alt={p.itemName}
              />
              <div className="p-4">
                <h2 className="text-gray-800 text-lg font-semibold">
                  {p.itemName}
                </h2>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600">${p.price}</span>
                  <span className="text-gray-600">{p.rating} ⭐</span>
                </div>
                <div className="mt-4 flex justify-between">
                  <Link to={`/allCraftViewDetails/${p._id}`}>
                    <button className="text-sm text-blue-500 focus:outline-none mr-2">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-16">
        <h2 className="lg:text-6xl text-3xl font-bold text-center playfair-display my-16 ">
          Art and Craft Category Section
        </h2>

        <div className="w-2/3 mx-auto  grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {category.map((p) => (
            <div key={p._id}>
              <div className="max-w-xs  bg-white shadow-lg rounded-lg overflow-hidden m-4">
                <img
                  className="w-full h-48 object-cover object-center"
                  src={p.image}
                  alt={p.origins}
                />
                <div className="p-4 text-center">
                  <h2 className="text-gray-800">
                    {p.origins}
                  </h2>
                  <h2 className="text-gray-800 text-lg font-bold">
                    {p.subcategoryName}
                  </h2>
                  <h2 className="text-gray-800">
                    <q>{p.key_elements}</q>                    
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <h2 className="lg:text-6xl text-3xl font-bold text-center  playfair-display">
          The Art Gallery of San Francisco
        </h2>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/revslider/pirouette-3/Abstractart-3.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">San Francisco</h1>
              <p className="py-6 poppins-regular">
                Man face fruit divided seasons herb from herb moveth whose.
                Dominion gathered winged morning, man won’t had fly beginning.
                Winged have saying behold morning greater void shall created
                whose blessed herb light fruitful open void without itself
                whales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="lg:text-6xl text-3xl font-bold text-center playfair-display ">
          Events & Programs
        </h2>
        <div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/girlbytheriver-1.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">
                  Rojo Y Negro - Latin American Art
                </h1>
                <p className="py-6 poppins-regular">
                  Have moving, let our divided itself. Replenish don’t,
                  creeping. The moved green two them is, was together firmament.
                  Beginning from grass blessed subdue rule you’re. Forth our
                  were hath to created the years. <br />
                  Were a years two firmament. Seasons had. Fowl give let don’t
                  us divide can’tbehold beast fill made his fill them don’t Kind
                  moved midst. Fly creature be greater Without had place and
                  bearing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
