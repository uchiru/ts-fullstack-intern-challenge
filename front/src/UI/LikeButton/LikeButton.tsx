import { useState } from 'react';
import './LikeButton.css';
import { LikeButtonPropsInterface } from './LikeButtonPropsInterface';
import { postLike } from '../../utils/likesApi/likesApi';

export function LikeButton({ visibility, id, url}: LikeButtonPropsInterface) {

  const [ isLiked, setIsLiked ] = useState(false);

  async function toggleLike() {
    try {
      if(!isLiked) {
        setIsLiked(true);
        let token = localStorage.getItem('jwt');
        let data = token && await postLike(id, url, token);
        console.log(data);
      } else {
        setIsLiked(false);

      }
    }
    catch(err:any) {
      console.error(err.message)
    }
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

