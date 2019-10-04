import React, { Fragment, useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <Fragment>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </Fragment>
  )
}

export default App
