import { useMemo, useState } from 'react';
import './LikeButton.css';
import { LikeButtonPropsInterface } from './LikeButtonPropsInterface';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { postUserLike, deleteUserLike } from '../../store/Likes/likesSlice';

export function LikeButton({ visibility, id, url}: LikeButtonPropsInterface) {

  const [ isLiked, setIsLiked ] = useState(false);

  const dispatch = useAppDispatch();
  const likes = useAppSelector(state => state.likes.value);

  async function toggleLike() {
    try {
      if(!isLiked) {
        setIsLiked(true);
        let token = localStorage.getItem('jwt');
        token && await dispatch(postUserLike({catId:id, url, token}));
      } else {
        let token = localStorage.getItem('jwt');
        token && await dispatch(deleteUserLike({catId:id, token}));
        setIsLiked(false);
      }
    }
    catch(err:any) {
      console.error(err.message)
    }
  }

  function checkIsLiked(){
    likes.forEach((cat) => {
      if(cat.cat_id === id){
        setIsLiked(true)
      }
    })
  }

  useMemo(() => {
    checkIsLiked();
  }, [likes])

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

