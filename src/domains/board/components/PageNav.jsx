import {useEffect} from "react";

const PageNav = ({boardData, currentPage, setCurrentPage}) => {
    const startPage = Math.floor((curPage - 1) / pagePerNav) * pagePerNav + 1;
    const endPage = Math.min(startPage + pagePerNav - 1, totalPage);

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx);

    return (
        <div className="pagination">
            {pageNumbers.map(page => (
                <button
                    key={page}
                    className={page === curPage ? 'active' : ''}
                    onClick={() => setCurPage(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
                // (현재 페이지 - 1) % totalPage
                // pagePerNav만큼 반복
                // index와 현재페이지가 같으면 active

                // for문처럼 작동하는 recat구문.
                // for(let i = (curPage / pagePerNav) * pagePerNav + 1; i < (curPage / pagePerNav + 1) * pagePerNav)); i++)
                // {
                //      if(i <= totalPage){
                    //      return (
                    //          <>
                    //              {i == curPage ?
                    //                  {i} // active하게 css변경
                    //                  :
                    //                  {i} // 비활성화 css
                    //              }
                    //          </>
                    //      );
                //      } else { break; }
                // }
}

export default PageNav;