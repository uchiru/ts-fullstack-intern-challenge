import { useEffect, useMemo, useState } from 'react';
import './Main.css';
import { CatCard } from '../../Components/CatCard/CatCard';
import { MoreCatsButton } from '../../UI/MoreCatsButton/MoreCatsButton';
import { getCats } from '../../utils/catsApi/catsApi';
import { CatInterface } from '../../Types/CatInterface/CatInterface';

export function Main() {

  const [ catsCards, setCatsCards ] = useState<CatInterface[] | null>(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ cardsLimit, setCardsLimit ] = useState(10);

  async function loadingMoreCats() {
    setCardsLimit(state => state + 10);
  }

  useMemo(async() => {
    try {
      setIsLoading(true);
      let res = await getCats(cardsLimit);
      if(res.ok) {
        const data = await res.json();
        setCatsCards(data);
      } else {
        throw new Error(res)
      }
    } 
    catch(err:any) {
      console.log(err.message)
    }
    finally {
      setIsLoading(false);
    }
  }, [cardsLimit])

  return (
  <main className='main'>

  <ul className='grid-container list-style'>
    {catsCards?.map(cat => (
      <CatCard
      key={cat.id}
      url={cat.url}
      />))}
  </ul>

  <MoreCatsButton isLoading={isLoading} loadingMoreCats={loadingMoreCats}/>
  </main>
  )
}

