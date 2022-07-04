import SideBar from "../SideBar/sidebar";
import { ReactComponent as League_of_legends } from '../../icons/leagueoflegends.svg'
import { ReactComponent as Valorant } from '../../icons/valorant.svg'
import { ReactComponent as Fifa } from '../../icons/fifa22.svg'
import { ReactComponent as Fortnite } from '../../icons/fortnite.svg'
import { ReactComponent as FreeFire } from '../../icons/freefire.svg'
import { ReactComponent as RainbowSixSiege } from '../../icons/rainboxsixsiege.svg'
import { useState } from "react";

function Accounts() {

    const [selectedgame , setSelectedGame] = useState(0);


    function handleSelectGame(id){
        setSelectedGame(id);
    }



    return (
        <div className="flex">
            <SideBar />
            <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <h1 className={`font-bold text-3xl ${selectedgame != 0 ? 'text-primary' : ''}`}>Choose a game</h1>
                <hr />
                <div>

                <div class=" grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    <a href="#" class="flex justify-center items-center h-80">
                        <League_of_legends className={`hover:fill-primary ${selectedgame == 1 ? 'fill-primary' : ''}`} onClick={() => {handleSelectGame(1)}}  />
                    </a>
                    <a href="#" class="flex justify-center items-center h-80">
                        <Valorant className={`hover:fill-primary ${selectedgame == 2 ? 'fill-primary' : ''}`} onClick={() => {handleSelectGame(2)}}  />
                    </a>
                    <a href="#" class="flex justify-center items-center h-80">
                       <Fifa className={`hover:fill-primary ${selectedgame == 3 ? 'fill-primary' : ''}`} onClick={() => {handleSelectGame(3)}}  /> 
                    </a>
                    <a href="#" class="flex justify-center items-center h-80">
                        <Fortnite className={`hover:fill-primary ${selectedgame == 4 ? 'fill-primary' : ''}`} onClick={() => {handleSelectGame(4)}}  />
                    </a>
                    <a href="#" class="flex justify-center items-center h-80">
                        <FreeFire className={`hover:fill-primary ${selectedgame == 5 ? 'fill-primary' : ''}`} onClick={() => {handleSelectGame(5)}}  />

                    </a>
                    <a href="#" class="flex justify-center items-center h-80">
                        <RainbowSixSiege className={`hover:fill-primary ${selectedgame == 6 ? 'fill-primary' : ''}`} onClick={() => {handleSelectGame(6)}}  />
                    </a>
                </div>
                </div>
                <hr />

            {selectedgame != 0 &&
                <div>
                    <section class="w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white mb-5">Account settings</h2>

                <div className='grid grid-cols-2'>
                    <div>
                        <label for="First Name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">First Name</label>
                        <input  type="text" placeholder="First Name" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label for="Last Name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Last Name</label>
                        <input  type="text" placeholder="Last Name" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label for="Email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Email</label>
                        <input  type="email" placeholder="Email" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    
                    
                </div>

                <div class="flex justify-end mt-6">
                    <button  class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </section>
                </div>
            }
            </div>
        </div>
    )
}

export default Accounts;