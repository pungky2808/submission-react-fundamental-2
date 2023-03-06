import React from "react";
import InputRegister from "../components/InputRegister";
import LocaleContext from '../contexts/LocaleContext';
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/api";

function PageRegister() {
    const { locale } = React.useContext(LocaleContext);
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
		const { error } = await register(user);
		if (!error) {
			navigate("/");
		}
	}

    return (
        <section className='register-page'>
          <h2 className="text-2xl font-bold"> { locale === 'id' ? 'Isi form untuk mendaftar akun' : 'Fill the form to register account' } </h2>
          <InputRegister register={onRegisterHandler} />
          <p> { locale === 'id' ? 'Sudah memiliki akun? ' : 'Already have an account? '} 
            <Link to="/" className="font-bold hover:underline">{ locale === 'id' ? 'Login di sini' : 'Login here' }</Link>
          </p>
        </section>
      );
}

export default PageRegister;