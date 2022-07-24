import AppRouter from './Components/app-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/footer';
import Header from './Components/header';
import React from 'react'
import style from './style.module.scss';

const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <div className={style.App}>
  
    <AppRouter/>
   </div>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
