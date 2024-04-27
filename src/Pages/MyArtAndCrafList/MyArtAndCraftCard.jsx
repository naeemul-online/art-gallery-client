const MyArtAndCraftCard = ({ myCraftCard }) => {
  console.log(myCraftCard);
  const {
    image,
    itemName,
    subcategoryName,
    shortDescription,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    userEmail,
    userName,
  } = myCraftCard;
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{itemName}</h2>
          <p>{shortDescription}</p>
          <div className="card-actions">
            <button className="btn btn-primary">{rating}</button>
            <button className="btn btn-primary">{price}</button>
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtAndCraftCard;
