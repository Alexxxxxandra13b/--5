import React from 'react';
import Header from './Header';
import './App.css';
import Button from'./Button';
import {useState} from'react';
import Welcome from './Welcome';
import Title from './Title';
import List from './List';
import Eight from './Eight';
import UserCard from'./UserCard';
import DayNight from './DayNight';
import Image from './Image';
import Chetchik from './Chetchik';
import Six from './Six';
import Simvol from './Simvol';

function App() {
  const [show, setShow] =useState(true);
  const list = ['вода', 'сок', 'несок'];
 
  return (
    <div className="App">
      <Header />
      <UserCard name="Маша" age={24}/>
      <Welcome name="Алекссандра"/>
      <Six />
      <p>Это ваше первое React-приложение.</p>
      <Button name="неButton"/>
      <List fruits={list}/>
      <Simvol />
      <Eight />
      <button onClick={() => setShow(!show)}>
                показать
            </button>
      <DayNight/>
      {show ?  <Chetchik /> :<></>  }
      <Title name="Лабораторная 5"/>
      <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.sfu-kras.ru%2Fnode%2F21631&psig=AOvVaw3EP1HU0mVul7Wt8k2yfemN&ust=1734535460421000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODnrKKOr4oDFQAAAAAdAAAAABAE" caption="Вода" />
    </div>
  );
}
export default App;