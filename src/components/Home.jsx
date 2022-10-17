import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
        <Link className='home__link' to='/cards'>Верстка блока</Link>
        <Link className='home__link' to='/table-wrap-v1'>Таблица на странице v1</Link>
        <Link className='home__link' to='/table-wrap-v2'>Таблица на странице v2</Link>
        <Link className='home__link' to='/tickets-on-event'>Билеты на событие</Link>
        <Link className='home__link' to='/route'>Время из A в B</Link>
    </div>
  )
}

export default Home;