import { hotels } from "../data/hotels";
import starIcon from '../../public/img/star.svg';
import mapIcon from '../../public/img/map.svg';
import costIcon from '../../public/img/cost.svg';
import { NavLink } from "react-router-dom";

const Vacationspot = () => {
    return (
        <>
            <section className="cards standard-text _pv-100 _bg-white">
                <div className="container">
                    <div className="row _pb-50">
                        <div className="col-12 cards__head">
                            <h2>Popular vacation spots</h2>
                            <div class="btn-wrapper mt-0">
                                <NavLink to="#" class="link link-text">View All</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row gap-20">
                        {hotels.map((el, index) => {
                            return (
                                <div className="col-lg-4" key={index}>
                                    <div className="cards__body">
                                        <div className="_img">
                                            <img src={el.img} alt="" />
                                        </div>
                                        <h4>{el.name}</h4>
                                        <div className="cards__icon-text">
                                            <div className="item">
                                                <img src={starIcon} alt="" />
                                                <p>{el.rating} <span>({el.totalReviews})</span></p>
                                            </div>
                                            <div className="item">
                                                <img src={costIcon} alt="" />
                                                <p>{el.cost}</p>
                                            </div>
                                            <div className="item">
                                                <img src={mapIcon} alt="" />
                                                <p>{el.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Vacationspot;