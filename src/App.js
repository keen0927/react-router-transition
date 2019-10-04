import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewPage';

const App = () => {
  return (
    <div>
      <Route path='/:category?' component={NewsPage} />
    </div>
  )
}

export default App
