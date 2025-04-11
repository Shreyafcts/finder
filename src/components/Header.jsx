import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import headerLogo from '../../public/img/header-logo.svg';
import themeIcon from '../../public/img/light.svg';
import accountIcon from '../../public/img/account.svg'
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
    const handleMenuTrigger = () => {
        setMenuOpen((prev) => !prev);
    }
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-4 col-lg-2 header__logo">
                            <img src={headerLogo} alt="" />
                        </div>
                        <div className="col-lg-7">
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
                        <div className="col-8 col-lg-3">
                            <div className="header__icons">
                                <NavLink to="#">
                                    <img src={themeIcon} alt="" />
                                </NavLink>
                                <NavLink to="#">
                                    <img src={accountIcon} alt="" />
                                </NavLink>
                                <div className="btn-wrapper">
                                    <NavLink to="#" className="btn btn-red">Add business</NavLink>
                                </div>
                                <div className={`menu-trigger${menuOpen ? ' active' : ''}`} onClick={handleMenuTrigger}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
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