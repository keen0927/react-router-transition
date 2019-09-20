import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ProfileRepeat from './pages/ProfileRepeat';

function App() {
  return (
    <>
      <ul>
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/about'>소개</Link></li>
        <li><Link to='/profile/keen'>keen 프로필</Link></li>
        <li><Link to='/profile/sil'>eunsil 프로필</Link></li>
        <li><Link to='/profileRepeat?detail=true'>민주스</Link></li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about','/info']} component={About} />
      <Route path={'/profile/:username'} component={Profile} />
      <Route path={'/profileRepeat'} component={ProfileRepeat} />
    </>
  );
}

export default App;
