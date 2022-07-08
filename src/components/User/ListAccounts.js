
import useStore from "../../Store/ClientStore";
import { GetAccountsByUserId } from "../../Store/useAccount";
import SideBar from "../SideBar/sidebar";

function ListAccounts() {

    const user_id = useStore((state) => state.user.user.id);

    const { data, status } = GetAccountsByUserId(user_id);






    return (
        <div className="flex">
            <SideBar />
            <div className="w-full dark:bg-gray-900 ">
                <div class="bg-white dark:bg-gray-900 dark:text-white p-8 rounded-md w-full">
                    <div class=" flex items-center justify-between pb-6">
                        <div>
                            <span class="text-lg font-bold dark:text-white">List Of Accounts</span>
                        </div>

                    </div>
                    <div>
                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table class="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Game
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 dark:bg-gray-800 dark:text-white bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 dark:bg-gray-800 dark:text-white bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Price
                                            </th>

                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 dark:bg-gray-800 dark:text-white bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Validation
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {status === "success" && (
                                            data.map((account) => (
                                                <tr>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-700 dark:text-white ">
                                                        <div class="flex items-center">

                                                            <div class="ml-3">
                                                                <p class="text-gray-900 dark:text-white whitespace-no-wrap">
                                                                    {account.game.name}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-700 dark:text-white ">
                                                        <p class="text-gray-900 dark:text-white whitespace-no-wrap">{account.email}</p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-700 dark:text-white ">
                                                        <p class="text-gray-900 dark:text-white whitespace-no-wrap">
                                                            {account.price} DT
                                                        </p>
                                                    </td>

                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-700 dark:text-white ">
                                                        <span
                                                            className={`relative inline-block px-3 py-1 font-semibold  leading-tight`}>
                                                            <span aria-hidden
                                                                className={`absolute inset-0 ${account.validation ? 'bg-green-200' : 'bg-red-200'} opacity-50 rounded-full`}></span>
                                                            <span class="relative  dark:text-white">{account.validation == true ? "Validated" : "Not Validated"}</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        )}




                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ListAccounts;