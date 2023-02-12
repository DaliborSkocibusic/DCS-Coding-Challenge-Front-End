import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import ResultContainer from "./containers/ResultContainer";

function App() {
    return <ResultContainer />;
}

export default App;

// <div className="logo react">
//     <TextField variant="standard" label="Username" />
//     <br></br>
//     <br />
//     <TextField variant="standard" label="Username" />
//     <br></br>
//     <TextField variant="standard" label="Username" />
//     <br></br>
// </div>;

// const [count, setCount] = useState(0);
// <div className="card">
//     <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//     </button>
// </div>;
