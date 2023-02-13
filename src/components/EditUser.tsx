import { Button } from "@mui/material";
import { useState } from "react";

// src/components/Topics.tsx
const UserInput = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        alert(inputs);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input
                        type="text"
                        name="username"
                        // value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Enter your age:
                    <input
                        type="number"
                        name="age"
                        // value={inputs.age || ""}
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

// edit format needed by server
// {
//     "firstName": "Dalibor",
//     "middleName": "Dali",
//     "lastName": "Stevens",
//     "contractLength": 50,
//     "emailAddress": "D@Dali.com"
// },

function editUser(id: any) {
    // POST request using fetch with error handling
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            firstName: "Dalibor",
            middleName: "Dali",
            lastName: "Stevens",
            contractLength: 50,
            emailAddress: "D@Dali.com",
        }),
    };

    let alertvar = "Deleting user id: " + id["id"];

    alert(alertvar);
    const editUrl = "http://localhost:8080/User/" + id["id"];
    fetch(editUrl, requestOptions).then(async (response) => {
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
