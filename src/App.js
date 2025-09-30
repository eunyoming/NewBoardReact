import './App.css';
import LoginPage from "./domains/auth/pages/LoginPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUpPage from "./domains/auth/pages/SignUpPage";
import useMemberStore from "./commons/stores/memberStore";
import Home from "./domains/home/pages/Home";
import Nav from "./commons/components/Nav";

function App() {
    const memberInfo = useMemberStore((state) => state.member);

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
