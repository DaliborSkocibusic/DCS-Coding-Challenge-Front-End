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

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        createUser(inputs);
        // alert(JSON.stringify(inputs));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter the first name:
                    <input
                        type="string"
                        name="firstName"
                        value={inputs.firstName || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Enter the middle name:
                    <input
                        type="string"
                        name="middleName"
                        value={inputs.middleName || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Enter the last name:
                    <input
                        type="string"
                        name="lastName"
                        value={inputs.lastName || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Enter the contract length:
                    <input
                        type="number"
                        name="contractlenght"
                        value={inputs.contractLength || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Enter the email address:
                    <input
                        type="string"
                        name="emailAddress"
                        value={inputs.emailAddress || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
            <a href="/">Go Back</a>
        </>
    );
};
export default UserInput;

function createUser(inputs: any) {
    // POST request using fetch with error handling
    alert("Inputs are: " + inputs);
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: inputs,
    };

    let alertvar = "We are passing in : " + JSON.stringify(requestOptions);

    alert(alertvar);
    alert(typeof inputs);
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