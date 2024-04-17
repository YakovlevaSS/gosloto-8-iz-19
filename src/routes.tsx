/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { MainPage } from './pages/mainPage/MainPage';
import { ResultPage } from './pages/resultPage/ResultPage';


const AppRoutes = () => {
  const [isWin, setIsWin] = useState<boolean>(false);
  return (
    <Routes>
      <Route element={ <MainPage setIsWin={ setIsWin } /> } path="/" />
      <Route element={ <ResultPage isWin={ isWin } /> } path="/result" />
    </Routes>
  );
};

export default AppRoutes;
