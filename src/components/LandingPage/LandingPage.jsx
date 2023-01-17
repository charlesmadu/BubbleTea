import React from "react";
import "./LandingPage.css";

import ModalImage  from "react-modal-image";

//import burger from "../../images/burger.png"
import food from "../../images/food.jpeg"
//import drinks from "../../images/boba.png"
import drinks from "../../images/drink.png"
// import shisha from "../../images/shisha.png"
import shisha from "../../images/shisha_new.jpeg"
import footer from "../../images/logoistrans.png";



import food_menu from "../../images/food_menu.png";
import drinks_menu from "../../images/drinks_menu.png";
import shisha_menu from "../../images/shisha_menu.png";

export default function LandingPage () {
    const foodRef = React.createRef();
    const drinksRef = React.createRef();
    const shishaRef = React.createRef();

    const  openContentFullscreen = (imageRef) => {    
        if (imageRef.current.toggleModal) {
            imageRef.current.toggleModal();
        }
    }


    return(
        <div className="landing">
            <div className="hero">
                <div className="black">
                    <img className="kj" src={footer}  alt="Drinks image"/> 
                </div>
                <h1 className="hero_title">Bubble Tea Bar</h1>
                <h1 className="sub_hero_title">Delicious food for every mood</h1>
            </div>
            <div className="menus">
                <h1 className="wwo">What We Offer</h1>
                <h2 className="sub_wwo">Curious? Check out our menus below</h2>
                <div className="menu_option">

                    <div className="tab">
                        <div className="menu_image">
                            <img className="boba_icon" src={drinks}  alt="Drinks image"/> 
                        </div>
                        <div className="menu_text">
                            <h1 className="">Drinks</h1>
                            <a className="link" onClick={() => {openContentFullscreen(shishaRef);}}>click to view menu</a>
                            <ModalImage ref={shishaRef} className="imim" large={drinks_menu} alt="Menu" />
                        </div>
                    </div>

                    <div className="tab pdl">
                        <div className="menu_image">
                            <img className="food_icon" src={food} alt="Food image"/> 
                        </div>
                        <div className="menu_text">
                            <h1 className="">Food</h1>
                            <a className="link" onClick={() => {openContentFullscreen(foodRef);}}>click to view menu</a>
                            <ModalImage ref={foodRef} className="imim" large={food_menu} alt="Menu" />
                        </div>
                    </div>

                    <div className="tab pdl">
                        <div className="menu_image">
                            <img className="shisha_icon" src={shisha} alt="Shisha Image"/> 
                        </div>
                        <div className="menu_text">
                            <h1 className="">Shisha</h1>
                            <a className="link" onClick={() => {openContentFullscreen(drinksRef);}}>click to view menu</a>
                            <ModalImage ref={drinksRef} className="imim" large={shisha_menu} alt="Menu" />
                        </div>
                    </div>


                </div>
            </div>
            <div className="footer">
                <div className="side">
                    <div className="side_table">
                        <div className="side_table_text">
                            <h1 className="st_title">Opening Hours</h1>
                            <p className="option">Mon: Closed </p>
                            <p className="option">Tuesday-Saturday: 1-7pm</p>
                            <p className="option">Sunday: 1-6pm</p>
                        </div>

                        <div className="side_table_text">
                            <h1 className="st_title">Bubble Tea Bar</h1>
                            <p className="option">49 Garden Lane</p>
                            <p className="option">Chester</p>
                            <p className="option">CH1 4EN</p>
                        </div>

                        <div className="side_table_text">
                            <h1 className="st_title">Follow us on</h1>
                            <p className="option">Instagram: @bubbleteabarchester & @bubbleloungechester</p>
                            <p className="option">Facebook: Bubble Tea Bar Chester</p>
                        </div>

                        <div className="side_table_text">
                            <h1 className="st_title">Contact details</h1>
                            <p className="option">Email: info.bubbleteabar@gmail.com</p>
                            <p className="option">01244 377111</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}