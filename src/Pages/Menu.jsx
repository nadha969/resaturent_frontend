import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { displaymenuAPI } from "../Services/allAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { toast } from "react-toastify";

function Menu() {
  const [menuList, setMenuList] = useState([]);
  const [categories, setCategories] = useState(["All","Starters","Fast Food","Bread Items","Drinks","Desserts"  ]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    handleDisplay();
  }, []);

  const handleDisplay = async () => {
    try {
      const result = await displaymenuAPI();
      if (result.status === 200) {
        setMenuList(result.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Filtering logic
  const filteredMenu = menuList.filter((item) => {
    const matchCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchSearch =
      item.itemName?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      <Header />
      <div className="text-center my-4">
        <h1 style={{ fontFamily: "Dancing Script", color: "green" }}>
          Explore the Menu
        </h1>

        {/* Search */}
        <div className="container d-flex gap-2 justify-content-center mb-3">
          <input
            type="text"
            placeholder="Search by Dish Name"
            className="form-control w-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

    
        <div className="container mb-4 d-flex justify-content-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn ${
                activeCategory === cat
                  ? "btn-success text-white"
                  : "btn-outline-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="container">
        <h3 style={{ fontFamily: "Libartinus Mono" }}>Top Dishes</h3>

        <div className="row d-flex mt-3">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((menu, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                <div
                  className="card shadow"
                  style={{ borderRadius: "10px", height: "20rem" }}
                >
                  <img
                    src={`http://localhost:3000/uploads/${menu.itemImage}`}
                    className="card-img-top"
                    alt={menu.itemName}
                    height={200}
                    style={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px"
                    }}
                  />

                  <div className="card-body text-center">
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontFamily: "Barlow" }}
                    >
                      <h5>{menu.itemName}</h5>
                      <h5>₹{menu.price}</h5>
                    </div>

                    <div style={{ fontSize: 12, color: "#666" }}>
                      {menu.category}
                    </div>

                   
                    <button
                      onClick={() => {
                        dispatch(addToCart(menu));
                        toast.success(`${menu.itemName} added to plate!`);
                      }}
                      className="btn text-light mt-2"
                      style={{
                        backgroundColor: "green",
                        fontWeight: "bold"
                      }}
                    >
                      Add to Plate
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-5">No items found</div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Menu;
