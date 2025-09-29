import './App.css';
import MainPage from "./MainPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUpPage from "./domains/auth/pages/SignUpPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
