import React from "react";
import { useEffect } from "react";

const Poll = () => {
    useEffect(() => {
        fetch(
            "http://localhost:8080/", // +
            // region +
            // "&year=" +
            // validYear +
            // "&inclZero=false",
        )
            .then((response) => {
                if (response.status == 200) {
                    response
                        .json()
                        // .then((data) => console.log(JSON.stringify(data)))
                        .then((data) => console.log(data));
                }
            })
            .catch((error) => {
                // <NotFound expiationCode="error" />;
                console.log(error);
            });
    }, []);

    return <div>poll</div>;
};

export default Poll;
