import React from 'react'

const data = {
    keen: {
        name: 'keen',
        description: '도비',
    },
    sil: {
        name: 'eun',
        description: '왕'
    }
}

const Profile = ({ match }) => {

    const { username } = match.params;
    const profile = data[username];

    if (!profile) {
        return <div>존재하지 않는 사용자</div>
    }

    return (
        <div>
            {username}({profile.name})
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile
