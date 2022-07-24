import SideBar from "../SideBar/sidebar";
import { ReactComponent as League_of_legends } from '../../icons/leagueoflegends.svg'
import { ReactComponent as Valorant } from '../../icons/valorant.svg'
import { ReactComponent as Fifa } from '../../icons/fifa22.svg'
import { ReactComponent as Fortnite } from '../../icons/fortnite.svg'
import { ReactComponent as FreeFire } from '../../icons/freefire.svg'
import { ReactComponent as RainbowSixSiege } from '../../icons/rainboxsixsiege.svg'
import { useEffect, useState } from "react";
import useStore from "../../Store/ClientStore";
import { CreateAccount } from "../../Store/useAccount";
import { LoginUser } from "../../Store/useAuth";

function Accounts() {

    const [selectedgame, setSelectedGame] = useState(0);
    const [successSubmittion , setSuccessSubmittion] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const user = useStore((state) => state.user);

    const { mutate: createAccount } = CreateAccount();
    

    function handleSelectGame(id) {
        setSelectedGame(id);
    }

    function handleSubmit() {
        const data = {
            email: email,
            password: password,
            price: parseInt(price),
            description: description,
            game_id: selectedgame,
            user_id: user.user.id,
            validation: false,
        }

        createAccount(data, {
            onSuccess: () => {
                setEmail('');
                setPassword('');
                setPrice('');
                setDescription('');
                setSuccessSubmittion(true);

            }
        })


    }



    return (
        <div className="flex dark:bg-gray-900 ">
            <SideBar />
            <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <h1 className={`dark:text-white font-bold text-3xl ${selectedgame != 0 ? 'text-primary' : ''}`}>Choose a game</h1>
                <hr />
                <div>

                    <div class=" grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                        <a href="#" class="flex justify-center items-center h-80">
                            <League_of_legends className={`dark:fill-white dark:hover:fill-primary hover:fill-primary ${selectedgame == 1 ? 'fill-primary' : ''}`} onClick={() => { handleSelectGame(1) }} />
                        </a>
                        <a href="#" class="flex justify-center items-center h-80">
                            <Valorant className={`dark:fill-white dark:hover:fill-primary hover:fill-primary ${selectedgame == 2 ? 'fill-primary' : ''}`} onClick={() => { handleSelectGame(2) }} />
                        </a>
                        <a href="#" class="flex justify-center items-center h-80">
                            <Fifa className={`dark:fill-white dark:hover:fill-primary hover:fill-primary ${selectedgame == 3 ? 'fill-primary' : ''}`} onClick={() => { handleSelectGame(3) }} />
                        </a>
                        <a href="#" class="flex justify-center items-center h-80">
                            <Fortnite className={`dark:fill-white dark:hover:fill-primary hover:fill-primary ${selectedgame == 4 ? 'fill-primary' : ''}`} onClick={() => { handleSelectGame(4) }} />
                        </a>
                        <a href="#" class="flex justify-center items-center h-80">
                            <FreeFire className={`dark:fill-white dark:hover:fill-primary hover:fill-primary ${selectedgame == 5 ? 'fill-primary' : ''}`} onClick={() => { handleSelectGame(5) }} />

                        </a>
                        <a href="#" class="flex justify-center items-center h-80">
                            <RainbowSixSiege className={`dark:fill-white dark:hover:fill-primary hover:fill-primary ${selectedgame == 6 ? 'fill-primary' : ''}`} onClick={() => { handleSelectGame(6) }} />
                        </a>
                    </div>
                </div>
                <hr />

                {selectedgame != 0 &&
                    <div>
                        {successSubmittion &&
                        <div className="w-full bg-green-700 py-2 rounded-lg my-2">
                            <div className="w-11/12 mx-auto flex items-center">
                                
                                <h1 className="text-white font-bold">Game Submitted Successfully</h1>

                            </div>
                        </div>
                        }
                        <section class="w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white mb-5">Account Information</h2>

                            <div className='grid grid-cols-2'>
                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Email</label>
                                    <input onChange={(e) => { setEmail(e.target.value) ; setSuccessSubmittion(false)  }} type="text" placeholder="Email" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Password</label>
                                    <input  onChange={(e) => { setPassword(e.target.value) ; setSuccessSubmittion(false) }} type="password" placeholder="Password" class="block w-11/12 mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className="col-span-2">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Price</label>
                                    <input onChange={(e) => { setPrice(e.target.value) ; setSuccessSubmittion(false) }} type="text" placeholder="Price" class="block w-[95.8%] mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className="col-span-2">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200 ">Description</label>
                                    <textarea onChange={(e) => { setDescription(e.target.value) ; setSuccessSubmittion(false) }} type="text" placeholder="Description" class="block w-[95.8%] mb-2 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>
                                </div>


                            </div>

                            <div class="flex justify-end mt-6">
                                <button onClick={() => { handleSubmit() }} class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                            </div>
                        </section>
                    </div>
                }
            </div>
        </div>
    )
}

export default Accounts;