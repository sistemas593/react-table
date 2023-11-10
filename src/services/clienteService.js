import clientesApi from "../apis/clientesApi";

const BASE_URL = 'https://polished-engine-404500.rj.r.appspot.com/api/v1.0/clientes/ABCD';


export const findAllPages = async (page = 0) => {
    try {
        const response = await clientesApi.get(`${BASE_URL}?page=${page}&size=3&filter=`);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const save = async ({ cliente, numeroIdentificacion }) => {
    try {
        return await clientesApi.post(BASE_URL, {
            cliente,
            numeroIdentificacion,
        });
    } catch (error) {
        throw error;
    }
}

export const update = async({ id, cliente, numeroIdentificacion }) => {
    try {
        return await clientesApi.put(`${BASE_URL}/${id}`, {
            cliente,
            numeroIdentificacion,
        });
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        await clientesApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}