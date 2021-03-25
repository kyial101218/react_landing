import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/bg.png'
import {HelpCard} from '../HelpCard'
import {HelpCard2} from '../HelpCard2'
import natPic from '../../images/nat.png'


export const MainPage = () => {

    const data = [
        {
            title: "Weight Lifting",
            bg: "#FFE2DE"
        }, {
            title: "Running  & Spinning",
            bg: "#C4E769"
        }, {
            title: "Pumping Iron",
            bg: "#62D0DF"
        }, {
            title: "Pumping Iron",
            bg: "#0052C1"
        },
    ]

    const data2 = [
        {
            title: "Physical Health",
            bg: "#22356F"
        },
        {
            title: "Mental Health",
            bg: "#0052C1"
        },
        {
            title: "Nutrition",
            bg: natPic
        },
        {
            title: "Gymnastics",
            bg: "#62D0DF"
        }, {
            title: "Crossfit",
            bg: "#DEE1FF"
        }, {
            title: "Aerobics",
            bg: "#8F00FF"
        }

    ]
    return (
        <div className={
            css.mainPage
        }>
            <div className={
                css.container
            }>
                <nav>
                    <span>Thrivetalk</span>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Blogs</li>
                    </ul>
                    <button>CONTACT US</button>
                </nav>

                <div className={
                    css.mainBlock
                }>
                    <div>
                        <p>Thrivetalk</p>
                        <h3>HELPING YOU THRIVE
                                                                                                        IN ALL AREAS OF LIFE</h3>
                        <p>Our highly talented therapists can help you with a range of
                                                    issues including relationships, sex, PTSD, depression, social
                                                                                                        anxiety, or even just caring for yourself more.</p>
                        <div>
                            <button>WHO AM I</button>
                            <button>WHAT DO I DO</button>
                        </div>
                    </div>
                    <div>
                        <img src={mainPic}
                            alt=""/>
                    </div>
                </div>
            </div>
            
            <h3 align="center">WE CAN HELP YOU WITH</h3>
            <div className={
                css.container2
            }>
                {
                data.map((item, id) => {
                    return <HelpCard title={
                            item.title
                        }
                        bg={
                            item.bg
                        }
                        key={id}/>
                })
            } </div>
            <div className={
                css.container3
            }>
                
                {
                data2.map((item, id) => {
                    return <HelpCard2 title={
                            item.title
                        }
                        bg={
                            item.bg
                        }
                        key={id}/>
                })
            } </div>
        </div>


    );

}
