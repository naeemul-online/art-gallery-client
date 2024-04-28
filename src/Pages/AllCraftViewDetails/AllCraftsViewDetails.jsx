import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllCraftsViewDetails = () => {
    const {id} = useParams();
    const [item, setItem] = useState({})

    useEffect(()=> {
        fetch(`http://localhost:5000/allCraftViewDetails/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setItem(data)
        })
    }, [id])

    console.log(item)
    return (
        <div className="text-2xl">
            <h2>Name: {item.name}</h2>
            <h2>Item Name: {item.itemName}</h2>
            <h2>Short Description: {item.shortDescription}</h2>
        </div>
    );
};

export default AllCraftsViewDetails;