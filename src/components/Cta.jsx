import googleplay from "../../public/img/googleplay.svg";
import mobile from "../../public/img/mobile.svg";
import { NavLink } from "react-router-dom";
const Cta = () => {
    return (
        <>
            <section className="cta  standard-text _pv-100">
                <div className="container">
                    <div className="row align-items-center cta-row gap-20">
                        <div className="col-lg-4">
                            <div className="cta__text">
                                <h3>Download Finder App</h3>
                                <p>Discover all your travel essentials and more with ease in the Finder app!</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cta__links">
                                <NavLink to="#">
                                    <img src={googleplay} alt="" />
                                </NavLink>
                                <NavLink to="#">
                                    <img src={googleplay} alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cta__img">
                                <img src={mobile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta;