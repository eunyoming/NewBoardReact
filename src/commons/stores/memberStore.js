import {create} from "zustand/react";

const useMemberStore = create(set => ({
    member: {
        id: "",
        name: ""
    },
    isLoggedIn: false,
    setMember: (info) => set({ member: info, isLoggedIn: true }),
    clearMember: () => set({ member: {id:"", name:""}, isLoggedIn: false })
}));

export default useMemberStore;