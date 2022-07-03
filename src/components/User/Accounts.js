import SideBar from "../SideBar/sidebar";
import { ReactComponent as League_of_legends } from '../../icons/leagueoflegends.svg'
import { ReactComponent as Valorant } from '../../icons/valorant.svg'
import { ReactComponent as Fifa22 } from '../../icons/fifa22.svg'
import { ReactComponent as Fortnite } from '../../icons/fortnite.svg'
import { ReactComponent as FreeFire } from '../../icons/freefire.svg'
import { ReactComponent as RainbowSixSiege } from '../../icons/rainboxsixsiege.svg'

function Accounts() {



    return (
        <div className="flex">
            <SideBar />
            <div className="mt-8 mx-5 ">
                <h1 className="text-3xl font-bold ">Add New Account</h1>
                <hr className="mb-8" />

                <h1>Choose Game</h1>
                <div className="flex">

                <div class="max-w-xs mx-3 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:bg-primary group transition-all duration-300">
                    <a href="#" class="flex justify-center items-center h-80 mx-5 ">
                        <RainbowSixSiege className="group-hover:fill-white" />
                    </a>
                </div>
                <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:bg-primary group transition-all duration-300">
                    <a href="#" class="flex justify-center items-center h-80 mx-5 ">
                        <FreeFire className="group-hover:fill-white" />
                    </a>
                </div>
                </div>


            </div>
        </div>
    )
}

export default Accounts;