import * as React from "react"
import {header, logo} from './header.module.css'



const Header = () => {

    return (
        <header className={header}>
            <div className={logo}>
                <span>Where in the world?</span>
            </div>
        </header>
    )
}

export default Header
