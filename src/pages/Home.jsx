import React from 'react'
import { CSSTransition } from 'react-transition-group';
import '../style/transition.scss';

const Home = () => {
    return (
        <CSSTransition
            transitionName="homeTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div>
                Home
            </div>
        </CSSTransition>
    )
}

export default Home
