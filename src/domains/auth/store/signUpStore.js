import {create} from "zustand"


const useSignUpStore = create((set) => ({
    signUpInfo: {
        id: "",
        pw: "",
        name: "",
        phone: "",
        email: "",
        postcode: "",
        address1: "",
        address2: "",
    },
    setInfo: (e) => set((state) => ({
        signUpInfo: {...state.signUpInfo, ...e}
    })),
}));

export default useSignUpStore;