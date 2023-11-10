import usersApi from "../apis/usersApi";

const BASE_URL = '';

export const findAllPages = async (page = 0, sort = '', filter = '') => {
    try {
        const response = await usersApi.get(`${BASE_URL}?page=${page}&size=3&sort=${sort}&filter=${filter}`);        
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const save = async ({ username, email, password, admin }) => {
    try {
        return await usersApi.post(BASE_URL, {
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
        return await usersApi.put(`${BASE_URL}/${id}`, {
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
        await usersApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}