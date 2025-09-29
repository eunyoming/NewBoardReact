import './App.css';
import MainPage from "./MainPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import JoinPage from "./domains/auth/pages/JoinPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<JoinPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
