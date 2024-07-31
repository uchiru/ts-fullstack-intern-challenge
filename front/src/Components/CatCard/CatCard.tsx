import { useState } from 'react';
import './CatCard.css';
import { LikeButton } from '../../UI/LikeButton/LikeButton';
import { CatInterface } from '../../Types/CatInterface/CatInterface';

export function CatCard({ id, url }: CatInterface) {
  
  const [likeVisibility, setLikeVisibility] = useState(false);

  function likeIsVisible() {
    setLikeVisibility(true);
  }

  function likeIsUnvisible() {
    setLikeVisibility(false);
  }

  return (
  <li className='cat-card' onMouseEnter={likeIsVisible} onMouseLeave={likeIsUnvisible}>
    <img src={url} className='cat-card__image'/>
    <LikeButton visibility = {likeVisibility} id={id} url={url}/>
  </li>
  )
}

