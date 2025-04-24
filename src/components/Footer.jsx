
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className="footer standard-text _pt-100 _bg-light-black text-white">
                <div className="container">
                    <div className="row justify-content-between gap-40">
                        <div className="col-lg-2">
                            <div className="footer__logo">
                                <img src="/img/footerlogo.svg" alt="" />
                            </div>
                            <div className="footer__contact">
                                <div className="_info">
                                    <img src="/img/mail.svg" alt="" />
                                    <p><NavLink to="#">contact@example.com</NavLink></p>
                                </div>
                                <div className="_info">
                                    <img src="/img/phone.svg" alt="" />
                                    <p><NavLink to="#">+1 50 537 53 082</NavLink></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h6>Quick links</h6>
                            <div className="footer__menu">
                                <ul>
                                    <li><NavLink to="#">Top cities</NavLink></li>
                                    <li><NavLink to="#">Top cities</NavLink></li>
                                    <li><NavLink to="#">Top cities</NavLink></li>
                                    <li><NavLink to="#">Top cities</NavLink></li>
                                    <li><NavLink to="#">Top cities</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h6>Quick links</h6>
                            <div className="footer__menu">
                                <ul>
                                    <li><NavLink to="#">Top cities</NavLink></li>
                                    <li><NavLink to="#">Top cities</NavLink></li>
                                    <li><NavLink to="#">Top cities</NavLink></li>
                                    <li><NavLink to="#">Top cities</NavLink></li>
                                    <li><NavLink to="#">Top cities</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h6>Subscribe to our newsletter</h6>
                            <div className="footer__email">
                                <img src="/img/mail.svg" alt="" />
                                <input type="text" placeholder='Your email' />
                            </div>
                            <div className="btn-wrapper">
                                <NavLink to="#" className="btn btn-red">Subscribe</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row footer__sub justify-content-between gap-20 _pb-50">
                        <div className="col-lg-4">
                            <p>Need help? <strong>Contact us</strong></p>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer__social">
                                <NavLink to="#">
                                    <img src="/img/insta.svg" alt="" />
                                </NavLink>
                                <NavLink to="#">
                                    <img src="/img/insta.svg" alt="" />
                                </NavLink>
                                <NavLink to="#">
                                    <img src="/img/insta.svg" alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <p>© All rights reserved. Made by <strong>Createx Studio</strong></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;