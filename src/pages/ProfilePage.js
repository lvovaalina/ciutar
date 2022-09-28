import React from 'react'
import TweetList from '../comtainers/TweetList'

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        user: state.user
    }
}

const ProfilePage = ({profile, user}) => {
    return (
        <TweetList isUpdatable={true} />
    )
}

export default ProfilePage