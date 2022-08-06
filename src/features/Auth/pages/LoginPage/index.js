import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';
import Option from '../../components/Option';
import { LoginLayout } from '../../components';
import LoginByPhoneNumber from './LoginByPhoneNumber';

const cx = classNames.bind(styles);

function LoginPage() {

    // Đặt trạng thái hiển thị trang theo từng bước
    const [page, setPage] = useState(0);

    const handleSetPage = (next) => {
        if(next)
            setPage((currPage) => currPage + 1)
        else 
            setPage((currPage) => currPage - 1)
    }

    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <Option handleSetPage={handleSetPage}/>;
            case 1:
                return <LoginByPhoneNumber />;
            default:
                return <Fragment />;
        }
    }

    return (
        <LoginLayout>
            <div className={cx('container')}>
                <span 
                    style={{visibility: page === 0 ? 'hidden' : 'visible',}}
                    className={cx('go-back-arrow')} 
                    onClick={() => handleSetPage(false)}
                >
                    <i className="fa-solid fa-angle-left"></i>
                </span>
                <Fragment>
                    {PageDisplay()}
                </Fragment>
                { page !== 1 && page !== 0 && (
                    <button 
                        className={cx('continue')}
                        onClick={() => handleSetPage(true)}
                    >
                        Tiếp tục {'>>'} 
                    </button>
                )}
                <span className={cx('more-option')}>
                    Bạn chưa có tài khoản ? 
                    <Link to='/register'>
                        <span> Đăng ký</span>
                    </Link>
                </span>
            </div>
        </LoginLayout>
    );
}

export default LoginPage;