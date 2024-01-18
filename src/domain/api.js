import axios from 'axios';


const url = "http://localhost:3000/password";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (password) => {
    return await axios.post(url,password);
}

export const editUser = async (id, password) => {
    return await axios.put(`${url}/${id}`,password);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}