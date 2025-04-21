import { NavLink } from "react-router-dom";
import seachIcon from '../../public/img/search.svg';
import catIcon from '../../public/img/category.svg';
import item1 from '../../public/img/item-1.svg';
import item2 from '../../public/img/item-2.jpg';
import item3 from '../../public/img/item-3.svg';
import item4 from '../../public/img/item-4.svg';
import item5 from '../../public/img/item-5.svg';
import itemd1 from '../../public/img/itemd-1.svg';
import itemd2 from '../../public/img/itemd-2.svg';
import itemd3 from '../../public/img/itemd-3.svg';
import itemd4 from '../../public/img/itemd-4.svg';
import decotop from '../../public/img/herodeco-1.svg';
import decobottom from '../../public/img/herodeco-2.svg';
import { useTheme } from "../context/ThemeProvider";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { BsGrid3X3 } from "react-icons/bs";

const Hero = () => {
    const lightItems = [
        {
            img: item1,
            title: "Accommodation",
        },
        {
            img: item2,
            title: "Shopping",
        },
        {
            img: item3,
            title: "Food & Drink",
        },
        {
            img: item4,
            title: "Entertainment",
        },
        {
            img: item5,
            title: "Health",
        },
    ]
    const darkItems = [
        {
            img: itemd1,
            title: "Accommodation",
        },
        {
            img: itemd2,
            title: "Shopping",
        },
        {
            img: itemd3,
            title: "Food & Drink",
        },
        {
            img: itemd4,
            title: "Entertainment",
        },
        {
            img: itemd1,
            title: "Health",
        },
    ]
    const { darkMode } = useTheme();
    const [searchtext, setsearchText] = useState("");
    const [debouncedInput, setDebouncedInput] = useState("");
    const handleInput = (e) => {
        let val = e.target.value;
        setsearchText(val);
    }
    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setDebouncedInput(searchtext);
        }, 500);
        return () => {
            clearTimeout(delayTimer);
        }
    }, [searchtext])
    return (
        <>
            <section className="hero standard-text _pv-100 _bg-white">
                <div className="hero__deco-top">
                    <img src={decotop} alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1>Start exploring Barcelona</h1>
                            <p>Find great places to stay, eat, shop, or visit from our partners and local experts.</p>
                            <div className="hero__container">
                                <div className="_search">
                                    <BsSearch style={{ color: darkMode ? 'white' : 'black' }} />
                                    <input type="text" value={searchtext} placeholder="What are you looking for?" onChange={(e) => { handleInput(e) }} />
                                </div>
                                <div className="_category">
                                    <BsGrid3X3 style={{ color: darkMode ? 'white' : 'black' }} />
                                    <select name="cat">
                                        <option >Item-1</option>
                                        <option >Item2</option>
                                        <option >Item3</option>
                                        <option >Item4</option>
                                    </select>
                                </div>
                                <div className="btn-wrapper">
                                    <NavLink to="#" className="btn btn-red">Search</NavLink>
                                </div>
                            </div>
                            <div className="hero__items">
                                {(darkMode ? darkItems : lightItems).map((el) => {
                                    return (
                                        <div key={el.index} className="_item">
                                            <img src={el.img} alt="" />
                                            <span>{el.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__deco-bottom">
                    <img src={decobottom} alt="" />
                </div>
            </section>
        </>
    )
}
export default Hero;