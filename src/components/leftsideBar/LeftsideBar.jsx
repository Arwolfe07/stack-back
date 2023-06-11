import React from 'react'
import { NavLink } from 'react-router-dom';
import globe from '../../assets/Globe.svg';
import './LeftsideBar.css'
const LeftsideBar = () => {
    return (
        <div className='left-sidebar'>
            <div>

                <nav className='side-nav'>
                    <NavLink to='/' className='side-nav-links' activeClassName='active'>
                        <p>Home</p>
                    </NavLink>
                    <div className='side-nav-div'>
                        <div><p>PUBLIC</p></div>
                        <NavLink to='/questions' className='side-nav-links' activeClassName='active'>
                            <img src={globe} alt='globe' />
                            <p style={{ paddingLeft: '10px' }}>Questions</p>
                        </NavLink>
                        <NavLink to='/tags' className='side-nav-links' activeClassName='active'>
                            <p>Tags</p>
                        </NavLink>
                        <NavLink to='/users' className='side-nav-links' activeClassName='active'>
                            <p>Users</p>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default LeftsideBar;