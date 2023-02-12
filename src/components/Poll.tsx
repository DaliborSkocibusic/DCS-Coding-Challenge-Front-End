import React from "react";
import { useEffect } from "react";

const Poll = () => {
    useEffect(() => {
        fetch(
            "http://localhost:8080/User",
            // { mode: "no-cors" },
            // +
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
                        .then((data) => alert(JSON.stringify(data)));
                }
            })
            .catch((error) => {
                // <NotFound expiationCode="error" />;
                console.log(error);
            });
    }, []);

    return <div>pollh</div>;
};

export default Poll;
