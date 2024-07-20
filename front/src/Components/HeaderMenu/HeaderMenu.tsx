import { useState } from 'react';
import './HeaderMenu.css';
import { Link, useLocation } from 'react-router-dom';

export function HeaderMenu() {

    const location = useLocation().pathname;
    const mainLocation = location === '/' ? 'header__menu-link_current' : '';
    const favoriteCatsLocation = location === '/favorite-cats' ? 'header__menu-link_current' : '';

  return (
  <div className='header__menu'>
    <Link className={`header__menu-link ${mainLocation}`}  to='/'>Все котики</Link>
    <Link className={`header__menu-link ${favoriteCatsLocation}`} to='/favorite-cats'>Любимые котики</Link>
  </div>
  )
}

