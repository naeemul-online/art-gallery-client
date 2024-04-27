import toast from "react-hot-toast";


const AddCraftItem = () => {

    const handleAddCraftItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const itemName = form.item_name.value;
        const subcategoryName = form.subcategory_name.value;
        const shortDescription = form.short_description.value;
        const  price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processing_time.value;
        const  stockStatus = form.stock_status.value;
        const  userEmail = form.user_email.value;
        const  userName = form.user_name.value;

        const artGallery = {
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
            userName
        }       

        console.log(artGallery)

        // send data to the server
    fetch("http://localhost:5000/artGallery", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(artGallery)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.insertedId){
            // alert('Coffee added successfully')
            // Swal.fire({
            //   title: 'Success!',
            //   text: 'User added successfully',
            //   icon: 'success',
            //   confirmButtonText: 'OK'
            // })
            toast.success("Craft item added Successfully")
            form.reset();
          }
      })



    }
    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
        <form onSubmit={handleAddCraftItem} >
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Image URL</label>
                <input type="text" id="image" name="image" className="w-full border rounded-md  border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"  required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Item Name</label>
                <input type="text" id="item_name" name="item_name" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Subcategory Name</label>
                <input type="text" id="subcategory_name" name="subcategory_name" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Short Description</label>
                <textarea id="short_description" name="short_description" rows="3" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" required></textarea>
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Price</label>
                <input type="number" id="price" name="price" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"  required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Rating</label>
                <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Customization</label>
                <select id="customization" name="customization" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"required>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Processing Time</label>
                <input type="text" id="processing_time" name="processing_time" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Stock Status</label>
                <select id="stock_status" name="stock_status" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"  required>
                    <option value="in_stock">In Stock</option>
                    <option value="made_to_order">Made to Order</option>
                </select>
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">User Email</label>
                <input type="email" id="user_email" name="user_email" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">User Name</label>
                <input type="text" id="user_name" name="user_name" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"  required />
            </div>
            <button type="submit" className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600">Add</button>
        </form>
    </div>
    );
};

export default AddCraftItem;