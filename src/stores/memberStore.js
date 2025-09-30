import {create} from "zustand/react";

const useMemberStore = create(set => ({
    member: {
        id: "",
        name: ""
    },
    login: (info) => {
        if (info.id !== "") {
            sessionStorage.setItem("loginId", info.id);
        }
        set({member: info});
    },
    logout: () => {
        sessionStorage.removeItem("loginId");
        set({member: {id: "", name: ""}});
    },
}));

export default useMemberStore;