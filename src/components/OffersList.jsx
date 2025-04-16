import { offers } from '../data/offers';
import Headline from './Headline';
import SlickSlider from './SlickSlider';
const OffersList = ({ maxPost }) => {
    return (
        <>
            <section className="cards standard-text _pv-100 _bg-white">
                <div className="container">
                    <Headline title="Top offers" />
                    <div className="row gap-20">
                        <SlickSlider>
                            {offers.map((el, index) => {
                                return (
                                    <div className="col-lg-4 slider-item" key={index}>
                                        <img src={el} alt="" />
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
export default OffersList;