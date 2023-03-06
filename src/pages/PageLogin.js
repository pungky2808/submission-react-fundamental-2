import React from 'react';
import InputLogin from '../components/InputLogin';
import LocaleContext from '../contexts/LocaleContext';
import { Link } from 'react-router-dom';
import { login } from '../utils/api';
import PropTypes from 'prop-types';
 
function PageLogin({ loginSuccess }) {
    const { locale } = React.useContext(LocaleContext);

    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });
 
        if (!error) {
            loginSuccess(data);
        }
    }
 
    return (
        <section className='login-page'>
            <h2 className='text-2xl font-bold'>{ locale === 'id' ? 'Login untuk menggunakan aplikasi' : 'Login to use app'}</h2>
            <InputLogin login={onLogin} />
            <p> { locale === 'id' ? 'Belum memiliki akun? ' : 'Don\'t have an account? '}
            <Link to="/register" className='font-bold hover:underline'>{ locale === 'id' ? 'Daftar di sini' : 'Register here' }</Link>
            </p>
        </section>
    );
}
 
PageLogin.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}
 
export default PageLogin;