import {useNavigate} from "react-router-dom";
import {logout} from "../../domains/home/api/homeAPI";

export default function Nav() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/board")}>게시판</button>
            <button onClick={() => navigate("/mypage")}>마이페이지</button>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
}