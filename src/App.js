import './App.css';
import {
    Routes,
    Route,
} from "react-router-dom";
import LogIn from "Components/Pages/LogIn/LogIn";
import Header from "Components/Widgets/Header/Header";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/login" element={<LogIn />} />
        </Routes>
    </div>
  );
}

export default App;
