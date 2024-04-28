import { useEffect, useState } from "react";



const AllArtAndCraftItems = () => {

    const [item, setItem] = useState([])



    useEffect(()=> {
        fetch("http://localhost:5000/allArtAndCraftItem/")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setItem(data)
        })
    }, [item])
    // console.log(item)
    return (
        <div>
            <h2 className="text-3xl">All art and craft items length is: {item.length}</h2>

            {
                item.map(p => <div key={p._id}>

                    <h2>Hello Crafts: {p.itemName}</h2>
                </div>)
            }
        </div>
    );
};

export default AllArtAndCraftItems;