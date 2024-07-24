import { useState } from 'react';
import './LikeButton.css';
import { LikeButtonPropsInterface } from './LikeButtonPropsInterface';

export function LikeButton({ visibility }: LikeButtonPropsInterface) {

  const [ isLiked, setIsLiked ] = useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  return (
  <button className={[
    `like-button`,
    visibility && `like-button_visible`,
    isLiked && `like-button_active`
  ].join(' ')
  } onClick={toggleLike}>

  </button>
  )
}

