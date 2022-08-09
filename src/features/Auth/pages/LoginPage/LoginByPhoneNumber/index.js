import { useState, useRef, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './LoginByPhoneNumber.module.scss';
import { setCredentials } from '~/features/Auth/authSlice';
import { useLoginMutation } from '~/features/Auth/authApiSlice';

const cx = classNames.bind(styles);

function LoginByPhoneNumber() {
	
	const navigate = useNavigate();
	const location = useLocation();
	
	const userRef = useRef();
	const errRef = useRef();

	const [errMsg, setErrMsg] = useState('');
	const [showPwd, setShowPwd] = useState(false);
	const [login, {isLoading}] = useLoginMutation();

	const [formData, setFormData] = useState({
        phone: "",
        password: "",
    });

	const dispatch = useDispatch();

	useEffect(() => {
		setErrMsg('');
	}, [formData.phone, formData.password])

	// Form Submit
	const handlerSubmit = async (e) => {
		e.preventDefault();
		
		try {
			const userData = await login(formData).unwrap();
			dispatch(setCredentials({...userData, user: userData.user}));
			navigate('/user');
		} catch (error) {
			console.log('Toang meo chay r loi cc: ', error);
		}
	}

	return (
		<>
			<div>
				<h3 className={cx('title')}>Đăng nhập</h3>
				<p 
					ref={errRef} 
					className={errMsg ? cx('errmsg') : cx('offscreen')} 
					aria-live="assertive"
				>
					{errMsg}
				</p>
			</div>
			<form className={cx('login-form')}>
				<div className={cx('form-control')}>
					<label htmlFor='sdt'>Số điện thoại</label>
					<input 
						ref={userRef}
						name="phone"
						id='sdt' 
						placeholder='Nhập số điện thoại' 
						type='text'
						value={formData.phone}
						onChange={(e) => 
							setFormData({...formData, phone: e.target.value})
						}
						required 
					/>
				</div>
				<div className={cx('form-control')} style={{ position: 'relative' }}>
					<label htmlFor='password'>Mật khẩu</label>
					<input 
						name="password"
						id='password' 
						placeholder='Nhập mật khẩu' 
						type={ showPwd ? 'text' : 'password'} 
						value={formData.password}
						onChange={(e) => 
							setFormData({...formData, password: e.target.value})
						}
						required 
						className={cx('pwd')}
					/>
					<span 
						className={cx('show-pwd')}
						onClick={() => setShowPwd(!showPwd)}
					>
						
						{ !showPwd ? 
							(<i className="fa-solid fa-eye"></i>) :
							(<i className="fa-solid fa-eye-slash"></i>)
						}
					</span>
				</div>
			</form>
			<button 
				type="submit" 
				className={cx('login')}
				onClick={(e) => handlerSubmit(e)}
			>
				Đăng nhập
			</button>
		</>
	)
}

export default LoginByPhoneNumber