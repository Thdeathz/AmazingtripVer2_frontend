import { Routes, Route } from 'react-router-dom';
import {
    LandingPage,
} from './pages';


function Test() {

    return (
        <Routes>
            <Route path='' element={<LandingPage/>}/>
        </Routes>
    );
}

export default Test;