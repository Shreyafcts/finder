import { hotels } from "../data/hotels";
import starIcon from '../../public/img/star.svg';
import mapIcon from '../../public/img/map.svg';
import costIcon from '../../public/img/cost.svg';
import Headline from "./Headline";


const Vacationspot = ({ maxPost }) => {
    return (
        <>
            <section className="cards standard-text _pv-100 _bg-white">
                <div className="container">
                    <Headline title="Popular vacation spots" />
                    <div className="row gap-20">
                        {hotels.slice(0, maxPost).map((el, index) => {
                            return (
                                <div className="col-lg-4" key={index}>
                                    <div className="_img">
                                        <img src={el.img} alt="" />
                                    </div>
                                    <div className="cards__body">
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