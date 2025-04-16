import { activities } from '../data/activities';
import starIcon from '../../public/img/star.svg';
import mapIcon from '../../public/img/map.svg';
import Headline from './Headline';
import SlickSlider from './SlickSlider';

const ActivityCards = ({ maxPost }) => {
    let customSliderSettings = {
        slidesToShow: 4,
    }
    return (
        <>
            <section className="cards _activity standard-text _pv-100 _bg-white">
                <div className="container">
                    <Headline title="Popular activities" />
                    <div className="row gap-20">
                        <SlickSlider settings={customSliderSettings}>
                            {activities.slice(0, maxPost).map((el, index) => {
                                return (
                                    <div className="col-lg-3 slider-item" key={index}>
                                        <div className="_img">
                                            <img src={el.img} alt="" />
                                        </div>
                                        <div className="cards__body">
                                            <div className="_category">
                                                <span>{el.category}</span>
                                            </div>
                                            <h4>{el.name}</h4>
                                            <p>{el.description}</p>
                                            <div className="cards__icon-text">
                                                <div className="item">
                                                    <img src={starIcon} alt="" />
                                                    <p>{el.rating} <span>({el.totalReviews})</span></p>
                                                </div>
                                                <div className="item">
                                                    <img src={mapIcon} alt="" />
                                                    <p>{el.location}</p>
                                                </div>
                                            </div>
                                            <h5>${el.price}</h5>
                                        </div>
                                    </div>
                                )
                            })}
                        </SlickSlider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ActivityCards;