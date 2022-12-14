import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('p-3')}>
            <section className={cx('footer-background')}></section>
            <div className={cx('ms-5 me-5 p-5')}>
                <div className={cx('d-sm-flex justify-content-between ps-5 pe-5')}>
                    <div className={cx('ms-5 ps-5')}>
                        <p>A web application development <br/> for the project development <br/> special course.</p>
                        <img className={cx('nav-logo')} src={images.logo} alt="Logo"/>
                    </div>
                    <div className={cx('me-5 pe-5')}>
                        <h6 style={{ color: 'white' }}>Contact us</h6>
                        <ul className={cx('contact-list')}>
                            <li>成長 Team</li>
                            <li>Email: abc@gmail.com</li>
                            <li>Facebook: ABC</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('copyright-area')}>
                <div className={cx('d-sm-flex justify-content-between align-items-center pb-1')}>
                    <p className={cx('copyright m-0')}>
                        <span className={cx('copyright-icon')}><i className={cx('fa-solid fa-copyright')}></i></span> Copyright AmazingTrip - By 成長 Team
                    </p>
                    <ul className={cx('contact-list-icon d-flex align-items-center m-0')}>
                        <li><i className={cx('fa-brands fa-facebook')}></i></li>
                        <li><i className={cx('fa-brands fa-twitter')}></i></li>
                        <li><i className={cx('fa-brands fa-github')}></i></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;