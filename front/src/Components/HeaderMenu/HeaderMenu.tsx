import { usePopups } from '../../hooks/usePopups/UsePopups';
import { LoginPopup } from '../Popups/LoginPopup/LoginPopup';
import { RegisterPopup } from '../Popups/RegisterPopup/RegisterPopup';
import './HeaderMenu.css';
import { Link, useLocation } from 'react-router-dom';

export function HeaderMenu() {

    const location = useLocation().pathname;
    const mainLocation = location === '/' ? 'header__menu-link_current' : '';
    const favoriteCatsLocation = location === '/favorite-cats' ? 'header__menu-link_current' : '';

    const { registerPopupOpen, setRegisterPopupOpen, loginPopupOpen, setLoginPopupOpen } = usePopups();

  return (
  <div className='header__menu'>
    <Link className={`header__menu-link ${mainLocation}`}  to='/'>Все котики</Link>
    <Link className={`header__menu-link ${favoriteCatsLocation}`} to='/favorite-cats'>Любимые котики</Link>
    <button className='header__menu-link' onClick={() => setRegisterPopupOpen(!registerPopupOpen)}>Регистрация</button>
    <button className='header__menu-link' onClick={() => setLoginPopupOpen(!loginPopupOpen)}>Войти</button>

    {registerPopupOpen && <RegisterPopup isOpen={registerPopupOpen} setIsOpen={setRegisterPopupOpen}></RegisterPopup>}
    {loginPopupOpen && <LoginPopup isOpen={loginPopupOpen} setIsOpen={setLoginPopupOpen}></LoginPopup>}
  </div>
  )
}

