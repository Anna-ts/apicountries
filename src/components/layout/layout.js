import * as React from "react"
import useLocalStorage from 'use-local-storage'
import Header from "../header/Header"
import {container} from './layout.module.css'
import {useEffect} from "react";

const Layout = ({children}) => {

    useEffect(() => {
        return () => {


    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }

    return (
        <main className={container} data-theme={theme}>
            <title>pageTitle</title>
            <Header theme={theme} switchTheme={switchTheme}/>
            {children}
        </main>
    )
        };
    }, []);
}

export default Layout
