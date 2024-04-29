import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllArtAndCraftItems = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://a10-painting-drawing-server.vercel.app/allArtAndCraftItem/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setItem(data);
      });
  }, [item]);
  // console.log(item)
  return (
      <div className="w-2/3 mx-auto my-4 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {item.map((p) => (
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
                   <Link to={`/allCraftViewDetails/${p._id}`}><button className="text-sm text-blue-500 focus:outline-none mr-2">View Details</button></Link>
                 </div>
               </div>
             </div>
           </div>
        ))}
      </div>
  );
};

export default AllArtAndCraftItems;
