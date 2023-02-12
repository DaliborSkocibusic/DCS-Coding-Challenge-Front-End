import { useEffect, useState } from "react";
import Users from "../components/Users";
import { configureStore } from "@reduxjs/toolkit";
import Card from "@mui/material/Card";

const ResultContainer = () => {
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        fetch("http://localhost:8080/User").then((response) => {
            if (response.status == 200) {
                response.json().then((data) => setUsers(data)); //alert(JSON.stringify(data)));
            }
        });
    }, []);

    return (
        <>
            <h1 className="contrastColour">Employee List</h1>;
            {generateUserList(users)}
        </>
    );
};

export default ResultContainer;

function generateUserList(data: any) {
    // alert(JSON.stringify(data));
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

function generateUserListSingle(data2: any) {
    // alert(JSON.stringify(data2));

    for (let i in data2) {
        switch (i) {
            case "id":
                // alert("ID: " + data2[i]);
                var id = data2[i];
                break;

            case "firstName":
                // alert("First Name: " + data2[i]);
                var firstName = data2[i];
                break;

            case "middleName":
                // alert("Middle Name: " + data2[i]);
                var middleName = data2[i];
                break;

            case "lastName":
                // alert("Last Name: " + data2[i]);
                var lastName = data2[i];
                break;

            case "contractLength":
                // alert("Contract Length: " + data2[i]);
                var contractLength = data2[i];
                break;

            case "emailAddress":
                // alert("Email Address: " + data2[i]);
                var emailAddress = data2[i];
                break;
        }
    }

    let url = "localhost:5173/" + JSON.stringify(id);
    return (
        <Card className="card logo react hoverForCards" variant="outlined">
            <div className="topContainer">
                <div className="firstName">
                    {/* <div className="nameField">First Name</div> */}
                    <div className="nameField">
                        {firstName} {middleName} {lastName} {id}
                    </div>
                </div>

                {/* Cant be a href needs to send post request */}
                <div className="editButtons">
                    <div className="nameField">Edit</div>

                    {/* Cant be a href needs to send delete request */}
                    <a href={url} className="nameField">
                        Remove
                    </a>
                </div>
            </div>
            <div className="bottomContainer">
                <div className="emailAddress">
                    Contract Length - {contractLength}
                </div>
                <div className="emailAddress">
                    Email Address: {emailAddress}
                </div>
                {/* <a href="subdoimain to go go" className="emailAddress"></a> */}
            </div>
        </Card>
    );
}
{
    /* {alert("end generate user list")} */
}
