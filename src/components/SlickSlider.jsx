
import Slider from "react-slick";
const SlickSlider = ({ children, settings: customSliderSettings }) => {
    var defaultSettings = {
        infinite: true,
        autoplay: false,
        arrows: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        swipeToSlide: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    draggable: true,
                    swipe: true,
                    touchMove: true,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    draggable: true,
                    swipe: true,
                    touchMove: true,
                    swipeToSlide: true,
                },
            },
        ],
    };
    var finalSettings = { ...defaultSettings, ...customSliderSettings };
    return (
        <>
            <Slider {...finalSettings}>
                {children}
            </Slider>
        </>
    )
}
export default SlickSlider