import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraftItem = () => {
    const {id} = useParams();

    const [craft, setCraft] = useState({})
    // console.log(craft)
    



    useEffect(() => {
        fetch(`http://localhost:5000/singleCraft/${id}`)
        .then(res => res.json())
        .then(data => {
            setCraft(data)
            // console.log(data)
        })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault()
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

        const newCraftInfo = {
            image,
            itemName,
            subcategoryName,
            shortDescription,
            price,
            rating,
            customization,
            processingTime,
            stockStatus
        }       

        console.log(newCraftInfo)

        fetch(`http://localhost:5000/updateCraft/${id}`, {
            method: "PUT",
            headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCraftInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data?.modifiedCount){
                Swal.fire({
                  title: 'Success!',
                  text: 'Updated successfully',
                  icon: 'success',
                  confirmButtonText: 'OK'
                })
              } else {
                Swal.fire({
                    title: 'Success!',
                    text: 'Already Updated',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
              }
            
        })       
        
    }
   


    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
        <form onSubmit={handleUpdate}>
            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Image URL</label>
                <input defaultValue={craft.image} type="text" id="image" name="image" className="w-full border rounded-md  border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"   />
            </div>

            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Item Name</label>
                <input defaultValue={craft.itemName} type="text" id="item_name" name="item_name" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"  />
            </div>

            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Subcategory Name</label>
                <input defaultValue={craft.subcategoryName} type="text" id="subcategory_name" name="subcategory_name" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"  />
            </div>

            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Short Description</label>
                <textarea defaultValue={craft.shortDescription} id="short_description" name="short_description" rows="3" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" ></textarea>
            </div>

            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Price</label>
                <input defaultValue={craft.price} type="number" id="price" name="price" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"   />
            </div>

            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Rating</label>
                <input defaultValue={craft.rating} type="number" id="rating" name="rating" min="0" max="5" step="0.1" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"  />
            </div>

            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Customization</label>
                <select id="customization" name="customization" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Processing Time</label>
                <input defaultValue={craft.processingTime} type="text" id="processing_time" name="processing_time" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
            </div>

            <div className="mb-4">
                <label  className="block text-gray-600 font-semibold mb-2">Stock Status</label>
                <select id="stock_status" name="stock_status" className="w-full border rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"  required>
                    <option value="in_stock">In Stock</option>
                    <option value="made_to_order">Made to Order</option>
                </select>
            </div>
            <button type="submit" className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600">Update Button</button>
        </form>
    </div>
    );
};

export default UpdateCraftItem;