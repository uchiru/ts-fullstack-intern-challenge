import { useState } from 'react';
import './HeaderMenu.css';
import { Link } from 'react-router-dom';

export function HeaderMenu() {

  return (
  <div className='header__menu'>
    <Link className='header__menu-link' to='/'>Все котики</Link>
    <Link className='header__menu-link' to='/favorite-cats'>Любимые котики</Link>
  </div>
  )
}

