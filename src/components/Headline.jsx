import { NavLink } from "react-router-dom"
const Headline = ({ title }) => {
    return (
        <div className="row _pb-50">
            <div className="col-12 cards__head">
                <h2>{title}</h2>
                <div className="btn-wrapper mt-0">
                    <NavLink to="#" className="link link-text">View All</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Headline;