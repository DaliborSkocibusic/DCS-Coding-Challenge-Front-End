import { useEffect, useState } from "react";
import Users from "../components/Users";
import { configureStore } from "@reduxjs/toolkit";
import Card from "@mui/material/Card";

// import style from "./../../styles/containers.module.scss";
//

// // function UserCard({ key, data }: { key: number; data: any }) {
// function UserCard({ data2 }: { data2: any }) {
//     return (
//         <div>
//             {data2.map(
//                 (value: any, i: number) => (
//                     // alert("in generate user list"),
//                     alert(JSON.stringify(value)),
//                     (
//                         <div>
//                             {/* {alert(JSON.stringify(data))},
//                         {alert(JSON.stringify(data))},
//                     {alert(JSON.stringify(value)} */}
//                             <UserCard
//                                 // console.log("value: " + value + " i: " + i ),
//                                 key={i}
//                                 data2={value}
//                                 //  code={expiation.expiationOffenceCode}
//                                 //  description={expiation.expiationOffenceDescription}
//                                 //  category={expiation.expiationCategory}
//                             />
//                             <p>{JSON.stringify(value)}</p>
//                             {/* {alert(JSON.stringify(value))} */}
//                         </div>
//                     )
//                 ),
//                 // alert("end generate user list"),
//             )}
//         </div>
//     );
// }

const ResultContainer = () => {
    const [users, setUsers] = useState<any>([]);
    const [query, setQuery] = useState("");

    // const searchQuery = (evt) => {
    //     const value = document.querySelector('[name="searchText"]').value;
    //     setQuery(value);
    // };
    // alert(JSON.stringify(users));

    useEffect(() => {
        fetch("http://localhost:8080/User").then((response) => {
            if (response.status == 200) {
                response.json().then((data) => setUsers(data)); //alert(JSON.stringify(data)));
            }
        });
    }, []);

    // // generateUserList(users);
    // users.map((element: any) => {
    //     // alert(element);
    // });

    return (
        <>
            {/* {JSON.stringify(users)} */}
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
                    {/* <div>{JSON.stringify(value)}</div> */}
                    <div className="Test">{generateUserListSingle(value)}</div>
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

    return (
        <Card className="card logo react" variant="outlined">
            <div className="nameContainer">
                <div className="firstName">
                    <div>First Name</div>
                    <div>{firstName}</div>
                </div>
                <div className="firstName">
                    <div>MiddleName</div>
                    <div>{middleName}</div>
                </div>
                <div className="firstName">
                    <div>LastName</div>
                    <div>{lastName}</div>
                </div>
            </div>
            <p>Contract Length</p>
            <p>{contractLength}</p>
            <p>Email Address</p>
            <p>{emailAddress}</p>
        </Card>
    );
}
{
    /* {alert("end generate user list")} */
}
