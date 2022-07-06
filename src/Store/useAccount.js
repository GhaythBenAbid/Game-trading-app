import { useMutation } from "react-query";
import axios from "axios";

function CreateAccountMethod(data){
    return axios.post("http://127.0.0.1:7000/account" , data);
}


export const CreateAccount = () => {
    return useMutation(CreateAccountMethod , {
        onSuccess : (data) => {
            return data;
        }
    });
}