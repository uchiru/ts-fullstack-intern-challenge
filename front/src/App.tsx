import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <div className='page'>

    {/* <Header /> */}

    <div className='content'>
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/russian-street/' element={<Main />} />
        <Route path='/events' element={<Events />} />
        <Route path='/directions' element={<Directions />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/events/:id' element={<Event />} />
        <Route path='/blog/:id' element={<Blogevent />} />
        <Route path='/*' element={<NotFoundPage />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/create-event-profile' element={<CreateEventProfile />} />
      </Routes> */}
    </div>

    {/* <Footer /> */}

  </div>
  )
}

export default App
