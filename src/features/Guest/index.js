import { Routes, Route } from 'react-router-dom';
import TestPage from './pages/TestPage';

function Test() {

    return (
        <Routes>
            <Route path='' element={<TestPage/>}/>
        </Routes>
    );
}

export default Test;