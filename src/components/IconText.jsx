
import starIcon from '../../public/img/star.svg';
import { BsGeoAlt } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useTheme } from '../context/ThemeProvider';
import { BsWallet } from "react-icons/bs";

const IconText = ({ rating, reviews, cost, location }) => {
    const { darkMode } = useTheme();
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
                            <BsWallet style={{ color: darkMode ? 'white' : 'black' }} />
                            <p>{cost}</p>
                        </div>
                    )
                }
                {
                    location && (
                        <div className="item">
                            <BsGeoAlt style={{ color: darkMode ? 'white' : 'black' }} />
                            <p>{location}</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default IconText;