import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updatemenuAPI } from '../Services/allAPI';
import SERVER_URL from '../Services/server_url';
import { toast } from 'react-toastify';

function Edit({ menu ,onUpdateSuccess}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setfoodDetails({
      itemName: menu?.itemName,
      category: menu?.category,
      price: menu?.price,
      itemImage: ""   // reset image for new upload
    });
    setPreview("");  
    setShow(true);
  };

  const [foodDetails, setfoodDetails] = useState({
    itemName: menu?.itemName,
    category: menu?.category,
    price: menu?.price,
    itemImage: menu?.itemImage
  });

  const [preview, setPreview] = useState("");
  const [imgFileStatus, setImgFileStatus] = useState(false);

  // -------------------------
  // IMAGE PREVIEW HANDLER
  // -------------------------
  useEffect(() => {
    if (foodDetails.itemImage instanceof File) {
      setImgFileStatus(true);
      setPreview(URL.createObjectURL(foodDetails.itemImage));
    } else {
      setImgFileStatus(false);
      setPreview("");
    }
  }, [foodDetails.itemImage]);


  // -------------------------
  // UPDATE HANDLER
  // -------------------------
  const handleUpdate = async () => {
    const { itemName, itemImage, category, price } = foodDetails;

    if (!itemName || !category || !price) {
      return toast.warning("Enter all fields completely");
    }

    const reqBody = new FormData();
    reqBody.append("itemName", itemName);
    reqBody.append("category", category);
    reqBody.append("price", price);

    // if user uploaded new image
    if (itemImage instanceof File) {
      reqBody.append("itemImage", itemImage);
    }

    const token = sessionStorage.getItem("token");

    const reqHeader = {
      "authorization": `Bearer ${token}`
    };

    try {
      const result = await updatemenuAPI(menu?._id, reqBody, reqHeader);

      if (result.status === 200) {
        toast.success("Menu updated successfully");
        onUpdateSuccess()
        handleClose();
      }
    } catch (err) {
      console.log(err);
      toast.error("Update Failed");
    }
  };

  return (
    <>
      <button className='btn text-info' onClick={handleShow}>
        <i className="fa-solid fa-pen-to-square" />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the Food Items</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          {/* IMAGE UPLOAD */}
          <label>
            <img 
              src={
                preview 
                  ? preview 
                  : `${SERVER_URL}/uploads/${menu?.itemImage}`
              }
              width={100}
              alt="preview"
            />

            <input 
              type="file"
              style={{ display: "none" }}
              onChange={(e) =>
                setfoodDetails({
                  ...foodDetails,
                  itemImage: e.target.files[0]
                })
              }
            />
          </label>

          {imgFileStatus && (
            <p>*Upload image (jpg/jpeg/png only)</p>
          )}

          {/* TEXT INPUTS */}
          <input
            value={foodDetails?.itemName}
            onChange={(e) =>
              setfoodDetails({ ...foodDetails, itemName: e.target.value })
            }
            type="text"
            placeholder="Item Name"
            className="form-control mt-3"
          />

          <select
            value={foodDetails?.category}
            onChange={(e) =>
              setfoodDetails({ ...foodDetails, category: e.target.value })
            }
            className="form-control mt-3"
          >
            <option value="" hidden>Choose Category</option>
            <option value="Starters">Starters</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Bread Items">Bread Items</option>
            <option value="Drinks">Drinks</option>
            <option value="Desserts">Desserts</option>
          </select>

          <input
            value={foodDetails?.price}
            onChange={(e) =>
              setfoodDetails({ ...foodDetails, price: e.target.value })
            }
            type="number"
            placeholder="Price"
            className="form-control mt-3"
          />

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="dark" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
