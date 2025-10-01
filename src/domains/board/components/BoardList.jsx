const BoardList = ({boardList}) => {
    return (
        <div>
            <div>
                <div>번호</div>
                <div>제목</div>
                <div>작성자</div>
                <div>조회수</div>
                <div>작성 시간</div>
            </div>
            {boardList.Map(item => {
                return (
                    <div>
                        <div>{item.id}</div>
                        <div>{item.title}</div>
                        <div>{item.writer}</div>
                        <div>{item.view_count}</div>
                        <div>{item.create_at}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default BoardList;