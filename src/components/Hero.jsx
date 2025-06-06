import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeProvider";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { BsGrid3X3 } from "react-icons/bs";

const Hero = () => {
    const lightItems = [
        {
            img: '/img/item-1.svg',
            title: "Accommodation",
        },
        {
            img: '/img/item-2.jpg',
            title: "Shopping",
        },
        {
            img: '/img/item-3.svg',
            title: "Food & Drink",
        },
        {
            img: '/img/item-4.svg',
            title: "Entertainment",
        },
        {
            img: '/img/item-5.svg',
            title: "Health",
        },
    ]
    const darkItems = [
        {
            img: '/img/itemd-1.svg',
            title: "Accommodation",
        },
        {
            img: '/img/itemd-2.svg',
            title: "Shopping",
        },
        {
            img: '/img/itemd-3.svg',
            title: "Food & Drink",
        },
        {
            img: '/img/itemd-4.svg',
            title: "Entertainment",
        },
        {
            img: '/img/itemd-1.svg',
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
                    <img src="/img/herodeco-1.svg" alt="" />
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
                                {(darkMode ? darkItems : lightItems).map((el, index) => {
                                    return (
                                        <div key={index} className="_item">
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
                    <img src="/img/herodeco-2.svg" alt="" />
                </div>
            </section>
        </>
    )
}
export default Hero;