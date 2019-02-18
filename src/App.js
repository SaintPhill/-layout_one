import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <>
                <header id='hero' className="hero">
                    <div className="bg-element1"/>
                    <div className="bg-element2"/>
                    <div className="bg-element3"/>
                    <div className="bg-element4"/>
                    <div className="bg-element5 animated fadeInDown"/>
                    <div className="bg-element6 animated fadeInUp"/>
                    <div className="bg-element7"/>
                    <div className="bg-element8"/>
                    <div className="bg-element9">
                        <div className="bg-element9_first"/>
                        <div className="bg-element9_second"/>
                        <div className="bg-element9_third"/>
                    </div>
                    <div className="bg-element10">
                        <div className="bg-element9_first"/>
                        <div className="bg-element9_second"/>
                        <div className="bg-element9_third"/>
                    </div>
                    <div className="bg-element11"/>
                    <div className="bg-element12"/>
                    <div className="bg-element13"/>
                    <div className="bg-element14"/>
                    <div className="bg-element15"/>
                    <img src="./img/logo.png" className='logo animated fadeInDown' alt="wayUP"/>
                    <div className="offer animated fadeInLeft">
                        <div className="offer_intro">
                            HTML/CSS/JS<br/>
                            делают мою жизнь круче
                        </div>
                        <div className="offer_title">
                            Я — junior разработчик<br/>
                            <span className='offer_addition'>
                              И горжусь этим
                          </span>
                        </div>
                        <a onClick={() => alert(`Мой номер телефона +7 923 244 6023; Бойко Филипп`)} href="#"
                           className='offer_btn  animated fadeInUp'>Связаться со мной</a>
                    </div>
                    <div className="man animated zoomIn">
                        <div className="man_circle man_circle_left animated fadeInRight"/>
                        <div className="man_circle man_circle_right animated fadeInLeft"/>
                    </div>


                </header>
            </>
        );
    }
}

export default App;

