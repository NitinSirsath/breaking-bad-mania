import React from "react";
import Header from "./Header";

import style from "../styles/layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {/* <div className={style.container}>{children}</div> */}
        </>
    );
};

export default Layout;