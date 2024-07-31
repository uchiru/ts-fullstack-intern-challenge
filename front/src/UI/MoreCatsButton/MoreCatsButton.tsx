import './MoreCatsButton.css';
import { MoreCatsButtonProps } from './MoreCatsButtonProps';

export function MoreCatsButton({isLoading, loadingMoreCats}: MoreCatsButtonProps) {

  let buttonText = isLoading ? 'Загружаем ещё котиков...' : 'Загрузить ещё котиков';

  return (
  <button className='more-cats-button' onClick={loadingMoreCats}>{buttonText}</button>  
  )
}

