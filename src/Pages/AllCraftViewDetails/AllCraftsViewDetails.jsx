import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllCraftsViewDetails = () => {
    const {id} = useParams();
    const [item, setItem] = useState({})

    useEffect(()=> {
        fetch(`https://a10-painting-drawing-server.vercel.app/allCraftViewDetails/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setItem(data)
        })
    }, [id])

    console.log(item)
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="w-full h-full object-cover md:w-48"
              src={item.image}
              alt={item.itemName}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {item.subcategoryName}
            </div>
            <h2 className="mt-2 text-xl font-semibold text-gray-800">
              {item.itemName}
            </h2>
            <p className="mt-2 text-gray-500">{item.shortDescription}</p>
            <div className="mt-4 flex justify-between">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="ml-1">{item.rating}</p>
              </div>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-gray-600">Customization: {item.customization}</p>
                <p className="text-gray-600">
                  Processing Time: {item.processingTime}
                </p>
              </div>
              <p
                className={`font-semibold ${
                  item.stockStatus === "In Stock" ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.stockStatus}
              </p>
            </div>
            <div className="mt-6">
              <p className="text-gray-600">Seller: {item.name}</p>
              <p className="text-gray-600">Contact: {item.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllCraftsViewDetails;