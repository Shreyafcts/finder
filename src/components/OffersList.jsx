import { offers } from '../data/offers';
import Headline from './Headline';
const OffersList = ({ maxPost }) => {
    return (
        <>
            <section className="cards standard-text _pv-100 _bg-white">
                <div className="container">
                    <Headline title="Top offers" />
                    <div className="row gap-20">
                        {offers.slice(0, maxPost).map((el, index) => {
                            return (
                                <div className="col-lg-4" key={index}>
                                    <img src={el} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default OffersList;