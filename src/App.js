import './App.css';
import LoginPage from "./domains/auth/pages/LoginPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUpPage from "./domains/auth/pages/SignUpPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
