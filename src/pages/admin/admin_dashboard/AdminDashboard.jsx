
import React, { useState } from "react";
import { createProductApi } from "../../../apis/Api";
import { toast } from "react-toastify";
 
const AdminDashboard = () => {
  // State for  input fields
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
 
  // State for image file
  const [productImage, setProductImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
 
  // Image Upload Handler
  const handleImage = (event) => {
    const file = event.target.files[0];
    setProductImage(file); // For storing the file in Backend
    setPreviewImage(URL.createObjectURL(file)); // For previewing the image
  };
 
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // make a form data (text, files)
    const formData = new FormData()
    formData.append('productName', productName) 
    formData.append('productPrice', productPrice) 
    formData.append('productCategory', productCategory) 
    formData.append('productDescription', productDescription) 
    formData.append('productImage', productImage) 

    // Make a api call
    createProductApi(formData).then((res) => {
      if(res.data.success === false) {
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
      }
    })

  };
 
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between">
        <h3>Admin Dashboard</h3>
 
        <button
          type="button"
          class="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Product
        </button>
 
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Create a new product
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="">
                  <label>Product Name </label>
                  <input
                    onChange={(e) => setProductName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Name"
                  />
 
                  <label className="mt-2">Product Price </label>
                  <input
                    onChange={(e) => setProductPrice(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder="Enter Product Price"
                  />
 
                  <label className="mt-2">Choose Product Category</label>
                  <select
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="form-control"
                  >
                    <option value="plants">Plants</option>
                    <option value="electronics">Electronics</option>
                    <option value="gadgets">Gadgets</option>
                    <option value="furniture">Furniture</option>
                  </select>
 
                  <label className="mt-2">Enter Description</label>
                  <textarea
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="form-control"
                  ></textarea>
 
                  <label className="mt-2">Upload Product Image</label>
                  <input
                    onChange={handleImage}
                    type="file"
                    className="form-control"
                  />
 
                  {/** Image Preview */}
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="preview image"
                      className="img-fluid rounded mt-2"
                    />
                  )}
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleSubmit}
                  type="button"
                  class="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <table className="table mt-2">
        <thead className="table-dark">
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                width={"40px"}
                height={"40px"}
                src="https://i.pinimg.com/originals/b4/02/6a/b4026a9fed083cc40ea891c21f1bdd09.jpg"
                alt=" "
              />
            </td>
            <td>Flower</td>
            <td>200</td>
            <td>Indoor</td>
            <td>Beautiful Flower</td>
            <td>
              <button className="btn btn-primary"> Edit</button>
              <button className="btn btn-danger ms-2"> Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
 
export default AdminDashboard;
 