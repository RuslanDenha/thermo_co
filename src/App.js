import {
    Routes,
    Route,
} from "react-router-dom";
import LogIn from "Components/Pages/LogIn/LogIn";
import Main from "Components/Pages/Main/Main";
import Header from "Components/Widgets/Header/Header";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LogIn />} />
        </Routes>
    </div>
  );
}

export default App;
