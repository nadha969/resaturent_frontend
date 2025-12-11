import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { addmenuAPI } from '../Services/allAPI'

function Add() {

  const [foodDetails, setfoodDetails] = useState({ itemName: "",itemImage: "",category: "",price: "" })

  const [preview, setPreview] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmC3sLJeXtH4IeRNpKytSZxoIFGWEmsLmP9Q&s")

  const [imgFileStatus, setimgFileStatus] = useState(false)

  useEffect(() => {
    if (
      foodDetails.itemImage &&
      (foodDetails.itemImage.type == "image/png" ||
        foodDetails.itemImage.type == "image/jpeg" ||
        foodDetails.itemImage.type == "image/jpg")
    ) {
      setimgFileStatus(false)
      setPreview(URL.createObjectURL(foodDetails.itemImage))
    } else if (foodDetails.itemImage !== "") {
      setPreview(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmC3sLJeXtH4IeRNpKytSZxoIFGWEmsLmP9Q&s"
      )
      setimgFileStatus(true)
      setfoodDetails({ ...foodDetails, itemImage: "" })
    }
  }, [foodDetails.itemImage])


  const handleUpload = async () => {

    const { itemName, itemImage, category, price } = foodDetails

    if (itemName && itemImage && category && price) {

      const reqBody = new FormData()
      reqBody.append("itemName", itemName)
      reqBody.append("itemImage", itemImage)
      reqBody.append("category", category)
      reqBody.append("price", price)

      const token = sessionStorage.getItem("token")

      if (token) {
        const reqHeader = {
          "content-type": "multipart/form-data",
          "authorization": `Bearer ${token}`
        }

        try {
          const result = await addmenuAPI(reqBody, reqHeader)
          console.log(result);
          

          if (result.status == 200) {
            toast.success("Item added successfully!")

            // Reset form
            setfoodDetails({
              itemName: "",
              itemImage: "",
              category: "",
              price: ""
            })
            setPreview(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmC3sLJeXtH4IeRNpKytSZxoIFGWEmsLmP9Q&s"
            )
          } 
          else {
            toast.error(result.response.data)
          }

        } catch (err) {
          console.log(err)
        }
      }
    } 
    else {
      toast.warning("Please fill all fields!")
    }
  }



  return (
    <div className='rows d-flex'>
      <div className='col-lg-3'><Sidebar /></div>

      <div className='container col-lg-8 shadow w-50 mt-5 mb-5 ps-5 pt-3'>
        <h3 className='text-center m2-4' style={{ fontFamily: "Libartinus Mono" }}>
          Add Items
        </h3>

        <h6>Upload Image</h6>
        <label>
          <img src={preview} width={100} alt="preview" />
          <input
            onChange={(e) =>
              setfoodDetails({ ...foodDetails, itemImage: e.target.files[0] })
            }
            type="file"
            style={{ display: "none" }}
          />
          {imgFileStatus && <p>*Upload image (jpg/jpeg/png)</p>}
        </label>

        <hr />

        <h6>Food Title</h6>
        <input
          value={foodDetails.itemName}
          onChange={(e) =>
            setfoodDetails({ ...foodDetails, itemName: e.target.value })
          }
          type="text"
          placeholder='Enter Food Name'
          className='form-control w-50'
        />

        <hr />
        <h6>Food Category</h6>
        <select
          value={foodDetails.category}
          onChange={(e) =>
            setfoodDetails({ ...foodDetails, category: e.target.value })
          }
          style={{  width: "50%",    padding: "12px 15px",    border: "2px solid #d8e6d8", borderRadius: "12px",outline: "none",    backgroundColor: "#fff",     fontSize: "15px",color: "#555",  cursor: "pointer" }}   >
          <option value="" hidden>Choose Category</option>
          <option value="Starters">Starters</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Bread Items">Bread items</option>
          <option value="Drinks">Drinks</option>
          <option value="Desserts">Desserts</option>
        </select>

        <hr />

        <h6>Price</h6>
        <input
          value={foodDetails.price}
          onChange={(e) =>
            setfoodDetails({ ...foodDetails, price: e.target.value })
          }
          type="number"
          placeholder='Enter Price'
          className='form-control w-50'
        />

        <Button className='mt-3 btn-dark px-4 fw-bold mb-3' onClick={handleUpload}>
          Add
        </Button>
      </div>
    </div>
  )
}

export default Add
