import BoardList from "../components/BoardList";
import {useEffect, useState} from "react";
import {boardListAPI} from "../api/boardAPI";
import PageNav from "../components/PageNav";

const BoardPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [boardData, setBoardData] = useState({
        boardList: [],
        itemPerPage: 0,
        pagePerNav: 0,
        TotalPage: 0
    });

    useEffect(() => {
        boardListAPI().then(resp => {
            setBoardData({
                boardList: resp.data.boardList,
                itemPerPage: resp.data.itemPerPage,
                pagePerNav: resp.data.pagePerNav,
                TotalPage: resp.data.TotalPage
            });
        });
    }, [currentPage]);

    return (
        <div>
            <div>
                <input type={"text"} placeholder={"작성자 또는 글 내용으로 검색"}/>
                <button>검색</button>
            </div>
            <div>
                <BoardList boardList={boardData.boardList}/>
            </div>
            <div>
                <PageNav boardData={boardData} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
}

export default BoardPage;