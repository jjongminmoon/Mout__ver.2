import axios from "axios";

const url = `${import.meta.env.VITE_MOUT_API_KEY}/request`;

export const getProducts = async () => {
  const response = await axios.get(url);

  return response.data;
};
