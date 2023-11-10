import axios from "axios";

const proveedoresApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/proveedores`,
});

export default proveedoresApi;
