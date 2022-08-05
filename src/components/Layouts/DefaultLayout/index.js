
import { Footer, Header } from '../components';

function DefaultLayout({ children }) {
    return (
        <>
            <Header/>
                <div style={{ display: 'relative' }}>
                    {children}
                </div>
            <Footer/>
        </>
    );
}

export default DefaultLayout;