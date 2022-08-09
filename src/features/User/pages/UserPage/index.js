import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './UserPage.module.scss';
import { selectCurrentUser, selectCurrentToken } from '~/features/Auth/authSlice';
import { logOut } from '~/features/Auth/authSlice';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserPage() {
    const navigate = useNavigate();

    const user = useSelector(selectCurrentUser);
    const token = useSelector(selectCurrentToken);

    const handleLogout = () => {
        logOut()
        navigate('/');
    }

    return ( 
        <div className={cx('container')}>
            <h1>UserPage</h1>
            <h2>Hi {user.nickname}</h2>
            <h3>
                Token: {token.slice(0,9)}...
                <br/>
                Role: {user.role}
            </h3>
            <button onClick={() => handleLogout()}>Đăng xuất</button>
        </div>
    );
}

export default UserPage;