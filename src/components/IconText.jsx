
import starIcon from '../../public/img/star.svg';
import mapIcon from '../../public/img/map.svg';
import costIcon from '../../public/img/cost.svg';
import { NavLink } from "react-router-dom";
const IconText = ({ rating, reviews, cost, location }) => {
    return (
        <>
            <div className="icon-text">
                {rating &&
                    <div className="item">
                        <img src={starIcon} alt="" />
                        <p>{rating}<span>({reviews})</span></p>
                    </div>
                }
                {
                    cost && (
                        <div className="item">
                            <img src={costIcon} alt="" />
                            <p>{cost}</p>
                        </div>
                    )
                }
                {
                    location && (
                        <div className="item">
                            <img src={mapIcon} alt="" />
                            <p>{location}</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default IconText;