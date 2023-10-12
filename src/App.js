import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import GetInTouch from './pages/GetInTouch';

function AppRouter() {

    return (
        <Router>
            <div className='bg-gradient-to-r from-[#0e0c27] from-60% via-purple-950 via-100% to-white to-100%'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<GetInTouch />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;
