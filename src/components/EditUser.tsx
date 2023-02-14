import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const EditUser = () => {
    // alert("WORKS");
    const { id } = useParams();

    let cleanId = id;
    console.log("clean id is: " + cleanId);

    let userDetails = fetch("http://localhost:8080/User")
        .then((response) => response.json())
        .then((text) => {
            return text.find((user: any) => user.id === cleanId);
        });

    let stuff = getData;
    console.log("Get user test" + userDetails);
    const [inputs, setInputs] = useState({
        firstName: "firstName",
        middleName: "middleName",
        lastName: "lastName",
        contractLength: 1,
        emailAddress: "example@example.com",
    });

    let inputsadf = "INPUT IS: " + JSON.stringify(inputs.contractLength);

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        updateUser(inputs);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter the first name:
                    <input
                        type="string"
                        name="firstName"
                        value={userDetails.firstName || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Enter the middle name:
                    <input
                        type="string"
                        name="middleName"
                        value={userDetails.middleName || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Enter the last name:
                    <input
                        type="string"
                        name="lastName"
                        value={userDetails.lastName || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Enter the contract length:
                    <input
                        type="number"
                        name="contractlenght"
                        value={userDetails.contractLength || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Enter the email address:
                    <input
                        type="string"
                        name="emailAddress"
                        value={userDetails.emailAddress || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
            <a href="/">Go Back</a>
        </>
    );
};
export default EditUser;

function updateUser(inputs: any) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(inputs),
    };

    let alertvar = "We are passing in : " + JSON.stringify(requestOptions);

    const createUrl = "http://localhost:8080/User";
    fetch(createUrl, requestOptions).then(async (response) => {
        const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
        const data = isJson && (await response.json());

        if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }
    }),
        [];
}

async function getData(url: RequestInfo | URL) {
    const response = await fetch(url);

    return response.json();
}
