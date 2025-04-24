import { restaurantlist } from "../data/restaurantlist ";
import Headline from "./Headline";
import SmallCards from "./SmallCards";
const Restaurant = ({ maxPost }) => {
    return (
        <>
            <section className="restaurant standard-text _pv-100 _bg-white">
                <div className="container">
                    <Headline title="Where to eat" />
                    <div className="row gap-20">
                        {restaurantlist.slice(0, maxPost).map((list, index) => {
                            return (
                                <div className="col-md-6 col-lg-4" key={index}>
                                    <SmallCards list={list} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Restaurant;