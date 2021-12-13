import React, { Component } from 'react'
import Preloader_1 from './Preloader/Preloader_1.gif'
import Preloader_2 from './Preloader/Preloader_2.gif'
import Preloader_3 from './Preloader/Preloader_3.gif'
import Preloader_4 from './Preloader/Preloader_4.gif'
import Preloader_5 from './Preloader/Preloader_5.gif'
import Preloader_6 from './Preloader/Preloader_6.gif'
import Preloader_7 from './Preloader/Preloader_7.gif'
import Preloader_8 from './Preloader/Preloader_8.gif'
import Preloader_9 from './Preloader/Preloader_9.gif'
import Preloader_10 from './Preloader/Preloader_10.gif'

export default class Loader extends Component {
    render() {
        return (
            <div className="d-flex">
                <img src={Preloader_1} alt="loader"/>
                <img src={Preloader_2} alt="loader"/>
                <img src={Preloader_3} alt="loader"/>
                <img src={Preloader_4} alt="loader"/>
                <img src={Preloader_5} alt="loader"/>
                <img src={Preloader_6} alt="loader"/>
                <img src={Preloader_7} alt="loader"/>
                <img src={Preloader_8} alt="loader"/>
                <img src={Preloader_9} alt="loader"/>
                <img src={Preloader_10} alt="loader"/>
            </div>
        )
    }
}
