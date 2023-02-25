import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    Route, Routes,
    NavLink
} from 'react-router-dom';

import styles from "./Router.module.css";
import Exit from "../../images/exit.png";
import Header from "../Header/Header";
import Home from "../../Pages/Home/Home";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";


function Router() {
    const [authed, setAuthed] = useState(true);
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exec path="/" element={<Home/>}/>
                {/*<Route path="/" element={authed?<Chat/>: <Login/>}/>*/}
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<h2 className={styles.h2}>Страница не найдена</h2>}/>
            </Routes>
            <Footer/>

        </BrowserRouter>
    )
}

export default Router;