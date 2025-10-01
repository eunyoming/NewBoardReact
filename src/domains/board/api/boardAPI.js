import api from "../../../commons/utils/apiInterceptor";
import apiRoutes from "../../../commons/utils/apiRoutes";

export function insertAPI() {
    return api(apiRoutes.board.insert);
}

export function deleteAPI(boardId) {
    return api(apiRoutes.board.delete(boardId));
}

export function boardListAPI(currentPage) {
    // 현재 페이지 안전장치
    if(currentPage < 1){
        currentPage = 1;
    }else if(currentPage > TotalPage ){
        currentPage = TotalPage;
    }

    return api(apiRoutes.board.list);
}

export function itemAPI(boardId) {
    return api(apiRoutes.board.item);
}

export function putAPI(boardItem) {
    return api({...apiRoutes.board.put, data:boardItem});
}

export function searchAPI() {
    return api(apiRoutes.board.searchList);
}