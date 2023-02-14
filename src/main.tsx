import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import App from "./App";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import UserInput from "./components/EditUser";
import ResultContainer from "./containers/ResultContainer";
import "./index.css";

function ReturnUserID() {
    // Get the userId param from the URL.
    let { userId } = useParams();
    // ...
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />

                <Route path="/EditUser" element={<EditUser />} />
                <Route path="/EditUser/:id" element={<EditUser />} />
                <Route path="/Create" element={<CreateUser />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
