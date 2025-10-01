import {create} from "zustand"


const useMemberStore = create((set) => ({
    memberInfo: {
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
        memberInfo: {...state.memberInfo, ...e}
    })),
}));

export default useMemberStore;