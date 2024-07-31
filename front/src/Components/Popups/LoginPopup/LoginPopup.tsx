import { useForm } from "../../../hooks/useForm/useForm"
import { LoginPopupProps } from "./LoginPopupProps";

export function LoginPopup({ isOpen, setIsOpen }: LoginPopupProps) {

    const { values, handleChange } = useForm();

    const isPopupOpen = isOpen ? 'registration-popup_open' : '';
    const isPopupContentOpen = isOpen ? 'registration-popup__content_open' : '';

  return (
    <div className={`registration-popup ${isPopupOpen}`}>
      <div className={'registration-popup__overlay'} onClick={() => {setIsOpen(false)}}></div>
      <div className={`registration-popup__content ${isPopupContentOpen}`}>
        <button className="registration-popup__close-button" onClick={() => {setIsOpen(false)}}>✖</button>
      
      <input
        placeholder='Логин'
        name='login'
        value={values.name || ''}
        onChange={handleChange}
        required={true}
      ></input>
      <input
        placeholder='Пароль'
        name='password'
        value={values.name || ''}
        onChange={handleChange}
        required={true}
      ></input>
      <button
      className="registration__submit-button"
      >Войти</button>
      </div>
    </div>
  )
}