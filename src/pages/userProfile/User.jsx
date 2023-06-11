import React, { useState } from 'react'
import LeftsideBar from '../../components/leftsideBar/LeftsideBar'
import Avatar from '../../components/avatar/Avatar';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditProfileForm from './EditProfileForm';
import UserBio from './UserBio';
import './User.css';

const User = () => {
    const { id } = useParams();
    const users = useSelector(state => state.userReducer);
    const currentUser = useSelector(state => state.currentUserReducer);
    const currentProfile = users.filter((user) => user._id === id)[0];
    const [switchEdit, setSwitchEdit] = useState(false);
    const editHandler = () => {
        setSwitchEdit(true);
    }

    return (
        <div className='home-container-1'>
            <LeftsideBar />
            <div className='home-container-2'>
                <section>
                    <div className='user-details-container'>
                        <div className='user-details'>
                            <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">
                                {currentProfile?.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className='user-name'>
                                <h1>{currentProfile?.name}</h1>
                                <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                            </div>
                        </div>
                        {
                            currentUser?.result._id === id && (
                                <button type='button' onClick={editHandler} className='edit-profile-btn'>
                                    <FontAwesomeIcon icon={faPen} />Edit Profile
                                </button>
                            )
                        }
                    </div>
                    <>
                        {switchEdit ? (
                            <EditProfileForm currentUser={currentProfile} setSwitch={setSwitchEdit}/>
                        ) : (<UserBio currentProfile={currentProfile} />)}
                    </>
                </section>
            </div>
        </div>
    )
}

export default User;