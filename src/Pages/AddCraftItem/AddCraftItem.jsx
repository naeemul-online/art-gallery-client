import Swal from "sweetalert2";
import useAuth from "../../Hook/UseAuth";
// import toast from "react-hot-toast";

const AddCraftItem = () => {
  const { user } = useAuth();
  // console.log(user)

  const handleAddCraftItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const itemName = form.item_name.value;
    const subcategoryName = form.subcategory_name.value;
    const shortDescription = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processing_time.value;
    const stockStatus = form.stock_status.value;
    const email = user.email;
    const name = user.displayName;

    const newCraftInfo = {
      image,
      itemName,
      subcategoryName,
      shortDescription,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      email,
      name,
    };

    console.log(newCraftInfo);

    // send data to the server
    fetch("https://a10-painting-drawing-server.vercel.app/addCraftItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraftInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
      <form onSubmit={handleAddCraftItem}>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="w-full border rounded-md  border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Item Name
          </label>
          <input
            type="text"
            id="item_name"
            name="item_name"
            className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Subcategory Name
          </label>
          <select
            id="subcategory_name"
            name="subcategory_name"
            className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          >
            <option>Landscape Painting</option>
            <option>Portrait Drawing</option>
            <option>Watercolor Painting</option>
            <option>Oil Painting</option>
            <option>CharCoal Painting</option>
            <option>Cartoon Painting</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Short Description
          </label>
          <textarea
            id="short_description"
            name="short_description"
            rows="3"
            className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Price
          </label>
          <input
            type="text/number"
            id="price"
            name="price"
            className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Customization
          </label>
          <select
            id="customization"
            name="customization"
            className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Processing Time
          </label>
          <input
            type="text"
            id="processing_time"
            name="processing_time"
            className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Stock Status
          </label>
          <select
            id="stock_status"
            name="stock_status"
            className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          >
            <option value="in_stock">In Stock</option>
            <option value="made_to_order">Made to Order</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            User Email
          </label>
          <input
            defaultValue={user.email}
            type="email"
            id="user_email"
            name="user_email"
            readOnly
            className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            User Name
          </label>
          <input
            defaultValue={user.displayName}
            readOnly
            type="text"
            id="user_name"
            name="user_name"
            className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white font-semibold px-4 py-2 w-full rounded-md hover:bg-indigo-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddCraftItem;
