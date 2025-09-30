import './App.css';
import LoginPage from "./domains/auth/pages/LoginPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUpPage from "./domains/auth/pages/SignUpPage";
import useMemberStore from "./stores/memberStore";
import Home from "./domains/home/pages/Home";
import Nav from "./commons/components/Nav";
import {useEffect} from "react";
import Mypage from "./domains/mypage/pages/Mypage";

function App() {
    const memberInfo = useMemberStore((state) => state.member);
    const login = useMemberStore((state) => state.login);

    useEffect(() => {
        const loginId = sessionStorage.getItem("loginId");

        if(loginId !== null) {
            login({id: loginId});
        } else {
            console.log("test");
            login({id: ""});
        }
    }, [login]);

    return (
        <Router>
            <div className="App">
                {memberInfo.id !== "" ?
                    <>
                        <Nav/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/mypage" element={<Mypage/>}/>
                        </Routes>
                    </>
                    :
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/signup" element={<SignUpPage/>}/>
                    </Routes>
                }
            </div>
        </Router>
    );
}

export default App;
