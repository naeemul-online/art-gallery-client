import { useLoaderData } from "react-router-dom";
import MyArtAndCraftCard from "./MyArtAndCraftCard";


const MyArtAndCraftList = () => {

    const loadedMyArtGallery = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl">My Art and craft list length: {loadedMyArtGallery.length}</h2>
            <div className="w-2/3 mx-auto grid lg:grid-cols-3 gap-4">
            {
                loadedMyArtGallery.map(data => <MyArtAndCraftCard key={data._id} myCraftCard = {data}></MyArtAndCraftCard>)
            }
            </div>
        </div>
    );
};

export default MyArtAndCraftList;