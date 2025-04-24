import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import useScreenSize from '../utility/useScreenSize';
import { useTheme } from '../context/ThemeProvider';
import { BsFillPersonFill } from 'react-icons/bs';

const menus = [
    {
        title: 'Barcelona',
        link: '/barcelona'
    },
    {
        title: 'Explore',
        link: '/barcelona'
    },
    {
        title: 'Top cities',
        link: '/barcelona'
    },
    {
        title: 'Help center',
        link: '/barcelona'
    },
]
const Header = () => {
    const [navs] = useState(menus);
    const [menuOpen, setMenuOpen] = useState(false);
    const screenSize = useScreenSize();
    const { toggleTheme, darkMode } = useTheme();
    const handleMenuTrigger = () => {
        setMenuOpen((prev) => !prev);
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-5 col-lg-3">
                            <div className="header__logo">
                                <div className={`menu-trigger${menuOpen ? ' active' : ''}`} onClick={handleMenuTrigger}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                {darkMode ? (<img src='/img/footerlogo.svg' alt="" />) : (<img src="/img/header-logo.svg" alt="" />)}
                            </div>
                            <div className={`header__sidenav${menuOpen ? ' open' : ''}`}>
                                <div className="navbar">
                                    <ul className='menu'>
                                        {navs.map((nav, index) => {
                                            return (
                                                <li key={index} >
                                                    <NavLink to={nav.link} className='navs'>
                                                        {nav.title}
                                                    </NavLink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-block d-none">
                            <div className="navbar">
                                <ul className='menu'>
                                    {navs.map((nav, index) => {
                                        return (
                                            <li key={index} >
                                                <NavLink to={nav.link} className='navs'>
                                                    {nav.title}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-7 col-lg-3">
                            <div className="header__icons">
                                {darkMode ? (<img src="/img/dark.svg" alt="" onClick={toggleTheme} />) :
                                    <img src="/img/light.svg" alt="" onClick={toggleTheme} />}
                                <NavLink to="#">
                                    <BsFillPersonFill style={{ color: darkMode ? 'white' : 'black', width: '20px', height: '20px' }} />
                                </NavLink>
                                <div className="btn-wrapper">
                                    <NavLink to="#" className="btn btn-red"><img src="/img/add.svg'" alt="" /> {screenSize.width < 991 ? `Add` : `Add business`}</NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}
export default Header;