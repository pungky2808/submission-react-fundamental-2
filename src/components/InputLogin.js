import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function InputLogin({ login }){
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        login({
            email,
            password,
        });
    }

    return (
        <div className='input-login'>
            <form onSubmit={onSubmitHandler} className='login-input'>
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' value={email} onChange={onEmailChange} />
                <label htmlFor='password'>Password</label>
                <input type="password" id='password' value={password} onChange={onPasswordChange} />
                <button>Login</button>
            </form>
        </div>
    );
}

InputLogin.propTypes = {
    login: PropTypes.func.isRequired,
}

export default InputLogin;