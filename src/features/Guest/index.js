import { Routes, Route } from 'react-router-dom';
import {
    LandingPage,
    LoginPage,
} from './pages';


function Test() {

    return (
        <Routes>
            <Route path='' element={<LandingPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    );
}

export default Test;