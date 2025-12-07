import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Table } from 'react-bootstrap'
import { deleteMenuAPI, displaymenuAPI } from '../Services/allAPI'
import { toast } from 'react-toastify'
import Edit from '../Components/Edit'

function List() {

  const [allmenu, setAllMenu] = useState([]);
  const [search, setSearch] = useState(""); // search state

  useEffect(() => {
    handleDisplay();
  }, []);

  const handleDisplay = async () => {
    try {
      const result = await displaymenuAPI();
      if (result.status === 200) {
        setAllMenu(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteMenu = async (id) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      };

      try {
        const result = await deleteMenuAPI(id, reqHeader);
        if (result.status === 200) {
          toast.success(`${result.data.itemName} successfully deleted`);
          handleDisplay();
        } else {
          toast.warning("Delete failed. Please try again.");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error deleting menu item");
      }
    }
  };

  return (
    <>
      <div className="rows d-flex">
        <div className="col-lg-3">
          <Sidebar />
        </div>

        <div className="col-lg-9 container">
          <h3 className="text-center mt-4" style={{ fontFamily: "Libartinus Mono" }}>
            Food List
          </h3>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by dish name..."
            className="form-control w-50 my-3 mx-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {allmenu.length > 0 ? (
                allmenu
                  .filter((menu) =>
                    menu.itemName.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((menu, index) => (
                    <tr key={menu._id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={`http://localhost:3000/uploads/${menu.itemImage}`}
                          width={50}
                          alt={menu.itemName}
                        />
                      </td>
                      <td>{menu.itemName}</td>
                      <td>{menu.category}</td>
                      <td>{menu.price}/-</td>
                      <td>
                        <Edit menu={menu} onUpdateSuccess={handleDisplay} />
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteMenu(menu._id)}
                          className="btn text-danger"
                        >
                          <i className="fa-solid fa-trash" />
                        </button>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-muted">
                    Menus are not added yet
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default List;
