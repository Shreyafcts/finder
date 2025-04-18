
import starIcon from '../../public/img/star.svg';
import IconText from './IconText';

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
                    <IconText cost={cost} location={location} />
                </div>
            </div>
        </>
    )
}
export default SmallCards;
