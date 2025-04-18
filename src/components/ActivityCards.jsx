import { activities } from '../data/activities';
import IconText from './IconText';
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
                                        <div className="_activity-box">
                                            <div className="_img">
                                                <img src={el.img} alt="" />
                                            </div>
                                            <div className="cards__body">
                                                <div className="_category">
                                                    <span>{el.category}</span>
                                                </div>
                                                <h4>{el.name}</h4>
                                                <p>{el.description}</p>
                                                <IconText rating={el.rating} reviews={el.totalReviews} location={el.location} />
                                                <h5>${el.price}</h5>
                                            </div>
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