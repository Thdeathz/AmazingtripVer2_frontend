import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { selectCurrentToken } from '~/features/Auth/authSlice';

const cx = classNames.bind(styles);

function Header() {
    const token = useSelector(selectCurrentToken);

    return (
        <header className={cx('sticky-top pt-2 pb-2')}>
            <div className={cx('head-container')}>
                <div className={cx('d-flex align-items-center')}>
                    <Link to='/'>
                        <img src={images.logo} alt="Logo" className={cx('nav-logo')} />
                    </Link>
                    {/* <button onClick={() => history(-1)} className={cx('btn-go-back')}>
                        <i className="fa-solid fa-angle-left me-1"></i>
                        <span>Quay lại</span>
                    </button> */}
                </div>
                {
                    token ? (
                        <ul className={cx('list-unstyled d-sm-flex align-items-center m-0 nav-left-group')}>
                            {/* <li className={cx('message')}>
                            
                                    <button className={cx('btn-noti')} >
                                        <i className={cx('fa-brands fa-facebook-messenger')}></i>
                                    </button>
                            </li>
                            <li className={cx('notification')}>
                                    <button className={cx('btn-noti')} >
                                        <i className={cx('fa-regular fa-bell')}></i>
                                    </button>
                            </li> */}
                            <li className={cx('user-avatar')}>
                                    <button className={cx('btn-avatar')} >
                                        Đã đăng nhập
                                    </button>
                            </li>
                        </ul>
                    ) : (
                        <Link to='/login'>
                            <button className={cx('btn-login')}>
                                Đăng nhập
                            </button>
                        </Link>
                    )
                }
            </div>
        </header>
    );
}

export default Header;