import useStore from "../../Store/ClientStore";
import SideBar from "../SideBar/sidebar";

function UserHomePage() {
    const user = useStore((state) => state.user.user);


    return (
        <div className="flex">

            <SideBar />

            <section class="w-full bg-white dark:bg-gray-800">


                <div class="lg:flex">
                    <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[50vh] lg:w-1/2">
                        <div class="max-w-xl">
                            <h2 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Submit Your <span class="text-primary dark:text-primary">Account</span> And Propose the Price</h2>

                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">You can submit and suggest the value of this account. Our agents will verify and validate this account</p>

                            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                <a href="#" class="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary">View More</a>
                            </div>
                        </div>
                    </div>

                    <div class="w-full h-64 lg:w-1/2 lg:h-auto">
                        <div class="w-full h-full bg-cover" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)" }}>
                            <div class="w-full h-full bg-black opacity-25"></div>
                        </div>
                    </div>
                </div>
                <div class="lg:flex">
                <div class="w-full h-64 lg:w-1/2 lg:h-auto">
                        <div class="w-full h-full bg-cover" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)" }}>
                            <div class="w-full h-full bg-black opacity-25"></div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[50vh] lg:w-1/2">
                        <div class="max-w-xl">
                            <h2 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Check all your verified and validated <span class="text-primary dark:text-primary">Accounts</span></h2>

                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">When your account get verified by our agents , you can find here all the validated and no validated accounts here</p>

                            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                <a href="#" class="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary">View More</a>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>


        </div>
    )

}


export default UserHomePage;