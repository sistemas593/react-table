import proveedoresApi from "../apis/proveedoresApi";

const BASE_URL = '';

//no se usa
export const findAll = async() => {
    try {
        const response = await proveedoresApi.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const findAllPages = async (page = 0) => {
    try {
        const response = await usersApi.get(`${BASE_URL}?page=${page}&size=3&filter=`);
        
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const save = async ({ username, email, password, admin }) => {
    try {
        return await proveedoresApi.post(BASE_URL, {
            username,
            email,
            password,
            admin,
        });
    } catch (error) {
        throw error;
    }
}

export const update = async({ id, username, email, admin }) => {
    try {
        return await proveedoresApi.put(`${BASE_URL}/${id}`, {
            username,
            email,
            admin,
        });
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        await proveedoresApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}