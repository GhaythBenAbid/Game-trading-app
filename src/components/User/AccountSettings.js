import { useEffect, useState } from "react";
import useStore from "../../Store/ClientStore";
import { GetUser, UpdateUser } from "../../Store/useUser";
import SideBar from "../SideBar/sidebar";

function AccountSettings() {

    const user = useStore((state) => state.user.user);
    
    const selectedUser = GetUser(user.id);
    const {mutate:updateUser} = UpdateUser();

    
    const [first_name , setFirstName] = useState('');
    const [last_name , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirm_password , setConfirmPassword] = useState('');

    useEffect(() => {
        if(selectedUser.data){
            setFirstName(selectedUser.data.first_name);
            setLastName(selectedUser.data.last_name);
            setEmail(selectedUser.data.email);
        }
    } , [selectedUser.data]);


    function handleUpdateAccount(){
        //update user then get user data again to update the state
        updateUser({
            first_name : first_name,
            last_name : last_name,
            email : email,
            id : selectedUser.data.id,
        } , {
            onSuccess : () => {
                selectedUser.refetch();
            }
        })
        


        
        
    }

    return (
        <div className="flex">
            <SideBar />

            <section class="w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white mb-5">Account settings</h2>
            {JSON.stringify(selectedUser.data)}

                <div className='grid grid-cols-2'>
                    <div>
                        <label for="First Name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">First Name</label>
                        <input onChange={(e) => { setFirstName(e.target.value) }} value={first_name} type="text" placeholder="First Name" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label for="Last Name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Last Name</label>
                        <input onChange={(e) => { setLastName(e.target.value) }} value={last_name} type="text" placeholder="Last Name" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label for="Email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Email</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" placeholder="Email" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label for="Password" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Password</label>
                        <input onChange={(e) => { setPassword(e.target.value) }} disabled type="password" placeholder="Password" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    
                    <div>
                        <label for="phone Number" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Phone Number</label>
                        <input type="text" placeholder="Phone Number" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div class="flex justify-end mt-6">
                    <button onClick={() => {handleUpdateAccount()}} class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </section>
        </div>
    )

}

export default AccountSettings;