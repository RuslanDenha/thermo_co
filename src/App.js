import './App.css';
import {
    Routes,
    Route,
} from "react-router-dom";
import LogIn from "Components/Pages/LogIn/LogIn";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<LogIn />} />
        </Routes>
    </div>
  );
}

export default App;
