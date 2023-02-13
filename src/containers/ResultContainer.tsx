import { useEffect, useState } from "react";
import Users from "../components/Users";
import { configureStore } from "@reduxjs/toolkit";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const ResultContainer = () => {
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        fetch("http://localhost:8080/User").then((response) => {
            if (response.status == 200) {
                response.json().then((data) => setUsers(data)); //alert(JSON.stringify(data)));
            }
        });
    });

    return (
        <>
            <h1 className="contrastColour">Employee List</h1>;
            {generateUserList(users)}
        </>
    );
};

export default ResultContainer;

function generateUserList(data: any) {
    return (
        <div className="test">
            {data.map((value: any, i: number) => (
                <div key={i}>
                    <div>{generateUserListSingle(value)}</div>
                </div>
            ))}
        </div>
    );
}

// Delete format needed by server
// {
//     "firstName": "Dalibor",
//     "middleName": "Dali",
//     "lastName": "Stevens",
//     "contractLength": 50,
//     "emailAddress": "D@Dali.com"
// },

function deleteUser(id: any) {
    // POST request using fetch with error handling
    const requestOptions = {
        method: "DELETE",
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

function generateUserListSingle(data2: any) {
    for (let i in data2) {
        switch (i) {
            case "id":
                var id = data2[i];
                break;

            case "firstName":
                var firstName = data2[i];
                break;

            case "middleName":
                var middleName = data2[i];
                break;

            case "lastName":
                var lastName = data2[i];
                break;

            case "contractLength":
                var contractLength = data2[i];
                break;

            case "emailAddress":
                var emailAddress = data2[i];
                break;
        }
    }

    let url = "localhost:5173/" + JSON.stringify(id);

    return (
        <Card className="card logo react hoverForCards" variant="outlined">
            <div className="topContainer">
                <div className="firstName">
                    <div className="nameField">
                        {firstName} {middleName} {lastName} {id}
                    </div>
                </div>

                <div className="editButtons">
                    <div className="nameField">Edit</div>
                    <div>
                        <Button
                            variant="contained"
                            color="error"
                            className="blackFont"
                            onClick={() => deleteUser({ id })}>
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
            <div className="bottomContainer">
                <div className="emailAddress">
                    Contract Length - {contractLength}
                </div>
                <div className="emailAddress">
                    Email Address: {emailAddress}
                </div>
            </div>
        </Card>
    );
}
