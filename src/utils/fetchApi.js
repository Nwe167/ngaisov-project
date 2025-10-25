import axios from "axios";

const fetchAPI = async () => {
  const respone = await axios("https://friday-json.onrender.com/product");
  return respone.data;
};

export default fetchAPI;
