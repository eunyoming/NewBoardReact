import {useNavigate} from "react-router-dom";
import {logout} from "../../domains/home/api/homeAPI";
import useMemberStore from "../../stores/memberStore";

export default function Nav() {
    const navigate = useNavigate();
    const clearMember = useMemberStore((state) => state.clearMember);

    const handleLogout = () => {
        logout().then(clearMember);
    }

    return (
        <div>
            <button onClick={() => navigate("/board")}>게시판</button>
            <button onClick={() => navigate("/mypage")}>마이페이지</button>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
}