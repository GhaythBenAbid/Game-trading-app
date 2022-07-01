import create from 'zustand';
import {devtools , persist} from 'zustand/middleware';
import AES from 'crypto-js/aes';
import CryptoJS from 'crypto-js';

let store = (set) => ({
    dark : false,
    toogleDarkMode : () => set((state) => ({
        dark : !state.dark
    })),


    user : {},
    setUser : (user) => set((state) => ({
        user : user
    })),

    logout : () => set((state) => ({
        user : {}
    })),
        

});


store = devtools(store);

store = persist(store , {
    name : 'zustand-example',
    serialize : (state) => AES.encrypt(JSON.stringify(state) , 'key').toString(),
    deserialize : (state) => JSON.parse(AES.decrypt(state , 'key').toString(CryptoJS.enc.Utf8))
});


const useStore = create(store);

export default useStore;

