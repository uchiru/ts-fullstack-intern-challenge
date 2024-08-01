import { useMemo } from 'react';
import './FavoriteCats.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CatCard } from '../../Components/CatCard/CatCard';
import { getUserLikes } from '../../store/Likes/likesSlice';

export function FavoriteCats() {

  const likes = useAppSelector(state => state.likes.value);

  const dispatch = useAppDispatch();

  useMemo(async() => {
    let token = localStorage.getItem('jwt');
    token && await dispatch(getUserLikes(token));
  }, [])

  return (
  <div className='favorite-cats'>

    <ul className='grid-container list-style'>
      {likes?.map(cat => (
        <CatCard
        key={cat.cat_id}
        id={cat.cat_id}
        url={cat.url}
        >
        </CatCard>
      ))}
    </ul>

  </div>
  )
}
