import { useEffect, useState } from 'react';
import image from '../assets/background.jpg';
import image2 from '../assets/background2.jpg';
import image3 from '../assets/background3.jpg';
import useStore from '../Store/ClientStore';
import { RegisterUser } from '../Store/useUser';


function Register() {
    const {mutate : createNewUser , isError , isLoading , isSuccess , error} = RegisterUser();

    const [background, setBackground] = useState();
    useEffect(() => {
        const images = [image, image2, image3];
        setBackground(images[Math.floor(Math.random() * 3)]);
    } , []);


    const [first_name , setFirstName] = useState('');
    const [last_name , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirm_password , setConfirmPassword] = useState('');

    function handleSignUp(){
        const data = {
            first_name : first_name,
            last_name : last_name,
        }
        createNewUser(data);
    }


    const bears = useStore((state) => state.bears);










    return (
        <div>

            <div class="bg-white dark:bg-gray-900">
                <div class="flex justify-center h-screen">

                    <div class="flex items-center w-full max-w-3/4 px-6 mx-auto lg:w-2/3">
                        <div class="flex-1">
                            <div class="text-center">
                                <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

                                <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                            </div>

                            <div class="mt-8">
                                {JSON.stringify(bears)}

                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <label for="First Name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">First Name</label>
                                            <input onChange={(e) => {setFirstName(e.target.value)}} type="text" placeholder="First Name" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>
                                        <div>
                                            <label for="Last Name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Last Name</label>
                                            <input onChange={(e) => {setLastName(e.target.value)}} type="text" placeholder="Last Name" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>
                                        <div>
                                            <label for="Email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Email</label>
                                            <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>
                                        <div>
                                            <label for="Password" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Password</label>
                                            <input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>
                                        <div>
                                            <label for="Confirm Password" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Confirm Password</label>
                                            <input onChange={(e) => {setConfirmPassword(e.target.value)}} type="password" placeholder="Confirm Password" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>
                                        <div>
                                            <label for="phone Number" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Phone Number</label>
                                            <input type="text" placeholder="Phone Number" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => {handleSignUp()}} className='w-[96%] bg-primary py-2 text-white font-bold mt-5'>Sign Up</button>
                                    </div>
                                
                                <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" class="text-primary focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                            </div>
                        </div>
                    </div>
                    <div class="hidden bg-cover lg:block lg:w-1/3" style={{ backgroundImage: "url(" + background + ")" }}>
                        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h1 class="text-3xl font-black text-white dark:text-white text-left md:text-2xl">THE ULTIMATE GAME TRADING MARKETPLACE IN TUNISIA</h1>


                                <p class="max-w-xl mt-3 text-gray-300">Trade, Buy and Sell with other gamers, saving you money whilst adding value to second hand games.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Register;