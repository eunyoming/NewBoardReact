import './App.css';
import LoginPage from "./domains/auth/pages/LoginPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUpPage from "./domains/auth/pages/SignUpPage";
import useMemberStore from "./stores/memberStore";
import Home from "./domains/home/pages/Home";
import Nav from "./commons/components/Nav";
import {useEffect} from "react";

function App() {
    const memberInfo = useMemberStore((state) => state.member);
    const setMember = useMemberStore((state) => state.setMember);

    useEffect(() => {
        const loginId = sessionStorage.getItem("loginId");

        if(loginId !== null) {
            setMember({id: loginId});
        } else {
            console.log("test");
            setMember({id: ""});
        }
    }, []);

    return (
        <Router>
            <div className="App">
                {memberInfo.id !== "" ?
                    <>
                        <Nav/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
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
