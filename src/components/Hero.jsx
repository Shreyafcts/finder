import { NavLink } from "react-router-dom";
const Hero = () => {
    return (
        <>
            <section className="hero standard-text _pv-100">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1>Start exploring Barcelona</h1>
                            <p>Find great places to stay, eat, shop, or visit from our partners and local experts.</p>
                            <div className="hero__container">
                                <div className="_search">
                                    <input type="text" placeholder="What are you looking for?" />
                                </div>
                                <div className="_category">
                                    <select name="cat">
                                        <option >Item-1</option>
                                        <option >Item2</option>
                                        <option >Item3</option>
                                        <option >Item4</option>
                                    </select>
                                </div>
                                <div className="btn-wrapper">
                                    <NavLink to="#" className="btn btn-red">Search</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;