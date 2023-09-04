import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import BitcoinRatesPage from "../pages/BitcoinRatesPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bitcoin-rates" element={<BitcoinRatesPage />} />
        </Routes>
    );
}

export default AppRoutes;
