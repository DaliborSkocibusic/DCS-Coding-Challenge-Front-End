import { useEffect, useState } from "react";
import Users from "../components/Users";
import { configureStore } from "@reduxjs/toolkit";

// import style from "./../../styles/containers.module.scss";
//

// function UserCard({ key, data }: { key: number; data: any }) {
function UserCard({ data2 }: { data2: any }) {
    return (
        <div>
            {data2.map(
                (value: any, i: number) => (
                    // alert("in generate user list"),
                    alert(JSON.stringify(value)),
                    (
                        <div>
                            {/* {alert(JSON.stringify(data))},
                        {alert(JSON.stringify(data))},
                    {alert(JSON.stringify(value)} */}
                            <UserCard
                                // console.log("value: " + value + " i: " + i ),
                                key={i}
                                data2={value}
                                //  code={expiation.expiationOffenceCode}
                                //  description={expiation.expiationOffenceDescription}
                                //  category={expiation.expiationCategory}
                            />
                            <p>{JSON.stringify(value)}</p>
                            {/* {alert(JSON.stringify(value))} */}
                        </div>
                    )
                ),
                // alert("end generate user list"),
            )}
        </div>
    );
}

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

    // generateUserList(users);
    users.map((element: any) => {
        // alert(element);
    });

    return (
        <section>
            {/* {JSON.stringify(users)} */}
            {generateUserList(users)}
        </section>
    );
};

export default ResultContainer;

// {
//     value.map((value2: any, i: number) => {
//         <div>
//             {/* <p>{JSON.stringify(value2)}</p>; */}
//         </div>;
//     });
// }

function generateUserList(data: any) {
    // alert(JSON.stringify(data));
    return (
        <section>
            {data.map(
                (value: any, i: number) => (
                    <div>
                        <p>{JSON.stringify(value)}</p>
                    </div>
                ),
                // alert("end generate user list"),
            )}
        </section>
    );
}

// const generateNullList = () => {
//     return <div>Sorry my dude, nothing found. Everyone is innocent</div>;
// };

// const generateSearchButton = (searchQuery) => {
//     return (
//         <div className="col text-left">
//             <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={searchQuery}>
//                 Search
//             </button>
//         </div>
//     );
// };

// const generateSearchBar = (searchQuery, expiations) => {
//     return (
//         <div className="col-12 SearchBar">
//             <input
//                 type="text"
//                 name="searchText"
//                 className="form-control-l"
//                 placeholder="Enter code or keywords"
//                 // TBH dont even need a search button now..
//                 onChange={searchQuery} // Added to make it more responsive
//                 list="datalist-search"
//                 id="search-choice"
//             />
//             {/* Sourece: Used to figure out map over datalist
//                     https://stackoverflow.com/questions/46978730/how-to-iterate-through-array-and-show-datalist-in-jsx*/}
//             {/* cant format but looks good in firefox. bad in chroem
//              */}
//             {/* https://stackoverflow.com/questions/13693482/is-there-a-way-to-apply-a-css-style-on-html5-datalist-options */}
//             <datalist id="datalist-search">
//                 {/* Populate datalist with expiation offence codes */}
//                 {expiations.map((expiation, i) => (
//                     <option
//                         key={i}
//                         value={expiation.expiationOffenceCode}></option>
//                 ))}

//                 {/* Populate datalist with expiation offence descriptions */}
//                 {expiations.map((expiation, i) => (
//                     <option
//                         key={i}
//                         value={expiation.expiationOffenceDescription}></option>
//                 ))}
//             </datalist>
//         </div>
//     );
// };

// export default ResultContainer;
