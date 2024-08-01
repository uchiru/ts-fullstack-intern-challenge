import { useState } from "react";
import { useForm } from "../../../hooks/useForm/useForm"
import { loginUser } from "../../../utils/userApi/userApi";
import { LoginPopupProps } from "./LoginPopupProps";

export function LoginPopup({ isOpen, setIsOpen }: LoginPopupProps) {

    const { values, handleChange } = useForm();
    const [serverMessage, setServerMessage ] = useState('');
    const isPopupOpen = isOpen ? 'registration-popup_open' : '';
    const isPopupContentOpen = isOpen ? 'registration-popup__content_open' : '';

    async function handleLogin() {
      try{
        let res = await loginUser(values);
        if(!res.ok) {
          throw new Error('Произошла ошибка');
        }
        if(res.status === 201) {
          setServerMessage('Вход выполнен')
        }
        let data = await res.json();
        localStorage.setItem('jwt', data.token);
        setIsOpen(false);
      }
      catch(err:any) {
        setServerMessage(err.message);
      }
      finally{
        setTimeout(() => {
          setServerMessage('')
        }, 5000)
      }
    }

  return (
    <div className={`registration-popup ${isPopupOpen}`}>
      <div className={'registration-popup__overlay'} onClick={() => {setIsOpen(false)}}></div>
      <div className={`registration-popup__content ${isPopupContentOpen}`}>
        <button className="registration-popup__close-button" onClick={() => {setIsOpen(false)}}>✖</button>
      
      <input
        placeholder='Логин'
        name='login'
        value={values.name}
        onChange={handleChange}
        required={true}
      ></input>
      <input
        placeholder='Пароль'
        name='password'
        value={values.name}
        onChange={handleChange}
        required={true}
        type="password"
      ></input>
      <button
      className="registration__submit-button"
      onClick={handleLogin}
      >Войти</button>
      <p className="registration__error">{serverMessage}</p>
      </div>
    </div>
  )
}