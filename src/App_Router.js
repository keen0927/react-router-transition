import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Profile from './pages/Profile';
import Profiles from './pages/Profiles';
import ProfileRepeat from './pages/ProfileRepeat';
import HistorySample from './pages/HistorySample';

function App() {
  return (
    <>
      <ul>
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/about'>소개</Link></li>
        <li><Link to='/profiles'>프로필</Link></li>
        {/* <li><Link to='/profile/keen'>keen 프로필</Link></li> */}
        {/* <li><Link to='/profile/sil'>eunsil 프로필</Link></li> */}
        <li><Link to='/profileRepeat?detail=true'>민주스</Link></li>
        <li><Link to='/history'>히스토리 예제</Link></li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about','/info']} component={About} />
        {/* <Route path={'/profile/:username'} component={Profile} /> */}
        <Route path="/profiles" component={Profiles} />
        <Route path={'/profileRepeat'} component={ProfileRepeat} />
        <Route path={'/history'} component={HistorySample} />
      </Switch>
    </>
  );
}

export default App;
