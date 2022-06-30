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