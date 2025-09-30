import {create} from "zustand/react";

const useMemberStore = create(set => ({
    member: {
        id: "",
        name: ""
    },
    setMember: (info) => set({ member: info}),
    clearMember: () => set({ member: {id:"", name:""}})
}));

export default useMemberStore;