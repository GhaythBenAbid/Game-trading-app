function Contact() {
    return (
        <div>

            <section class="w-full  px-6 py-4 mx-auto bg-white  shadow-md dark:bg-gray-800">
                <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Get in touch</h2>
                <p class="mt-3 text-center text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
                    <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>

                        <span class="mt-2">121 Street, NY</span>
                    </a>

                    <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>

                        <span class="mt-2">+2499999666600</span>
                    </a>

                    <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>

                        <span class="mt-2">example@example.com</span>
                    </a>
                </div>

                <div class="mt-6 ">
                    <div class="items-center -mx-2 md:flex">
                        <div class="w-full mx-2">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

                            <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                        </div>

                        <div class="w-full mx-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>

                            <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" />
                        </div>
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>

                        <textarea class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                    </div>

                    <div class="flex justify-center mt-6">
                        <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
                    </div>
                </div>
            </section>

            <section class="flex flex-col  mx-auto overflow-hidden bg-white shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
                    <div class="px-6 py-6 md:px-8 md:py-0">
                        <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up For <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">Project</span> Updates</h2>

                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
                    </div>
                </div>

                <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form>
                        <div class="flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" />

                                <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
}


export default Contact;