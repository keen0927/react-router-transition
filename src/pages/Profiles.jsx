import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li><Link to="/profiles/keen">KEEN</Link></li>
                <li><Link to="/profiles/sil">SIL</Link></li>
            </ul>

            <Route path="/profiles" exact render={() => <div>사용자를 선택하라.</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    )
}

export default Profiles
