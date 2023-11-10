import axios from "axios";

const clientesApi = axios.create({
  baseURL: `https://polished-engine-404500.rj.r.appspot.com/api/v1.0/clientes/ABCD`,
});

export default clientesApi;
