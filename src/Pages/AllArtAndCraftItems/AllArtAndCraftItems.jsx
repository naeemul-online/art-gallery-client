import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllArtAndCraftItems = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allArtAndCraftItem/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setItem(data);
      });
  }, [item]);
  // console.log(item)
  return (
    <div>
      <h2 className="text-3xl">
        All art and craft items length is: {item.length}
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {item.map((p) => (
          <div key={p._id} className="card p-4 border">
            <h2>name: {p.name}</h2>
            <h2>email: {p.email}</h2>
            <Link to={`/allCraftViewDetails/${p._id}`}><button className="btn">View Details</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArtAndCraftItems;
