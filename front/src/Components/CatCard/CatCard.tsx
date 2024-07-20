import { useState } from 'react';
import './CatCard.css';
import testCat from './image3.png';
import { LikeButton } from '../../UI/LikeButton/LikeButton';

export function CatCard() {
  
  const [likeVisibility, setLikeVisibility] = useState(false);

  function likeIsVisible() {
    setLikeVisibility(true);
  }

  function likeIsUnvisible() {
    setLikeVisibility(false);
  }


  return (
  <li className='cat-card' onMouseEnter={likeIsVisible} onMouseLeave={likeIsUnvisible}>
    <img src={testCat} />
    {likeVisibility && <LikeButton />}
  </li>
  )
}

