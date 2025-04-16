
import starIcon from '../../public/img/star.svg';
import mapIcon from '../../public/img/map.svg';
import costIcon from '../../public/img/cost.svg';

const SmallCards = ({ list, type }) => {
    const { img, name, rating, totalReviews, cost, location } = list;

    return (
        <>
            <div className="small-card">
                <div className={`_img ${type}`}>
                    <img src={img} alt="" />
                </div>
                <div className="small-card__info">
                    <h5>{name}</h5>
                    <div className="item">
                        <img src={starIcon} alt="" />
                        <p>{rating} <span>({totalReviews})</span></p>
                    </div>
                    <div className="_icon-text">
                        <div className="item">
                            <img src={costIcon} alt="" />
                            <p>{cost}</p>
                        </div>
                        <div className="item">
                            <img src={mapIcon} alt="" />
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SmallCards;
