import React from "react";

import style from "./../styles/allstyles.module.scss"; // need to define later

const NotFound = ({ expiationCode } : {expiationCode: string}) => {
    console.log(NotFound);
    return expiationCode ? (
        <div className={style.NotFound}>{expiationCode} Has no values</div>
    ) : (
        <div className={style.NotFound__404}>
            404 Page not found The page you're looking for could not be found.
            It may have been moved or archived, or you may have followed a
            broken link on another site. You may also have bookmarked a page on
            our old site that no longer works.
        </div>
    );
};

export default NotFound;
