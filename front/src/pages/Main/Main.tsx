import { useState } from 'react';

import './Main.css';
import { CatCard } from '../../Components/CatCard/CatCard';

export function Main() {

  const test = [1,2,3,4,5,6,7,8,9,10,11,12];

  return (
  <main className='main'>

  <ul className='grid-container list-style'>
    {test.map(i => (<CatCard key={i}/>))}
  </ul>


  </main>
  )
}

