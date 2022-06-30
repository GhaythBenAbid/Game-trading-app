import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import useStore from '../Store/ClientStore';
import image from '../assets/background.jpg';
import image2 from '../assets/background2.jpg';
import image3 from '../assets/background3.jpg';


function Login(){

    const [background, setBackground] = useState([image, image2, image3]);




    return (
        <div>
    <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage : "url("+ background[Math.floor(Math.random() * 3)] +")"}}>
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
          <h1 class="text-3xl font-black text-white dark:text-white text-left md:text-6xl">THE ULTIMATE GAME TRADING MARKETPLACE IN TUNISIA</h1>

                        
                        <p class="max-w-xl mt-3 text-gray-300">Trade, Buy and Sell with other gamers, saving you money whilst adding value to second hand games.</p>
                    </div>
                </div>
            </div>
            
            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>
                        
                        <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                    </div>

                    <div class="mt-8">
                        <form>
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <button
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary   focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>

                        </form>

                        <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link to="/register"><a href="#" class="text-primary focus:outline-none focus:underline hover:underline">Sign up</a></Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );

}


export default Login;