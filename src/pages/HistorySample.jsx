import React, {useEffect} from 'react'

const HistorySample = ({ history }) => {

    const handleGoBack = () => {
        history.goBack();
    }

    const handleGoHome = () => {
        history.push('/');
    }

    // useEffect(() => {

    // },[]);



    return (
        <div>
            <button type="button" onClick={handleGoBack}>뒤로</button>
            <button type="button" onClick={handleGoHome}>홈으로</button>
        </div>
    )
}

export default HistorySample
