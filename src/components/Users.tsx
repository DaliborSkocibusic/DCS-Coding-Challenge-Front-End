import React from "react";
import style from "./ExpiationCard.module.scss";
import { useState } from "react";

const UserCard = ({ any: data }) => {
    // Got the code for hovering somewehre on stackexchagne...
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div
            className={style.ExpiationCard}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            {!isHovering && <div>{data}</div>}

            {isHovering && (
                <div className={style.ExpiationCard_Hovered}>
                    <div>Code: {data}</div>
                    {data}

                    {data != null ? (
                        <span>
                            <div>Cateogry Id: {data.category}</div>
                            <div>
                                Category Description:
                                {data.categoryDescription}
                            </div>
                        </span>
                    ) : (
                        <div>No Category Id Exists</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserCard;
