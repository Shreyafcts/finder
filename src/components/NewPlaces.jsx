import { newplaces } from "../data/newplaces";
import IconText from "./IconText";
import SlickSlider from "./SlickSlider";
import { NavLink } from "react-router-dom";
const NewPlaces = () => {
    let customSliderSettings = {
        slidesToShow: 1,
        infinite: false,
        dots: false,
        arrows: true,
        draggable: true,
        swipe: true,
        touchMove: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {

                },
            },
        ]
    }
    return (
        <>
            <section className="newplace standard-text _pv-100 _bg-white">
                <div className="container">
                    <div className="row _pb-50">
                        <div className="col-12">
                            <h2>What’s new in Barcelona</h2>
                        </div>
                    </div>
                    <div className="row">
                        <SlickSlider settings={customSliderSettings}>
                            {newplaces.map((list, index) => {
                                return (
                                    <div className="row gap-20 d-flex justify-content-between" key={index}>
                                        <div className="col-lg-5">
                                            <div className="_img">
                                                <img src={list.img} alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="_text">
                                                <h3>{list.name}</h3>
                                                <IconText rating={list.rating} reviews={list.totalReviews} cost={list.cost} location={list.location} />
                                                <p>{list.description}</p>
                                                <div className="btn-wrapper">
                                                    <NavLink to="#" className="btn btn-red"> View more</NavLink>
                                                </div>
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
    );
}
export default NewPlaces;