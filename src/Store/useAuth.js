import { useQuery, useMutation } from 'react-query';

function LoginMethod(user){

    return fetch("http://127.0.0.1:7000/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}



export const LoginUser = () => {
    return useMutation(LoginMethod , {
        onSuccess : (data) => {
            return data;
        }
    });
}