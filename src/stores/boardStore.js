import {create} from "zustand"


const useBoardStore = create((set) => ({
    boardItem: {
        id: "",
        writer: "",
        title: "",
        contents: "",
        view_count: "",
        create_at: ""
    },
    setBoardItem: (boardItem) => set((state) => ({
        memberInfo: {...state.memberInfo, ...e}
    })),
}));

export default useBoardStore;