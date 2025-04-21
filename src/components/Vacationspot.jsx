import { hotels } from "../data/hotels";
import Headline from "./Headline";
import IconText from "./IconText";
import SlickSlider from "./SlickSlider";

const Vacationspot = () => {
    return (
        <>
            <section className="cards standard-text _pv-100 _bg-white">
                <div className="container">
                    <Headline title="Popular vacation spots" />
                    <div className="row">
                        <SlickSlider>
                            {hotels.map((el, index) => {
                                return (
                                    <div className="slider-item" key={index}>
                                        <div className="_img">
                                            <img src={el.img} alt="" />
                                        </div>
                                        <div className="cards__body">
                                            <h4>{el.name}</h4>
                                            <IconText rating={el.rating} reviews={el.totalReviews} cost={el.cost} location={el.location} />
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
export default Vacationspot;