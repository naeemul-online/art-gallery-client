import { useEffect, useState } from "react";
import useAuth from "../../Hook/UseAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtAndCraftList = () => {
  const [item, setItem] = useState([]);

  const { user } = useAuth();
  // console.log(user.email)

  useEffect(() => {
    fetch(`http://localhost:5000/myArtAndCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setItem(data);
      });
  }, [user, item]);

  // handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((data) => {
      if (data?.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>

      <div className="text-center mt-2 mb-32">
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Landscape Painting
        </option>
        <option>Portrait Drawing</option>
        <option>Watercolor Painting</option>
        <option>Oil Painting</option>
        <option>Charcoal Painting</option>
        <option>Cartoon Drawing</option>
      </select>
      </div>

      <div className="w-2/3 mx-auto my-4 grid lg:grid-cols-3 gap-4">
        {item.map((p) => (
          <div key={p._id} className=" card border p-4">
            <h2>{p.itemName}</h2>
            <h2>{p.email}</h2>
            <p>{p.price}</p>
            <Link to={`/my-art-craft-list/${p._id}`} className="btn">
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(p._id)} className="btn mt-2">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
