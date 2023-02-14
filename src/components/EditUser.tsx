import { Button } from "@mui/material";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const EditUser = () => {
    // alert("WORKS");
    const { id } = useParams();
    const ler = useLocation();

    alert(id);
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
        createUser(inputs);
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
export default EditUser;

function createUser(inputs: any) {
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

function getUser(id: any) {
    // POST request using fetch with error handling
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },

        // Needs post body otherwise it doesnt refresh..
        body: JSON.stringify({
            firstName: "John",
            middleName: "Smith",
            lastName: "Stevens",
            contractLength: 50,
            emailAddress: "Test@Test.com",
        }),
    };

    let alertvar = "Getting user id: " + id["id"];

    alert(alertvar);
    const deleteUrl = "http://localhost:8080/User/" + id["id"];
    fetch(deleteUrl, requestOptions).then(async (response) => {
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
