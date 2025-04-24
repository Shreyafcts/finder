// import personDeco from '../../public/img/person.svg';
import { restaurantlist } from '../data/restaurantlist ';
import { places } from '../data/places';
import Headline from './Headline';
import SmallCards from './SmallCards';
const BestOfCity = () => {
    const topRestaurant = restaurantlist[18]?.topRestaurant;
    return (
        <>
            <section className='best-city standard-text _pv-100 _bg-white'>
                <div className="container">
                    <Headline title="Best of Barсelona" />
                    <div className="row gap-40">
                        <div className="col-lg-4">
                            <div className='best-city__restaurant best-city__container'>
                                <h3>Top restaurants</h3>
                                {topRestaurant.slice(0, 3).map((list, index) => {
                                    return (
                                        <div className="best-city__items">
                                            <SmallCards list={list} key={index} type="toplist" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className='best-city__places best-city__container'>
                                <h3>Places to visit</h3>
                                {places.slice(0, 3).map((list, index) => {
                                    return (
                                        <div className="best-city__items">
                                            <SmallCards list={list} key={index} type="place" />
                                        </div>
                                    )
                                })}
                                <div className="deco-item">
                                    <img src="/img/person.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BestOfCity;