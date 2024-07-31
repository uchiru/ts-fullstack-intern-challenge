import { useForm } from "../../../hooks/useForm/useForm"
import { RegisterPopupProps } from "./RegisterPopupProps";
import './RegisterPopup.css';
import { registerUser } from "../../../utils/catsApi/userApi/userApi";
import { useState } from "react";

export function RegisterPopup({ isOpen, setIsOpen }: RegisterPopupProps) {

    const { values, handleChange } = useForm();
    const [serverMessage, setServerMessage ] = useState('');
    const isPopupOpen = isOpen ? 'registration-popup_open' : '';
    const isPopupContentOpen = isOpen ? 'registration-popup__content_open' : '';

    async function handleSubmit() {
      try{
        let res: any = await registerUser(values);
        if(!res.ok) {
          throw new Error('Произошла ошибка');
        }
        if(res.status === 201) {
          setServerMessage('Вы успешно зарегистрированы, необходимо выполнить вход')
        }
        console.log(res);
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
        maxLength={30}
      ></input>
      <input
        placeholder='Пароль'
        name='password'
        value={values.name}
        onChange={handleChange}
        required={true}
        maxLength={30}
      ></input>
      <button
      className="registration__submit-button"
      onClick={handleSubmit}
      >Зарегистрироваться</button>
      <button
      className="registration__login-button"
      >Уже зарегистрированы? Войти</button>
      <p className="registration__error">{serverMessage}</p>
      </div>
    </div>
  )
}