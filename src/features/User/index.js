import { Routes, Route } from 'react-router-dom';
import { UserPage } from './pages';
import { DefaultLayout } from '~/components/Layouts';

function User() {

    return (
        <Routes>
            <Route 
                path='' 
                element={
                    <DefaultLayout >
                        <UserPage/>
                    </DefaultLayout>
                }
            />
        </Routes>
    );
}

export default User;