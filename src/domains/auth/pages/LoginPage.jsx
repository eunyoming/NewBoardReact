import {useState} from "react";
import {loginAPI} from "../api/authAPI";
import {useNavigate} from "react-router-dom";
import useMemberStore from "../../../stores/authStore";

const LoginPage = () => {
    const navigate = useNavigate();

    const setMember = useMemberStore((state) => state.login);

    const [loginInfo, setLoginInfo] = useState({id: "", pw: ""});

    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginInfo(prev => ({...prev, [name]: value}));
    }

    const handleCheck = () => {
        loginAPI(loginInfo).then(resp => {
            if (resp.data) {
                // 로그인 ID 저장 - 세션 + 스토어
                setMember({id: loginInfo.id});
            } else {
                alert("로그인 실패");
            }
            // 로그인 입력창 초기화
            setLoginInfo({id: "", pw: ""});
        });
    }

    return (
        <div className="container">
            <h1>로그인</h1>
            <input
                type="text"
                placeholder="input ID"
                onChange={handleChange}
                name="id"
                value={loginInfo.id}
            />
            <br/>
            <input
                type="password"
                placeholder="input PW"
                onChange={handleChange}
                name="pw"
                value={loginInfo.pw}
            />
            <br/>
            <button onClick={handleCheck}>로그인</button>
            <button onClick={() => navigate("/signup")}>회원가입</button>
        </div>
    );
}

export default LoginPage;