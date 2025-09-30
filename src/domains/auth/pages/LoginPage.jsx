import {useState} from "react";
import {login} from "../api/authAPI";
import {useNavigate} from "react-router-dom";
import useMemberStore from "../../../commons/stores/memberStore";

const LoginPage = () => {
    const navigate = useNavigate();

    const setMember = useMemberStore((state) => state.setMember);

    const [loginInfo, setLoginInfo] = useState({id: "", pw: ""});
    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginInfo(prev => ({...prev, [name]: value}));
    }

    const handleCheck = () => {
        login(loginInfo).then(resp => {
            console.log(resp);
            if (resp.data) {
                alert("로그인 성공");
                setMember({id: loginInfo.id});
            } else {
                alert("로그인 실패");
            }
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