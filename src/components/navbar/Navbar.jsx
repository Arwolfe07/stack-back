import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';

import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg';
import Avatar from '../avatar/Avatar';
import './Navbar.css'
import { currentUser } from '../../actions/currentUser';

const Navbar = () => {
    const navigate = useNavigate();
    var user = useSelector((state) => (state.currentUserReducer));
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        dispatch(currentUser(null));
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logoutHandler();
            }
        }
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [dispatch]);

    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type='text' placeholder='Search...' />
                    <img src={search} alt='search' width='18' className='search-icon' />
                </form>
                {user === null ?
                    <Link to='/auth' className='nav-item nav-links'>Log in</Link> :
                    <>
                        <Link to={`/users/${user?.result?._id}`} style={{ textDecoration: 'none' }}><Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'>{user.result.name.charAt(0).toUpperCase()}</Avatar></Link>
                        <button className='nav-item nav-links' onClick={logoutHandler}>Log Out</button>
                    </>
                }

            </div>
        </nav>
    )
}

export default Navbar;