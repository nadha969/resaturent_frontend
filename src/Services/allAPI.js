import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

export const loginAPI=async(reqbody)=>{
   return await commonAPI("POST",`${SERVER_URL}/login`,reqbody)
}

export const addmenuAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-menu`,reqBody,reqHeader)
}

// list items
export const displaymenuAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/list-menu`,{})
}

// delete menu
export const deleteMenuAPI=async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/delete-menu/${id}`,{},reqHeader)
}

// update menu
export const updatemenuAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/update-menu/${id}`,reqBody,reqHeader)
}

// place order
export const placeOrderAPI = async (reqBody) => {
  const token = sessionStorage.getItem("token");

  const reqHeader = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };

  return await commonAPI("POST", `${SERVER_URL}/place-order`, reqBody, reqHeader);
};


// get order
export const getOrderAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/admin-orders`,{})
}

// getorderbyid
export const getCustomerOrdersAPI =async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/customer-orders`,{},reqHeader)
}

// search menu

export const searchMenuAPI = async (itemName) => {
  return await commonAPI("GET",`${SERVER_URL}/search-menu/search?key=${itemName}`);
}

// update status


export const updateOrderStatusAPI = async (orderId, status) => {
  return await commonAPI("PUT",`${SERVER_URL}/update-order-status/${orderId}`,{ status });
};

