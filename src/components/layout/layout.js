import * as React from "react"
import Header from "../header/Header"
import {container} from './layout.module.css'

const Layout = ({children}) => {
    return (
        <main className={container}>
            <title>pageTitle</title>
            <Header/>
            {children}
        </main>
    )
}

export default Layout
