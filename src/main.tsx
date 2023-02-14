import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import UserInput from "./components/EditUser";
import ResultContainer from "./containers/ResultContainer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Edit/:id" element={<EditUser />} />
                <Route path="/Create" element={<CreateUser />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
