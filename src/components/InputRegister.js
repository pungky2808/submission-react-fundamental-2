import React from "react";
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";

function InputRegister({register}) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [confirmPassword, onConfirmPasswordChange] = useInput('') ;

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(password === confirmPassword){
            register({
              name: name,
              email: email,
              password: password,
            });
        }
        else{
            alert("Password and password confirm must be same");
        }
    }

    return (
        <div className='input-register'>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor='name'>Name</label>
                <input type="text" value={name} onChange={onNameChange} />
                <label htmlFor='email'>Email</label>
                <input type="email" value={email} onChange={onEmailChange} />
                <label htmlFor='password'>Password</label>
                <input type="password"  value={password} onChange={onPasswordChange} />
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={onConfirmPasswordChange} />
                <button>Register</button>
            </form>
        </div>
    )
}

InputRegister.propTypes = {
    register: PropTypes.func.isRequired,
};

export default InputRegister;