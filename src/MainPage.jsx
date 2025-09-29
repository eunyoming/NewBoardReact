import {useState} from "react";
import axios from "axios";

const MainPage = () => {

    const [login, setLogin] = useState({});
    const handleChange = (e) => {
        const {name, value} = e.target
        setLogin(prev => ({...prev, [name] : value}));
    }
    const handleCheck = () => {
        axios.post("http://10.5.5.7:80/api/auth/login", login).then(resp => {
            console.log(resp);
            if(resp.data){
                alert("로그인 성공");
            }else {
                alert("로그인 실패");
            }
            setLogin({id:"", pw:""});
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
            />
            <br/>
            <input
                type="text"
                placeholder="input PW"
                onChange={handleChange}
                name="pw"
            />
            <br/>
            <button onClick={handleCheck}>로그인</button>
        </div>
    );
}

export default MainPage;