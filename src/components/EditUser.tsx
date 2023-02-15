import { Button } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { Params, useLocation, useParams } from "react-router-dom";

const EditUser = () => {
    const id = useParams();
    let url = "http://localhost:8080/User";

    const [userDetails, getUserDetails] = useState([
        {
            id: "-1",

            firstName: "firstName",
            middleName: "middleName",
            lastName: "lastName",
            contractLength: 1,
            emailAddress: "example@example.com",
        },
    ]);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.status == 200) {
                    response.json().then((data) => getUserDetails(data));
                }
            })
            .catch((error) => {
                console.log("Not found");
            });
    }, []);

    const [inputs, setInputs] = useState({
        id: "-1",
        firstName: "firstName",
        middleName: "middleName",
        lastName: "lastName",
        contractLength: 1,
        emailAddress: "example@example.com",
    });

    console.log(userDetails.find((item) => item.id == id.id));

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
        <div className="updateForm">
            <form onSubmit={handleSubmit}>
                <label className="formButton">
                    Enter the first name:
                    <input
                        type="string"
                        name="firstName"
                        defaultValue={
                            userDetails.find((item) => item.id == id.id)
                                ?.firstName || ""
                        }
                        onChange={handleChange}
                        className="inputButton"
                    />
                </label>
                <label className="formButton">
                    Enter the middle name:
                    <input
                        type="string"
                        name="middleName"
                        defaultValue={
                            userDetails.find((item) => item.id == id.id)
                                ?.firstName || ""
                        }
                        onChange={handleChange}
                        className="inputButton"
                    />
                </label>
                <label className="formButton">
                    Enter the last name:
                    <input
                        type="string"
                        name="lastName"
                        defaultValue={
                            userDetails.find((item) => item.id == id.id)
                                ?.lastName || ""
                        }
                        onChange={handleChange}
                        className="inputButton"
                    />
                </label>

                <label className="formButton">
                    Enter the contract length:
                    <input
                        type="number"
                        name="contractlenght"
                        defaultValue={
                            userDetails.find((item) => item.id == id.id)
                                ?.contractLength || ""
                        }
                        onChange={handleChange}
                        className="inputButton"
                    />
                </label>

                <label className="formButton">
                    Enter the email address:
                    <input
                        type="string"
                        name="emailAddress"
                        defaultValue={
                            userDetails.find((item) => item.id == id.id)
                                ?.emailAddress || ""
                        }
                        onChange={handleChange}
                        className="inputButton"
                    />
                </label>
                <label className="formButton">
                    Enter the email address:
                    <input
                        type="string"
                        name="emailAddress"
                        value={
                            userDetails.find((item) => item.id == id.id)?.id ||
                            ""
                        }
                        onChange={handleChange}
                        className="inputButton"
                    />
                </label>
                <input type="submit" />
            </form>
            <a href="/">Go Back</a>
        </div>
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
