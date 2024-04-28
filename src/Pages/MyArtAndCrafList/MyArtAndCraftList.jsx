import { useEffect, useState } from "react";
import useAuth from "../../Hook/UseAuth";
import { Link } from "react-router-dom";

const MyArtAndCraftList = () => {
    const [item, setItem] = useState([]);

    const {user} = useAuth()
    // console.log(user.email)

    useEffect(()=> {
        fetch(`http://localhost:5000/myArtAndCraft/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setItem(data)
        })
    }, [user])
  return (
    <div>
      <h2 className="text-3xl">My Art and craft list length:</h2>
      <div className="w-2/3 mx-auto grid lg:grid-cols-3 gap-4">

        {
            item.map(p => <div key={p._id} className=" card border p-4">
                <h2>{p.itemName}</h2>
                <h2>{p.email}</h2>
                <p>{p.price}</p>
                <Link to={`/my-art-craft-list/${p._id}`} className="btn"><button>Update</button></Link>
                <button className="btn mt-2">Delete</button>
            </div>)
        }

      </div>
    </div>
  );
};

export default MyArtAndCraftList;
