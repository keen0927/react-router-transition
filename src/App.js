import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=9916b7036e5446779c4a001eeea81fb9');
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  return <NewsList />
}

export default App
