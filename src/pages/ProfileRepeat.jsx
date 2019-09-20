import React from 'react';
import qs from 'qs';

const ProfileRepeat = ({ location }) => {

    console.log(location);

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });

    const showDetail = query.detail === 'true';

    return (
        <div>
            123
            {showDetail && <p>detail값을 true로 설정하셨군요</p>}
        </div>
    )
}

export default ProfileRepeat
