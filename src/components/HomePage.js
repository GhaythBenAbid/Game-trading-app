import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as League_of_legends} from '../icons/leagueoflegends.svg'
import {ReactComponent as Valorant} from '../icons/valorant.svg'
import {ReactComponent as Fifa} from '../icons/fifa22.svg'
import {ReactComponent as Fortnite} from '../icons/fortnite.svg'
import {ReactComponent as FreeFire} from '../icons/freefire.svg'
import {ReactComponent as RainbowSixSiege} from '../icons/rainboxsixsiege.svg'
import useStore from '../Store/ClientStore';

function HomePage() {
    const dark = useStore((state) => state.dark);
    const toggleDarkMode = useStore((state) => state.toogleDarkMode);

    useEffect(() => {
        if(dark){
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }

    },[dark]);

    return (        
        <section class="bg-white dark:bg-gray-800">
            <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                <div class="flex items-center justify-between">
                    <div>
                        <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                    </div>

                    <div class="flex lg:hidden">
                        <button type="button"
                            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="flex flex-col items-center mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                    <a class="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-primary hover:text-secbg-secondary"
                        href="#">Home</a>

                    <Link class="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-primary hover:text-secbg-secondary"
                        to="/contact">Contact</Link>
                    
                </div>

                <Link class="block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-primary rounded-lg lg:mt-0 hover:bg-secondary lg:w-auto"
                    to="/register">
                    Sign Up
                </Link>
            </nav>

            <div class="container px-6 py-16 mx-auto text-center">
                <div class="w-3/4 mx-auto">
                    <h1 class="text-3xl font-black text-gray-800 dark:text-white text-center md:text-6xl">THE ULTIMATE GAME TRADING MARKETPLACE IN TUNISIA</h1>
                    <p class="mt-6 text-gray-500 dark:text-gray-300">Cut out the middle man and trade directly with other gamers</p>
                    <Link to="/login">
                        <button
                            class="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-primary rounded-lg hover:bg-secondary md:mx-0 md:w-auto focus:outline-none">
                            Log In Now
                        </button>
                    </Link>
                    <p class="mt-3 text-sm text-gray-400 ">Trade, Buy and Sell with other gamers, saving you money</p>
                </div>

                <div class="flex justify-center mt-10">
                    <div class="w-full h-full py-5 bg-gradient-to-tr from-primary to-secondary rounded-xl md:w-11/12">
                        <div class="container px-6 py-12 mx-auto">
                            <h1 class="text-2xl font-semibold text-white lg:text-4xl dark:text-white">Our Offers For You</h1>

                            <div class=" grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                                <div>


                                    <div>
                                        <h1 class="text-2xl font-black text-white dark:text-white">SAVE TIME & MONEY</h1>

                                        <p class="mt-2 text-md text-gray-300 dark:text-gray-300">
                                            Cut out the middle man and trade directly with other gamers
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h1 class="text-2xl font-black text-white dark:text-white">GREAT VALUE</h1>

                                        <p class="mt-2 text-md text-gray-300 dark:text-gray-300">
                                            The best return for your games in either cash or game trades
                                        </p>
                                    </div>
                                </div>

                                <div>

                                    <div>
                                        <h1 class="text-2xl font-black text-white dark:text-white">QUICK & EASY</h1>

                                        <p class="mt-2 text-md text-gray-300 dark:text-gray-300">
                                            Make offers to multiple users for the games you want with the tap of a button
                                        </p>
                                    </div>
                                </div>






                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div class=" mx-auto max-w-screen-xl px-4 ">
                <h2 class=" text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Available Games</h2>
                <div class=" grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    <a href="#" class="flex justify-center items-center h-80">
                        <League_of_legends />
                    </a>
                    <a href="#" class="flex justify-center items-center h-80">
                        <Valorant />
                    </a>
                    <a href="#" class="flex justify-center items-center h-80">
                       <Fifa /> 
                    </a>

                    <a href="#" class="flex justify-center items-center h-80">
                        <Fortnite />
                    </a>
                    <a href="#" class="flex justify-center items-center h-80">
                        <FreeFire />

                    </a>
                    <a href="#" class="flex justify-center items-center h-80">
                        <RainbowSixSiege />
                    </a>
                </div>
            </div>


            <footer class="bg-white dark:bg-gray-800">
                <div class="container px-6 py-8 mx-auto">
                    <div class="text-center">
                        <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>

                        <p class="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">Your personal information will not be given to any third parties or used for any other purposes</p>

                        <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                            <button class="flex items-center justify-center group order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-200 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                <svg className='dark:fill-white dark:group-hover:fill-black w-5 h-5 mx-1' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z" ></path>
                                </svg>

                                <span class="mx-1 dark:text-white dark:group-hover:text-black">Log In Now</span>
                            </button>

                            <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-secondary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-80">Sign Up</button>
                        </div>
                    </div>

                    <hr class="my-10 border-gray-200 dark:border-gray-700" />

                    <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p class="text-sm text-gray-400">© Copyright 2023. All Rights Reserved.</p>

                <button className='bg-primary px-3 py-1 rounded-lg text-white' onClick={toggleDarkMode}>
                    {dark ? "Disable Dark Mode" : "Enable Dark Mode"}
                </button>
                    </div>
                </div>
            </footer>










        </section>

    );
}


export default HomePage;