import React from 'react'
import { CSSTransition} from 'react-transition-group';
import '../../src/style/transition.scss';
const Home = () => {
    return (
        <CSSTransition
            in={true}
            timeout={100}
            classNames='switch-transition'
            // unmountOnExit
            appear
            // enter
        >
          <div>HOME</div>
        </CSSTransition>
            
            
        
    )
}

export default Home
