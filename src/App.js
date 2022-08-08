import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    Routes,
    Route,
} from "react-router-dom";
import LogIn from "Components/Pages/LogIn/LogIn";
import Main from "Components/Pages/Main/Main";
import SensorsList from "Components/Pages/SensorsList/SensorsList";
import SensorDetails from "./Components/Pages/SensorDetails/SensorDetails";
import Header from "Components/Widgets/Header/Header";
import ProtectedRoute from "Components/Widgets/ProtectedRoute/ProtectedRoute";
import { getAuthenticatedUser } from "Redux/User/UserSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthenticatedUser());
    }, []) //eslint-disable-line

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sensors" element={ProtectedRoute(SensorsList)} />
                <Route path="/sensors/:id" element={ProtectedRoute(SensorDetails)} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </div>
    );
}

export default App;
