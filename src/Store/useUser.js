import axios from 'axios';
import { useQuery, useMutation } from 'react-query';

function registerUser(user){

    return fetch("http://127.0.0.1:7000/user", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const RegisterUser = () => {
    return useMutation(registerUser);
}



export const GetUser = (id) => {
    return useQuery("getUser", async () => {
        return await axios.get(`http://127.0.0.1:7000/user/${id}`).then(res => res.data);
    });
}

export const UpdateUser = () => {
    return useMutation(async (data) => {
        return await axios.put(`http://127.0.0.1:7000/user/${data.id}`, data).then(res => res.data);
    });
}
