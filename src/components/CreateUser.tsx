import { Button } from "@mui/material";
import { useState } from "react";

const UserInput = () => {
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
        createNewUser(inputs);
    };

    return (
        <div className="elementColumn">
            <form onSubmit={handleSubmit}>
                <div className="createRow">
                    <label>First name:</label>
                    <input
                        type="string"
                        name="firstName"
                        defaultValue={inputs.firstName || ""}
                        onChange={handleChange}
                        className="inputButton"
                    />
                </div>
                <div className="createRow">
                    <label>Middle name</label>
                    <input
                        type="string"
                        name="middleName"
                        defaultValue={inputs.middleName || ""}
                        onChange={handleChange}
                        className="inputButton"
                    />
                </div>
                <div className="createRow">
                    <label>Last name</label>
                    <input
                        type="string"
                        name="lastName"
                        defaultValue={inputs.lastName || ""}
                        onChange={handleChange}
                        className="inputButton"
                    />
                </div>

                <div className="createRow">
                    <label>Enter the contract length:</label>
                    <input
                        type="number"
                        name="contractlenght"
                        defaultValue={inputs.contractLength || ""}
                        onChange={handleChange}
                        className="inputButton"
                    />
                </div>

                <div className="createRow">
                    <label>Email address:</label>
                    <input
                        type="string"
                        name="emailAddress"
                        defaultValue={inputs.emailAddress || ""}
                        onChange={handleChange}
                        className="inputButton"
                    />
                </div>
                <input type="submit" onClick={() => alert("User Created")} />
            </form>
            <a href="/">Go Back</a>
        </div>
    );
};
export default UserInput;

function createNewUser(inputs: any) {
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
    });
}
