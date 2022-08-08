import {
    Routes,
    Route,
} from "react-router-dom";
import LogIn from "Components/Pages/LogIn/LogIn";
import Main from "Components/Pages/Main/Main";
import SensorsList from "Components/Pages/SensorsList/SensorsList";
import SensorDetails from "./Components/Pages/SensorDetails/SensorDetails";
import Header from "Components/Widgets/Header/Header";

function App() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sensors" element={<SensorsList />} />
            <Route path="/sensors/:id" element={<SensorDetails />} />
            <Route path="/login" element={<LogIn />} />
        </Routes>
    </div>
  );
}

export default App;
