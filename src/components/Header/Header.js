import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {

    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
            .then(() => {

            })
            .catch((error) => {
            });
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to='/shop'>Shop</Link>
                <Link to='/order'>Order</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/about'>About</Link>
                {
                    user?.uid ?
                        <button onClick={handleLogOut}>Log out</button>
                        :
                        <>
                            <Link to='/login'>Log in</Link>
                            <Link to='/signup'>Sign UP</Link>
                        </>}

            </div>
        </nav>
    );
};

export default Header;