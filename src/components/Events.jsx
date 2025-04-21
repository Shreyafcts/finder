import { eventlist } from "../data/eventslist";
import { NavLink } from "react-router-dom";
import { BsClock } from "react-icons/bs";
import { BsCalendar4 } from "react-icons/bs";
import { useTheme } from "../context/ThemeProvider";
import SlickSlider from "./SlickSlider";
const Events = () => {
    let customSliderSettings = {
        slidesToShow: 1.5,
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
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 0.8,
                },
            },
        ]
    }
    const { darkMode } = useTheme();
    return (
        <>
            <section className="events standard-text _pv-100 _bg-white">
                <div className="container">
                    <div className="row _pb-50">
                        <div className="col-12">
                            <h2>Upcoming events in Barcelona</h2>
                        </div>
                    </div>
                    <div className="row">
                        <SlickSlider settings={customSliderSettings}>
                            {eventlist.map((list, index) => {
                                return (
                                    <div className="events__card">
                                        <div className="_img">
                                            <img src={list.img} alt="img" />
                                            <div className="_text">
                                                <div className="icon-text">
                                                    <div className="item">
                                                        <BsCalendar4 style={{ color: darkMode ? 'white' : 'black' }} />
                                                        <p>{list.date}</p>
                                                    </div>
                                                    <div className="item">
                                                        <BsClock style={{ color: darkMode ? 'white' : 'black' }} />
                                                        <p>{list.time}</p>
                                                    </div>
                                                </div>
                                                <h3>{list.title}</h3>
                                                <div className="btn-wrapper">
                                                    <NavLink to="#" className="btn btn-red"> Tickets from ${list.price}</NavLink>
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
    )
}
export default Events;